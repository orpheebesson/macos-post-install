import { apps } from '@/data/apps'
import { IApp } from '@/types/app'
import { TAppCategory } from '@/types/category'

export const getCategoryAppIds = (apps: IApp[], categoryId: TAppCategory) => {
  return apps
    .filter((item) => item.category === categoryId)
    .map((item) => item.id)
}

export const getAppsByCategory = (categoryId: TAppCategory) => {
  return apps.filter((app) => app.category === categoryId)
}

export const getAppById = (id: string) => {
  return apps.find((app) => app.id === id)
}

export const sortedAppsCatalog = apps.sort((a, b) =>
  a.name.localeCompare(b.name)
)
