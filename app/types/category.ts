export type TAppCategory =
  | 'browser'
  | 'productivity'
  | 'media-player'
  | 'communication'
  | 'development'
  | 'creation'
  | 'ai'
  | 'gaming'
  | 'security-privacy'
  | 'system-utility'

export interface ICategory {
  id: TAppCategory
  name: string
  icon: string
  description: string
}
