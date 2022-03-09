import Button from '@components/primitives/button'
import ScreenCenter from '@components/primitives/screen-center'
import { useRef } from 'react'
import { toast } from 'react-toastify'


export default function Test() {
  const count = useRef(0)

  return (
    <ScreenCenter>
      <Button
        onClick={() => {
          toast.error("Hello world!")
        }}
      >
        Show toast
      </Button>
    </ScreenCenter>
  )
}
