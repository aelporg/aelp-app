import { useState } from 'react';

export default function useDisclosure(initialState = false) {
  const [isOpen, setIsOpen] = useState(initialState);

  const onClose = () => {
    setIsOpen(false);
  };

  const onOpen = () => {
    setIsOpen(true);
  };

  return {
    isOpen,
    onClose,
    onOpen,
  };
}
