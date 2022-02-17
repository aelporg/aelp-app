import TopNav from '@components/organisms/top-nav/top-nav'
import Tabs from '@components/primitives/tabs/tabs'
import { useRouter } from 'next/router'
import { Logo } from '@components/primitives'
import Editor, { useMonaco } from '@monaco-editor/react'
import { useEffect } from 'react'
import Splitter, { SplitDirection } from '@devbookhq/splitter'

export default function Environment() {
  const monaco = useMonaco()
  const router = useRouter()
  const { id } = router.query

  useEffect(() => {
    if (!monaco) return
    console.log(monaco)
  }, [monaco])

  return (
    <div className="w-full flex flex-col items-stretch h-screen">
      <TopNav persistentBorder heading={<Logo href="/app" />} sticky={false} />
      <Splitter
        gutterClassName="bg-slate-100"
        initialSizes={[15, 40, 45]}
        draggerClassName="bg-slate-300"
      >
        <div className="bg-slate-100"></div>
        <div className="flex-1 h-full w-full">
          <Editor
            language="cpp"
            options={{
              fontSize: 16,
              mouseWheelZoom: true,
              fontFamily: 'AelpFiraCode',
              fontLigatures: true,
              minimap: { enabled: false },
            }}
          />
        </div>
        <div className="flex h-full flex-col">
          <Splitter
            gutterClassName="bg-slate-100"
            draggerClassName="bg-slate-300"
            direction={SplitDirection.Vertical}
          >
            <div className="flex-auto">
              <Tabs>
                <Tabs.List>
                  <Tabs.Trigger value="whiteboard">Whiteboard</Tabs.Trigger>
                  <Tabs.Trigger value="questionStatement">
                    Statement
                  </Tabs.Trigger>
                </Tabs.List>
                <Tabs.Content value="whiteboard">
                  Whiteboard khul gya
                </Tabs.Content>
                <Tabs.Content value="questionStatement">
                  Question statment khul gai
                </Tabs.Content>
              </Tabs>
            </div>
            <div className="flex-auto">hi</div>
          </Splitter>
        </div>
      </Splitter>
    </div>
  )
}
