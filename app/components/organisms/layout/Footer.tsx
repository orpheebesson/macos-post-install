import { GIT_REPOSITORY_URL } from '@/utils/constants'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className='p-8 relative border-t border-t-dark-200 text-center'>
      <div className='mx-auto max-w-6xl px-6'>
        <div className='flex flex-col items-center md:flex-row md:justify-between md:items-center gap-4 text-sm text-content-secondary'>
          <div className='md:flex-1 flex md:justify-start'>
            <a
              href={GIT_REPOSITORY_URL}
              target='_blank'
              rel='noopener noreferrer'
              className='transition-colors hover:text-content-primary'
            >
              Released under{' '}
              <span className='text-content-primary'>MIT License</span>
            </a>
          </div>
          <div className='flex md:justify-center'>
            © {currentYear} macOS post-install
          </div>
          <div className='md:flex-1 flex md:justify-end'>
            Made by&nbsp;
            <a
              href='https://www.orpheebesson.fr/'
              target='_blank'
              rel='noopener noreferrer'
              className='transition-colors hover:text-content-primary underline underline-offset-2'
            >
              Orphée
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
