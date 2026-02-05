export default function HomeHero() {
  return (
    <header className='grid grid-cols-1 gap-8 md:grid-cols-2 md:items-center'>
      <div className='bg-dark-800 rounded-2xl aspect-video md:order-1'></div>
      <div className='text-center md:text-left flex flex-col gap-3'>
        <h1 className='text-5xl font-bold flex flex-col'>
          <span className='text-accent'>macOS</span>
          <span>Post-Install Generator</span>
        </h1>
        <h2 className='text-content-secondary text-xl'>
          Set up your Mac in few seconds automatically.
        </h2>
      </div>
    </header>
  )
}
