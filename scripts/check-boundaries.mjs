import { readdirSync, readFileSync, statSync } from 'node:fs'
import { dirname, join, relative, resolve, sep } from 'node:path'

const SRC = resolve('src')
const IMPORT_PATTERN = /(?:from|import)\s+['"](\.[^'"]+)['"]/g

const RULES = {
  app: { forbidden: [] },
  modules: { forbidden: ['app'], isolated: true, shared: ['types', 'index'] },
  features: { forbidden: ['app', 'modules'], isolated: true },
  shared: { forbidden: ['app', 'modules', 'features', 'content'] },
  content: { forbidden: ['app', 'modules', 'features', 'shared'] },
}

const walk = (dir) =>
  readdirSync(dir).flatMap((name) => {
    const path = join(dir, name)
    if (statSync(path).isDirectory()) return walk(path)
    return /\.tsx?$/.test(name) ? [path] : []
  })

const locate = (path) => {
  const [layer, unit = ''] = relative(SRC, path).split(sep)
  return { layer, unit: unit.replace(/\.tsx?$/, '') }
}

const findViolation = (from, to) => {
  const rule = RULES[from.layer]
  if (!rule) return null
  if (rule.forbidden.includes(to.layer)) return `layer "${from.layer}" must not import "${to.layer}"`
  const crossesUnit = from.layer === to.layer && from.unit !== to.unit
  const isSharedUnit = rule.shared?.includes(from.unit) || rule.shared?.includes(to.unit)
  if (rule.isolated && crossesUnit && !isSharedUnit)
    return `${from.layer}/${from.unit} must not import ${to.layer}/${to.unit}`
  return null
}

const violations = walk(SRC).flatMap((file) => {
  const source = readFileSync(file, 'utf8')
  return [...source.matchAll(IMPORT_PATTERN)].flatMap(([, specifier]) => {
    const target = resolve(dirname(file), specifier)
    const message = findViolation(locate(file), locate(target))
    return message ? [`${relative(process.cwd(), file)} → ${specifier}: ${message}`] : []
  })
})

if (violations.length) {
  console.error(`Boundary violations:\n${violations.join('\n')}`)
  process.exit(1)
}
console.log('Module boundaries OK')
