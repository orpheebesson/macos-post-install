import { memo } from 'react'
import { Icon } from '@/components/atoms'
import { useSelection } from '@/hooks'
import { IApp } from '@/types/app'

interface AppCardProps extends IApp {}

const AppCard = memo(({ id, icon, name, description }: AppCardProps) => {
  const { selectedApps, toggleApp } = useSelection()
  const isSelected = selectedApps.includes(id)

  return (
    <button
      onClick={() => toggleApp(id)}
      aria-label={`${isSelected ? 'Unselect' : 'Select'} ${name}`}
      aria-pressed={isSelected}
      className={`flex flex-col relative rounded-xl border-2 p-5 text-left transition-all
                ${
                  isSelected
                    ? 'border-accent bg-accent-light'
                    : 'border-dark-200 hover:border-accent bg-surface-primary'
                }`}
    >
      <div className='flex flex-col items-start gap-3'>
        {icon && icon.value && (
          <Icon
            value={icon.value}
            color={icon.color}
            customClasses='size-[22px]'
          />
        )}
        <div className='flex flex-col gap-0.5'>
          <h6 className='font-semibold'>{name}</h6>
          <p className={'text-content-tertiary text-sm'}>{description}</p>
        </div>
      </div>
    </button>
  )
})

export default AppCard
