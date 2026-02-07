import { Accordion } from '@/components/atoms'

export default function FaqSection() {
  return (
    <section className='py-20'>
      <div className='flex flex-col items-center gap-y-10'>
        <h2 className='font-bold text-4xl text-center'>
          Frequently asked questions
        </h2>
        <div className='max-w-3xl'>
          <Accordion
            items={[
              {
                title: 'What is macOS Post-Install Generator?',
                content:
                  'macOS Post-Install Generator is an open-source tool that helps you automatically install applications on macOS using the Terminal. It generates a ready-to-use script based on your selected apps, allowing you to set up a new Mac in minutes instead of hours.',
              },
              {
                title: 'Who is macOS Post-Install Generator for?',
                content:
                  'macOS Post-Install Generator is built for developers, power users, and teams who want to automate macOS setup. It is also ideal for onboarding new employees, allowing companies to quickly configure a consistent Mac environment for new hires using a single script.',
              },
              {
                title:
                  'How do I install applications on macOS using the Terminal?',
                content:
                  'With macOS Post-Install Generator, you simply select the apps you want, generate a shell script, and run it in the Terminal. The tool relies on Homebrew, the most popular macOS package manager, to safely download and install applications automatically.',
              },
              {
                title:
                  'Is it safe to install macOS applications with Homebrew?',
                content:
                  'Homebrew is a widely-used package manager for macOS that simplifies the installation of software. It is generally safe to use, as it installs applications in a controlled environment and verifies the integrity of packages. However, always ensure you trust the sources of the packages you install.',
              },
              {
                title: 'Do I need to install Homebrew manually?',
                content:
                  'No. If Homebrew is not already installed on your Mac, the generated script will install it automatically. If Homebrew is already present, the script detects it and continues without reinstalling anything.',
              },
              {
                title: 'Why should I automate my macOS setup?',
                content:
                  'Automating your macOS setup saves time, reduces errors, and ensures consistency. Instead of installing apps one by one, you can configure your entire Mac with a single command.',
              },
            ]}
            allowMultiple={false}
          />
        </div>
      </div>
    </section>
  )
}
