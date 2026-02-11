'use client'

import { FiMoon, FiSun } from '@/components/atoms'
import { useTheme } from '@/hooks'
import clsx from 'clsx'

export default function ThemeSwitcher() {
  const { theme, toggleTheme, mounted } = useTheme()

  return (
    <button
      onClick={toggleTheme}
      className='relative border border-dark-300 w-10 block h-5.5 shrink-0 transition-colors duration-200 bg-dark-100 rounded-xl'
      type='button'
      role='switch'
      title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
      aria-checked={theme === 'dark'}
    >
      <span
        className={clsx(
          'absolute top-1/2 left-px -translate-y-1/2 size-4.5 rounded-full bg-background transition-transform duration-200 shadow-[0_1px_2px_rgba(0,0,0,0.04)]',
          theme === 'dark' && 'translate-x-4.5'
        )}
      >
        <span className='relative block w-full h-full rounded-full overflow-hidden'>
          <div className='absolute top-0.75 left-0.75 size-3 rounded-full flex justify-center items-center'>
            <FiSun className={clsx(theme === 'light' ? 'block' : 'hidden')} />
            <FiMoon className={clsx(theme === 'dark' ? 'block' : 'hidden')} />
          </div>
        </span>
      </span>
    </button>
  )
}
