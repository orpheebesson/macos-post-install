export async function copyToClipboard(text: string) {
  await navigator.clipboard.writeText(text)
}

export const isStringArray = (value: unknown): value is string[] => {
  return Array.isArray(value) && value.every((v) => typeof v === 'string')
}
