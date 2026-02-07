import { ReactNode } from 'react'

export async function copyToClipboard(text: string) {
  await navigator.clipboard.writeText(text)
}

export const isStringArray = (value: unknown): value is string[] => {
  return Array.isArray(value) && value.every((v) => typeof v === 'string')
}

export const extractTextContent = (content: ReactNode): string => {
  if (typeof content === 'string') {
    return content
  }

  if (typeof content === 'number') {
    return String(content)
  }

  if (Array.isArray(content)) {
    return content.map(extractTextContent).join(' ')
  }

  return ''
}
