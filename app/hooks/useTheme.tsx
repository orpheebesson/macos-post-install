'use client'

import { useEffect, useState } from 'react'

type Theme = 'light' | 'dark'

const useTheme = () => {
  const [theme, setTheme] = useState<Theme>('light')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme') as Theme | null

    if (storedTheme) {
      setTheme(storedTheme)
      applyTheme(storedTheme)
    } else {
      const prefersDark = window.matchMedia(
        '(prefers-color-scheme: dark)'
      ).matches
      const systemTheme = prefersDark ? 'dark' : 'light'
      setTheme(systemTheme)
      applyTheme(systemTheme)
    }

    setMounted(true)
  }, [])

  const applyTheme = (newTheme: Theme) => {
    const root = document.documentElement
    if (newTheme === 'dark') {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }
  }

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
    localStorage.setItem('theme', newTheme)
    applyTheme(newTheme)
  }

  const setThemeMode = (newTheme: Theme) => {
    setTheme(newTheme)
    localStorage.setItem('theme', newTheme)
    applyTheme(newTheme)
  }

  return {
    theme,
    toggleTheme,
    setTheme: setThemeMode,
    mounted,
  }
}

export default useTheme
