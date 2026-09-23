const BUMP_RULES = [
  [/^(major|breaking)\//, 'major'],
  [/^(feat|feature)\//, 'minor'],
]

const [branch = '', currentTag = 'v0.0.0'] = process.argv.slice(2)

const resolveBump = () => {
  if (!branch) return 'none'
  return BUMP_RULES.find(([pattern]) => pattern.test(branch))?.[1] ?? 'patch'
}

const bumpVersion = (version, type) => {
  const [major, minor, patch] = version.split('.').map(Number)
  if (type === 'major') return `${major + 1}.0.0`
  if (type === 'minor') return `${major}.${minor + 1}.0`
  if (type === 'patch') return `${major}.${minor}.${patch + 1}`
  return version
}

const type = resolveBump()
const version = bumpVersion(currentTag.replace(/^v/, ''), type)

console.log(`type=${type}`)
console.log(`version=${version}`)
