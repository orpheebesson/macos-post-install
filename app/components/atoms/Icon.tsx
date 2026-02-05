import * as Icons from '@/components/atoms/icons'
import { TAppIcon } from '@/types/app'

interface AppIconProps {
  value: TAppIcon
  color?: string
  customClasses?: string
}

export default function AppIcon({ value, color, customClasses }: AppIconProps) {
  const Icon = Icons[value]

  if (!Icon) {
    return null
  }

  return (
    <div className='shrink-0'>
      <Icon color={color} className={customClasses} />
    </div>
  )
}
