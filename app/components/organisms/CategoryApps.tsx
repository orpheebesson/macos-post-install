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
              <span className='text-[10px] ml-2 align-middle'>
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
          className='flex flex-col justify-center items-center gap-1 shrink-0 px-3 py-1'
          title={
            allSelected
              ? 'Deselect all items in this category'
              : 'Select all items in this category'
          }
        >
          <input
            id={`select-all-${category.id}`}
            type='checkbox'
            checked={allSelected}
            readOnly
            className='pointer-events-none mb-0.5'
          />
          <label
            htmlFor={`select-all-${category.id}`}
            className='text-[10px] font-bold uppercase tracking-wide'
          >
            {allSelected ? 'Deselect All' : 'Select All'}
          </label>
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
