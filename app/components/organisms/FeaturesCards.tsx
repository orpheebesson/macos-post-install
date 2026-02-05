import { StepCard } from '@/components/moles'

export default function FeaturesCards() {
  return (
    <section className='pt-20'>
      <div className='grid gap-6 grid-cols-1 md:grid-cols-3'>
        <StepCard
          emoji='🕹️'
          title='Select your apps'
          description='Choose the applications you want to install on your Mac.'
        />
        <StepCard
          emoji='⚙️'
          title='Generate your script'
          description='Get a ready-to-use script tailored to your selections.'
        />
        <StepCard
          emoji='🚀'
          title='Run the script'
          description='Execute the script in your terminal to install the apps. Your Mac is now ready to use!'
        />
      </div>
    </section>
  )
}
