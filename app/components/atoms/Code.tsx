import clsx from 'clsx'

interface CodeProps {
  content: string
  customClasses?: string
}

export default function Code({ content, customClasses }: CodeProps) {
  return (
    <pre
      className={clsx(
        'overflow-x-auto rounded-md border border-dark-800 bg-dark-800 p-4 text-sm text-white/90 font-mono whitespace-pre-wrap wrap-break-word',
        customClasses
      )}
    >
      <code>{content}</code>
    </pre>
  )
}
