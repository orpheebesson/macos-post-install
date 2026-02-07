'use client'

import { ReactNode, useState, useRef, useEffect } from 'react'
import type { FAQPage, WithContext } from 'schema-dts'
import { extractTextContent } from '@/utils/utilities'
import clsx from 'clsx'

interface AccordionItemProps {
  title: string
  children: ReactNode
  isOpen?: boolean
  onToggle?: () => void
  index: number
}

function AccordionItem({
  title,
  children,
  isOpen = false,
  onToggle,
  index,
}: AccordionItemProps) {
  const contentRef = useRef<HTMLDivElement>(null)
  const [height, setHeight] = useState<number | undefined>(undefined)

  useEffect(() => {
    if (contentRef.current) {
      setHeight(isOpen ? contentRef.current.scrollHeight : 0)
    }
  }, [isOpen])

  const buttonId = `accordion-button-${index}`
  const panelId = `accordion-panel-${index}`

  return (
    <div>
      <h3>
        <button
          id={buttonId}
          aria-expanded={isOpen}
          aria-controls={panelId}
          onClick={onToggle}
          className={clsx(
            'flex w-full items-center justify-between px-6 py-4 text-left transition-colors',
            'hover:bg-dark-100',
            'font-semibold'
          )}
        >
          <span>{title}</span>
          <svg
            className={clsx(
              'h-5 w-5 transition-transform duration-300 ease-in-out',
              isOpen && 'rotate-180'
            )}
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
            aria-hidden='true'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M19 9l-7 7-7-7'
            />
          </svg>
        </button>
      </h3>
      <div
        id={panelId}
        role='region'
        aria-labelledby={buttonId}
        style={{ height }}
        className={clsx(
          'overflow-hidden transition-all duration-300 ease-in-out',
          !isOpen && 'invisible'
        )}
      >
        <div ref={contentRef} className='px-6 py-4'>
          {children}
        </div>
      </div>
    </div>
  )
}

interface AccordionProps {
  items: Array<{
    title: string
    content: ReactNode
  }>
  allowMultiple?: boolean
  defaultOpenIndexes?: number[]
  customClasses?: string
}

export default function Accordion({
  items,
  allowMultiple = false,
  defaultOpenIndexes = [],
  customClasses,
}: AccordionProps) {
  const [openIndexes, setOpenIndexes] = useState<Set<number>>(
    new Set(defaultOpenIndexes)
  )

  const toggleItem = (index: number) => {
    setOpenIndexes((prev) => {
      const newSet = new Set(prev)
      if (newSet.has(index)) {
        newSet.delete(index)
      } else {
        if (!allowMultiple) {
          newSet.clear()
        }
        newSet.add(index)
      }
      return newSet
    })
  }

  const jsonLd: WithContext<FAQPage> = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.title,
      acceptedAnswer: {
        '@type': 'Answer',
        text: extractTextContent(item.content),
      },
    })),
  }

  return (
    <>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div
        className={clsx(
          'divide-y divide-dark-200 rounded-xl border border-dark-200 bg-surface-primary',
          customClasses
        )}
      >
        {items.map((item, index) => (
          <AccordionItem
            key={index}
            index={index}
            title={item.title}
            isOpen={openIndexes.has(index)}
            onToggle={() => toggleItem(index)}
          >
            {item.content}
          </AccordionItem>
        ))}
      </div>
    </>
  )
}
