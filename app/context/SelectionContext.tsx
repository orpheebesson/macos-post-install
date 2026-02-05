'use client'

import {
  createContext,
  ReactNode,
  useCallback,
  useEffect,
  useState,
  useMemo,
} from 'react'
import { TAppCategory } from '@/types/category'
import { getCategoryAppIds, sortedAppsCatalog } from '@/utils/catalog'
import { LOCAL_STORAGE_KEYS } from '@/utils/constants'
import { isStringArray } from '@/utils/utilities'

interface ISelectionContext {
  selectedApps: string[]
  toggleApp: (id: string) => void
  selectAllInCategory: (categoryId: TAppCategory) => void
  deselectAllInCategory: (categoryId: TAppCategory) => void
  isAllCategorySelected: (categoryId: TAppCategory) => boolean
  clearApps: () => void
}

export const SelectionContext = createContext<null | ISelectionContext>(null)

const loadInitialSelections = () => {
  try {
    const saved = localStorage.getItem(LOCAL_STORAGE_KEYS.selections)
    if (!saved) return { apps: [] }

    const data = JSON.parse(saved)

    return {
      apps: isStringArray(data?.apps) ? data.apps : [],
    }
  } catch (error) {
    console.error('Error loading selections from localStorage:', error)
  }
  return { apps: [] }
}

export function SelectionProvider({ children }: { children: ReactNode }) {
  const [selectedApps, setSelectedApps] = useState<string[]>([])

  useEffect(() => {
    const { apps } = loadInitialSelections()
    setSelectedApps(apps)
  }, [])

  useEffect(() => {
    localStorage.setItem(
      LOCAL_STORAGE_KEYS.selections,
      JSON.stringify({
        apps: selectedApps,
      })
    )
  }, [selectedApps])

  const toggleApp = useCallback((id: string) => {
    setSelectedApps((prev) =>
      prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]
    )
  }, [])

  const selectAllInCategory = useCallback((categoryId: TAppCategory) => {
    const categoryItems = getCategoryAppIds(sortedAppsCatalog, categoryId)
    setSelectedApps((prev) => [...new Set([...prev, ...categoryItems])])
  }, [])

  const deselectAllInCategory = useCallback((categoryId: TAppCategory) => {
    const categoryItems = getCategoryAppIds(sortedAppsCatalog, categoryId)
    setSelectedApps((prev) => prev.filter((id) => !categoryItems.includes(id)))
  }, [])

  const isAllCategorySelected = useCallback(
    (categoryId: TAppCategory) => {
      const categoryItems = getCategoryAppIds(sortedAppsCatalog, categoryId)
      if (categoryItems.length === 0) return false

      return categoryItems.every((id) => selectedApps.includes(id))
    },
    [selectedApps]
  )

  const clearApps = useCallback(() => {
    setSelectedApps([])
  }, [])

  const value = useMemo(
    () => ({
      selectedApps,
      toggleApp,
      selectAllInCategory,
      deselectAllInCategory,
      isAllCategorySelected,
      clearApps,
    }),
    [
      selectedApps,
      toggleApp,
      selectAllInCategory,
      deselectAllInCategory,
      isAllCategorySelected,
      clearApps,
    ]
  )

  return (
    <SelectionContext.Provider value={value}>
      {children}
    </SelectionContext.Provider>
  )
}
