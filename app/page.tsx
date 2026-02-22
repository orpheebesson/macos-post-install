import dynamic from 'next/dynamic'
import { SelectionProvider } from '@/context/SelectionContext'
import {
  ActionBar,
  AppCards,
  FeaturesCards,
  Footer,
  Header,
  HomeHero,
} from '@/components/organisms'

const FaqSection = dynamic(() => import('@/components/organisms/FaqSection'))

export default function Home() {
  return (
    <SelectionProvider>
      <Header />
      <main>
        <div className='mx-auto max-w-6xl px-6 py-16'>
          <HomeHero />
          <FeaturesCards />
          <AppCards />
          <FaqSection />
          <ActionBar />
        </div>
      </main>
      <Footer />
    </SelectionProvider>
  )
}
