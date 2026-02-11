'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { IoLogoGithub } from '@/components/atoms'
import { ThemeSwitcher } from '@/components/moles'
import { GIT_REPOSITORY_URL } from '@/utils/constants'
import clsx from 'clsx'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }

    handleScroll()

    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className='fixed top-0 left-0 w-full z-50'>
      <div
        className={clsx(
          'h-(--header-height) bg-background relative',
          'transition-[border] border-b duration-300',
          isScrolled ? 'border-b-dark-200' : 'border-b-transparent'
        )}
      >
        <div className='mx-auto max-w-6xl px-6 h-(--header-height)'>
          <div className='flex items-center justify-between gap-8 h-full'>
            <a className='flex items-center gap-2.5 shrink-0' href='/'>
              <Image
                src='/img/logo.png'
                width={24}
                height={24}
                alt='Logo macOS Post-Install'
              />
              <span className='text-sm font-semibold md:text-base'>
                macOS post-install
              </span>
            </a>
            <div className='flex items-center'>
              <ThemeSwitcher />
              <div className='flex items-center before:content-[""] before:ml-4 before:mr-2 before:h-6 before:w-px before:bg-dark-300 before:block'>
                <a
                  href={GIT_REPOSITORY_URL}
                  target='_blank'
                  rel='noopener noreferrer'
                  aria-label='macOS Post-Install on GitHub'
                  className='transition-colors text-content-secondary hover:text-content-primary size-9 flex justify-center items-center'
                >
                  <IoLogoGithub className='size-6' />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
