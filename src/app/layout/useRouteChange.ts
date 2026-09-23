import { useEffect } from 'react'
import { useLocation } from 'react-router'

export function useRouteChange(onChange: () => void) {
  const { pathname } = useLocation()

  // biome-ignore lint/correctness/useExhaustiveDependencies: must re-run on every route change
  useEffect(() => {
    onChange()
    window.scrollTo(0, 0)
  }, [pathname, onChange])
}
