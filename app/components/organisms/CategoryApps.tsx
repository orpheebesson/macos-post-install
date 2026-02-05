'use client'

import { useState } from 'react'
import { AppCard } from '@/components/moles'
import { useSelection } from '@/hooks'
import { IApp } from '@/types/app'
import { ICategory } from '@/types/category'
import clsx from 'clsx'

interface CategoryAppsProps {
  category: ICategory
  apps: IApp[]
}

export default function CategoryApps({ category, apps }: CategoryAppsProps) {
  const [expanded, setExpanded] = useState(true)
  const { isAllCategorySelected, selectAllInCategory, deselectAllInCategory } =
    useSelection()

  const allSelected = isAllCategorySelected(category.id)

  const handleSelectAll = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation()
    if (allSelected) {
      deselectAllInCategory(category.id)
    } else {
      selectAllInCategory(category.id)
    }
  }

  return (
    <article>
      <div className='flex gap-1.5 mb-1.5 p-1.5 items-stretch'>
        <button
          onClick={() => setExpanded(!expanded)}
          id={`category-${category.id}-label`}
          aria-expanded={expanded}
          aria-label={`${expanded ? 'Collapse' : 'Expand'} ${category.name} category`}
          className='flex items-center py-3 gap-2.5 grow shrink basis-0 justify-start text-left'
        >
          <span className='shrink-0 text-xl'>{category.icon}</span>
          <div className='overflow-hidden grow shrink basis-0'>
            <h5 className='font-semibold text-lg'>
              {category.name}
              <span
                style={{
                  fontSize: '10px',
                  marginLeft: '8px',
                  verticalAlign: 'middle',
                }}
              >
                {expanded ? '▼' : '▶'}
              </span>
            </h5>
            <div className='text-content-secondary text-base'>
              {category.description}
            </div>
          </div>
        </button>

        <button
          onClick={handleSelectAll}
          style={{
            minWidth: '100px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '4px',
            padding: '4px 12px',
            flexShrink: 0,
          }}
          title={
            allSelected
              ? 'Deselect all items in this category'
              : 'Select all items in this category'
          }
        >
          <input
            type='checkbox'
            checked={allSelected}
            readOnly
            className='win98-checkbox'
            style={{ pointerEvents: 'none', marginBottom: '2px' }}
          />
          <span
            style={{
              fontSize: '10px',
              fontWeight: 'bold',
              textTransform: 'uppercase',
              letterSpacing: '0.5px',
            }}
          >
            {allSelected ? 'Deselect All' : 'Select All'}
          </span>
        </button>
      </div>

      <div
        role='region'
        aria-labelledby={`category-${category.id}-label`}
        className={clsx(
          'grid gap-6 sm:grid-cols-2 md:grid-cols-3 transition-all overflow-hidden ease-in-out',
          expanded ? 'max-h-500 duration-1000' : 'max-h-0 duration-300'
        )}
      >
        {apps.map((app) => (
          <AppCard key={app.id} {...app} />
        ))}
      </div>
    </article>
  )
}
