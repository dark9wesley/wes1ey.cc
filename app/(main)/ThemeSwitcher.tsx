'use client'

import { useTheme } from 'next-themes'
import React from 'react'

import { LightningIcon, MoonIcon, SunIcon } from '~/assets'

const themes = [
  {
    label: '浅色模式',
    value: 'light',
    icon: SunIcon,
  },
  {
    label: '深色模式',
    value: 'dark',
    icon: MoonIcon,
  },
]
export function ThemeSwitcher() {
  const [mounted, setMounted] = React.useState(false)
  const { setTheme, theme, resolvedTheme } = useTheme()
  const ThemeIcon = React.useMemo(
    () => themes.find((t) => t.value === theme)?.icon ?? LightningIcon,
    [theme]
  )

  React.useEffect(() => setMounted(true), [])

  function toggleTheme() {
    setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')
  }

  if (!mounted) {
    return <div className="w-12"></div>
  }

  return (
    <button
      type="button"
      aria-label="切换颜色主题"
      className="px-3 py-2 transition"
      onClick={toggleTheme}
    >
      <ThemeIcon className="h-6 w-6 stroke-zinc-500 p-0.5 transition group-hover:stroke-zinc-700 dark:group-hover:stroke-zinc-200" />
    </button>
  )
}
