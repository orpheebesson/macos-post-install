'use client'

import { useState } from 'react'
import { Button, Code, Reveal } from '@/components/atoms'
import { useScriptGenerator, useSelection } from '@/hooks'
import clsx from 'clsx'

interface ActionRevealProps {
  open: boolean
  onClose: () => void
}

export default function ActionReveal({ open, onClose }: ActionRevealProps) {
  const [activeTab, setActiveTab] = useState<'copy' | 'export'>('copy')
  const [copied, setCopied] = useState(false)

  const { selectedApps } = useSelection()
  const { generatedScript, copyScriptToClipboard, downloadScript } =
    useScriptGenerator(activeTab === 'copy' ? 'copy-paste' : 'executable')

  const handleCopyToClipboard = async () => {
    if (generatedScript) {
      await copyScriptToClipboard()
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  const totalSelected = selectedApps.length

  return (
    <Reveal
      open={open}
      headerTitle={'Apps selection'}
      headerSubtitle={`${totalSelected} app${totalSelected > 1 ? 's' : ''} selected`}
      onClose={onClose}
    >
      <div className='p-6 flex flex-col gap-8 grow'>
        <div
          tabIndex={0}
          role='tablist'
          className='relative flex p-2 bg-dark-200 rounded-lg w-full'
        >
          <div
            className={clsx(
              'absolute transition-[translate,width] duration-200 rounded-md shadow-xs inset-y-2 w-[calc(50%-8px)] bg-surface-secondary',
              activeTab === 'copy' ? 'translate-x-0' : 'translate-x-full'
            )}
          />
          <button
            onClick={() => setActiveTab('copy')}
            className={clsx(
              'flex-1 px-4 py-3 text-sm inline-flex items-center justify-center gap-3 transition relative font-semibold',
              activeTab === 'copy'
                ? ' text-white'
                : 'text-content-secondary hover:text-content-primary'
            )}
            data-umami-event='Copy to clipboard tab'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
            >
              <rect width='14' height='14' x='8' y='8' rx='2' ry='2' />
              <path d='M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2' />
            </svg>
            <span>Copy to clipboard</span>
          </button>
          <button
            onClick={() => setActiveTab('export')}
            className={clsx(
              'flex-1 px-4 py-3 text-sm inline-flex items-center justify-center gap-3 transition relative font-semibold',
              activeTab === 'export'
                ? ' text-white'
                : 'text-content-secondary hover:text-content-primary'
            )}
            data-umami-event='Export as file tab'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
            >
              <path d='M12 15V3' />
              <path d='M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4' />
              <path d='m7 10 5 5 5-5' />
            </svg>
            <span>Export as file</span>
          </button>
        </div>

        <div className='flex flex-col gap-8'>
          {activeTab === 'copy' && (
            <>
              <ol className='list-decimal list-inside'>
                <li className='text-content-secondary'>
                  Copy the script below
                </li>
                <li className='text-content-secondary'>
                  Open your terminal application
                </li>
                <li className='text-content-secondary'>
                  Paste the script and hit enter
                </li>
              </ol>

              {generatedScript && (
                <Code content={generatedScript} customClasses='max-h-60' />
              )}

              <Button
                onClick={handleCopyToClipboard}
                data-umami-event='Copy to clipboard button'
              >
                {copied ? 'Copied' : 'Copy'}
              </Button>
            </>
          )}

          {activeTab === 'export' && (
            <>
              <ol className='list-decimal list-inside'>
                <li className='text-content-secondary'>
                  Download the script file
                </li>
                <li className='text-content-secondary'>
                  Open your terminal application
                </li>
                <li className='text-content-secondary'>
                  Run the script with:{' '}
                  <code className='rounded-md bg-dark-100 px-1.5 py-0.5 wrap-break-word relative text-[85%]'>
                    sh path/to/macos-post-install.sh
                  </code>
                </li>
              </ol>

              {generatedScript && (
                <Code content={generatedScript} customClasses='max-h-60' />
              )}

              <Button
                onClick={downloadScript}
                data-umami-event='Download script button'
              >
                Download macos-post-install.sh
              </Button>
            </>
          )}
        </div>

        <div className='mt-auto'>
          <div className='relative overflow-hidden w-full rounded-lg p-4 flex gap-2.5 items-start bg-warning/10 text-warning ring ring-inset ring-warning/25'>
            <div className='min-w-0 flex-1 flex flex-col'>
              <span className='text-xs font-medium'>Disclaimer</span>
              <p className='text-xs opacity-90 mt-1'>
                This tool generates scripts that install apps. Always review
                generated scripts before execution. The authors are not
                responsible for any system issues resulting from script
                execution. Use at your own risk and ensure you have backups of
                important data.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Reveal>
  )
}
