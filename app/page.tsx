import { SelectionProvider } from '@/context/SelectionContext'
import {
  ActionBar,
  AppCards,
  FeaturesCards,
  Footer,
  Header,
  HomeHero,
} from '@/components/organisms'

export default function Home() {
  return (
    <SelectionProvider>
      <Header />
      <main>
        <div className='mx-auto max-w-6xl px-6 py-16'>
          <HomeHero />
          <FeaturesCards />
          <AppCards />
          <ActionBar />
        </div>
      </main>
      <Footer />
    </SelectionProvider>
  )
}
