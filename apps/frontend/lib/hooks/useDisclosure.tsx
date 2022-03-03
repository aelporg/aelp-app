import { useCallback, useState } from 'react'

export default function useDisclosure(initialState = false) {
  const [isOpen, setIsOpen] = useState(initialState)

  const onClose = useCallback(() => {
    setIsOpen(false)
  }, [setIsOpen])

  const onOpen = useCallback(() => {
    setIsOpen(true)
  }, [setIsOpen])

  return {
    isOpen,
    onClose,
    onOpen,
  }
}
