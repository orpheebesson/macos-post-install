'use client'

import { MouseEvent, ReactNode, useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import clsx from 'clsx'

interface RevealProps {
  open: boolean
  bgColor?: string
  blur?: boolean
  destroyOnClose?: boolean
  headerTitle?: string
  headerSubtitle?: string
  onClose: () => void
  children: ReactNode
}

export default function Reveal({
  open,
  bgColor = 'bg-surface-secondary/75',
  blur = true,
  destroyOnClose = true,
  headerTitle,
  headerSubtitle,
  onClose,
  children,
}: RevealProps) {
  const [mounted, setMounted] = useState(false)

  const dialogRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setMounted(true)
  }, [])

  // Focus the dialog when opened
  useEffect(() => {
    if (!open || !dialogRef.current) return

    dialogRef.current.focus()
  }, [open, dialogRef])

  const handleClickOutside = () => {
    if (onClose) onClose()
  }

  const stopPropagation = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation()
  }

  // Freeze body scroll when reveal is open
  useEffect(() => {
    if (!open) return

    const body = document.querySelector('body')
    body?.classList.add('overflow-hidden')

    return () => {
      body?.classList.remove('overflow-hidden')
    }
  }, [open])

  // Close reveal when "Escape" is pressed
  useEffect(() => {
    if (!open) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }

    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [open, onClose])

  if (!mounted) return null

  return createPortal(
    <>
      <div
        aria-hidden={true}
        className={clsx(
          'z-1000 fixed inset-0 h-full w-full duration-300 ease-in-out',
          bgColor,
          open
            ? 'pointer-events-auto opacity-100'
            : 'pointer-events-none opacity-0',
          {
            'backdrop-blur-xs': blur,
          }
        )}
        onClick={handleClickOutside}
      />
      <div
        ref={dialogRef}
        tabIndex={-1}
        role='dialog'
        aria-labelledby={headerTitle ? 'reveal-title' : undefined}
        aria-describedby={headerSubtitle ? 'reveal-description' : undefined}
        className={clsx(
          'z-1001 fixed right-0 top-0 h-full w-full md:max-w-3xl duration-300 ease-out bg-surface-primary',
          open ? 'translate-x-0' : 'translate-x-full',
          open ? 'pointer-events-auto' : 'pointer-events-none'
        )}
      >
        <div
          className={clsx(
            'relative flex w-full h-full flex-col overflow-y-auto overflow-x-hidden'
          )}
          onClick={stopPropagation}
        >
          {open || !destroyOnClose ? (
            <>
              {headerTitle && (
                <div className='sticky z-10 w-full top-0 flex items-center justify-between border-b border-b-dark-200 bg-surface-primary p-6 gap-6'>
                  <div className='grow flex flex-col'>
                    <span id='reveal-title' className='font-semibold text-xl'>
                      {headerTitle}
                    </span>
                    <span
                      id='reveal-description'
                      className='text-content-secondary text-sm'
                    >
                      {headerSubtitle}
                    </span>
                  </div>
                  <button
                    onClick={onClose}
                    type='button'
                    aria-label={'Close reveal'}
                    className={clsx(
                      'z-1001 hover:bg-surface-secondary hover:text-white focus:text-white focus:bg-surface-secondary bg-dark-200 text-content-primary flex size-10 items-center justify-center rounded-full duration-500 ease-in-out hover:rotate-180 focus:rotate-180 shrink-0'
                    )}
                  >
                    <svg
                      width={24}
                      height={24}
                      viewBox={'0 0 24 24'}
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                      className='size-4'
                    >
                      <path
                        fillRule='evenodd'
                        fill='currentColor'
                        clipRule='evenodd'
                        d='M0.584985 0.609963C0.959663 0.235398 1.46777 0.0249785 1.99756 0.0249785C2.52736 0.0249785 3.03546 0.235398 3.41014 0.609963L11.9875 9.18733L20.5649 0.609963C20.7492 0.419135 20.9697 0.266923 21.2134 0.16221C21.4572 0.0574979 21.7194 0.00238075 21.9846 7.54382e-05C22.2499 -0.00222987 22.513 0.0483222 22.7586 0.148783C23.0041 0.249244 23.2272 0.397601 23.4148 0.585197C23.6024 0.772794 23.7508 0.995873 23.8512 1.24142C23.9517 1.48696 24.0022 1.75006 23.9999 2.01535C23.9976 2.28064 23.9425 2.54282 23.8378 2.78658C23.7331 3.03034 23.5809 3.25081 23.39 3.43512L14.8127 12.0125L23.39 20.5899C23.754 20.9667 23.9554 21.4714 23.9508 21.9952C23.9463 22.5191 23.7361 23.0202 23.3657 23.3907C22.9953 23.7611 22.4941 23.9712 21.9703 23.9758C21.4464 23.9803 20.9417 23.779 20.5649 23.415L11.9875 14.8376L3.41014 23.415C3.03332 23.779 2.52862 23.9803 2.00475 23.9758C1.48089 23.9712 0.979766 23.7611 0.609323 23.3907C0.238879 23.0202 0.0287522 22.5191 0.0241999 21.9952C0.0196477 21.4714 0.221035 20.9667 0.584985 20.5899L9.16235 12.0125L0.584985 3.43512C0.210419 3.06044 0 2.55234 0 2.02254C0 1.49275 0.210419 0.984641 0.584985 0.609963Z'
                      />
                    </svg>
                  </button>
                </div>
              )}
              {children}
            </>
          ) : null}
        </div>
      </div>
    </>,
    document.body
  )
}
