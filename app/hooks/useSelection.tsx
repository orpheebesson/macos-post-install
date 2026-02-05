import { useContext } from 'react'
import { SelectionContext } from '@/context/SelectionContext'

const useSelection = () => {
  const context = useContext(SelectionContext)

  if (!context) {
    throw new Error('useSelection must be used within SelectionProvider')
  }

  return context
}

export default useSelection
