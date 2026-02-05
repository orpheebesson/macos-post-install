import { CategoryApps } from '@/components/organisms'
import { categories } from '@/data/categories'
import { getAppsByCategory } from '@/utils/catalog'

export default function AppCards() {
  return (
    <section className='py-20'>
      <div className='flex flex-col gap-y-6'>
        <h4 className='font-bold text-4xl'>Select apps</h4>
        {categories.map((category) => {
          const categoryApps = getAppsByCategory(category.id)

          return (
            <CategoryApps
              key={category.id}
              category={category}
              apps={categoryApps}
            />
          )
        })}
      </div>
    </section>
  )
}
