import { useMemo } from 'react'
import { useSelection } from '@/hooks'
import { getAppById } from '@/utils/catalog'
import { copyToClipboard } from '@/utils/utilities'
import { GIT_REPOSITORY_URL, WEBSITE_URL } from '@/utils/constants'

type TScriptMethod = 'copy-paste' | 'executable'

const useScriptGenerator = (method: TScriptMethod) => {
  const { selectedApps } = useSelection()

  const generatedScript = useMemo(() => {
    if (selectedApps.length === 0) return ''

    const casks = selectedApps
      .map((app) => getAppById(app)?.cask)
      .filter(Boolean)

    const scriptBody = `
# ========================================
# macOS Post-Install Script
# ----------------------------------------
# Website: ${WEBSITE_URL}
# GitHub: ${GIT_REPOSITORY_URL}
# ========================================

set -e

if ! command -v brew &> /dev/null; then
  echo "Homebrew not found. Installing..."
  /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
fi

brew update

brew install --cask \\
  ${casks.join(' \\\n  ')}
`.trim()

    if (method === 'copy-paste') {
      return `bash <<'EOF'
${scriptBody}
EOF`
    }

    // method === 'executable'
    return `#!/bin/bash
${scriptBody}`
  }, [method, selectedApps])

  const downloadScript = () => {
    const filename = 'macos-post-install.sh'

    // const blob = new Blob([content], { type: 'text/plain;charset=utf-8' })
    const blob = new Blob([generatedScript], { type: 'text/x-shellscript' })
    const url = URL.createObjectURL(blob)

    const link = document.createElement('a')
    link.href = url
    link.download = filename
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)

    URL.revokeObjectURL(url)
  }

  const copyScriptToClipboard = async () => {
    try {
      await copyToClipboard(generatedScript)
    } catch (error) {
      console.error('Failed to copy script to clipboard:', error)
    }
  }

  return {
    generatedScript,
    downloadScript,
    copyScriptToClipboard,
  }
}

export default useScriptGenerator
