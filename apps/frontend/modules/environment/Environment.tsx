import TopNav from '@components/organisms/top-nav/top-nav'
import { Logo } from '@components/primitives'
import Editor from '@monaco-editor/react'

export default function Environment() {
  return (
    <div className="w-screen h-screen">
      <TopNav heading={<Logo href="/app" />} />
      <div className="m-4 h-40 border">
        <Editor language="cpp" value="const foo = 'bar';"  />
      </div>
    </div>
  )
}
