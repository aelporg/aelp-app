import Button from '../../primitives/button'
import Modal from '../../primitives/modal/modal'

type ConfirmDialogVariant = 'danger' | 'normal'

interface ConfirmDialogProps {
  title?: string
  message?: string
  onConfirm: () => void
  onCancel: () => void
  confirmButtonMessage?: string
  closeButtonMessage?: string
  isOpen?: boolean
  variant?: ConfirmDialogVariant
  confirmLoading?: boolean
}

export default function ConfirmDialog({
  title,
  message,
  onConfirm,
  onCancel,
  confirmButtonMessage = 'Confirm',
  closeButtonMessage = 'Close',
  confirmLoading = false,
  isOpen = false,
  variant = 'normal',
}: ConfirmDialogProps) {
  return (
    <Modal isOpen={isOpen} onClose={onCancel} title={title}>
      <div className="flex flex-col">
        {message}
        <div className="flex justify-end gap-1 mt-2">
          <Button onClick={onCancel} size="md" variant="ghost">
            {closeButtonMessage}
          </Button>
          <Button
            onClick={() => {
              onConfirm()
            }}
            loading={confirmLoading}
            size="md"
            variant={variant === 'normal' ? 'primary' : 'danger'}
          >
            {confirmButtonMessage}
          </Button>
        </div>
      </div>
    </Modal>
  )
}
