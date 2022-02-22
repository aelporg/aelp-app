import TopNav from '@components/organisms/top-nav/top-nav'
import Tabs from '@components/primitives/tabs/tabs'
import { useRouter } from 'next/router'
import { Logo } from '@components/primitives'
import Editor, { useMonaco } from '@monaco-editor/react'
import { useEffect } from 'react'
import Splitter, { SplitDirection } from '@devbookhq/splitter'
import { CogIcon } from '@heroicons/react/outline'
import Markdown from 'react-markdown'

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
        initialSizes={[50, 50]}
        draggerClassName="bg-slate-300"
      >
        {/* <div className="bg-slate-100"></div> */}
        <div className="flex-1 h-full w-full">
          <div className="flex justify-between py-4 px-6 border-b uppercase font-bold text-gray-400">
            Code Editor
            <CogIcon className="w-5" />
          </div>
          <Editor
            language="cpp"
            className="pt-2"
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
              <Tabs defaultValue="questionStatement">
                <Tabs.List>
                  <Tabs.Trigger value="questionStatement">
                      Statment
                  </Tabs.Trigger>
                  <Tabs.Trigger value="whiteboard">Whiteboard</Tabs.Trigger>
                </Tabs.List>
                <Tabs.Content value="whiteboard">
                  <div className='w-20 h-20'>

                  </div>
                </Tabs.Content>
                <Tabs.Content value="questionStatement">
                  <Markdown className='mrkdown' >
                    {"## Question Statement \n\nThis is a question statement"}
                  </Markdown>
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
