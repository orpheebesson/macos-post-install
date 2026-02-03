import * as Icons from '@/components/atoms/icons'
import { TAppCategory } from '@/types/category'

export type TAppIcon = keyof typeof Icons

export interface IApp {
  id: string
  name: string
  description: string
  icon: {
    value: TAppIcon
    color?: string
  }
  cask: string
  category: TAppCategory
}
