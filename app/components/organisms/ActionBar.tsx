'use client'

import { useEffect, useRef, useState } from 'react'
import { Button } from '@/components/atoms'
import { ActionReveal } from '@/components/organisms'
import { useSelection } from '@/hooks'
import clsx from 'clsx'

export default function ActionBar() {
  const { selectedApps, clearApps } = useSelection()

  const [revealOpen, setRevealOpen] = useState(false)
  const [isOverFooter, setIsOverFooter] = useState(false)
  const navRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const footer = document.querySelector('footer')
    if (!footer) return

    const observer = new IntersectionObserver(([entry]) => {
      setIsOverFooter(entry.isIntersecting)
    })

    observer.observe(footer)

    return () => {
      observer.disconnect()
    }
  }, [])

  const totalSelected = selectedApps.length

  return (
    <>
      <nav
        ref={navRef}
        className={clsx(
          'fixed bottom-4 p-2 md:p-3 z-10 bg-surface-primary rounded-2xl border border-dark-200 left-1/2 -translate-x-1/2 shadow-lg transition duration-300',
          'flex flex-col items-center gap-4',
          selectedApps.length > 0 && !isOverFooter
            ? 'translate-y-0 pointer-events-auto'
            : 'translate-y-[200%] pointer-events-none'
        )}
      >
        <div className='grid grid-cols-2 items-center gap-2'>
          <Button
            variant={'secondary'}
            disabled={totalSelected === 0}
            onClick={clearApps}
            data-umami-event='Clear all button'
          >
            Clear all
          </Button>
          <Button
            aria-expanded={revealOpen}
            aria-haspopup='dialog'
            disabled={totalSelected === 0}
            onClick={() => setRevealOpen(true)}
            data-umami-event='Finish button'
          >
            Finish
          </Button>
        </div>
      </nav>

      <ActionReveal open={revealOpen} onClose={() => setRevealOpen(false)} />
    </>
  )
}
