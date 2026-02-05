interface StepCardProps {
  emoji: string
  title: string
  description: string
}

export default function StepCard({ emoji, title, description }: StepCardProps) {
  return (
    <div className='flex flex-col border p-6 rounded-xl bg-dark-100 gap-5 border-dark-100'>
      <div className='size-12 flex justify-center items-center bg-dark-200 text-2xl rounded-md'>
        {emoji}
      </div>
      <div className='flex flex-col gap-2'>
        <h3 className='font-semibold'>{title}</h3>
        <p className='text-content-tertiary text-sm'>{description}</p>
      </div>
    </div>
  )
}
