import { Tldraw } from '@tldraw/tldraw'

export default function WhiteBoard() {
  return (
    <Tldraw
      showMultiplayerMenu={false}
      showMenu={false}
      showPages={false}
    />
  )
}
