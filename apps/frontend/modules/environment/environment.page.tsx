import TopNav from '@components/organisms/top-nav/top-nav'
import Tabs from '@components/primitives/tabs/tabs'
import { useRouter } from 'next/router'
import { Logo } from '@components/primitives'
import Splitter, { SplitDirection } from '@devbookhq/splitter'
import { CogIcon, PlayIcon } from '@heroicons/react/outline'
import AdvancedMarkdownPreview from '@components/molecules/advanced-markdown-preview/advanced-markdown-review'
import IconButton from '@components/primitives/icon-button/icon-button'
import CodeEditor from './code-editor.component'
import WhiteBoard from './whiteboard.component'
import {
  EnviromentProvider,
  useEnvironmentContext,
} from './environment.context'
import Loader from '@components/primitives/loader'
import ScreenCenter from '@components/primitives/screen-center'
import Button from '@components/primitives/button'
import Select from '@components/primitives/select/select.component'
const splitterDefaultProps = {
  gutterClassName: 'bg-slate-100',
  draggerClassName: 'bg-slate-300',
}

export default function Environment() {
  const router = useRouter()
  const { id } = router.query

  return (
    <EnviromentProvider environmentId={id as string}>
      <EnvironmentPageContent />
    </EnviromentProvider>
  )
}

function EnvironmentPageContent() {
  const {
    environment,
    environmentLoading: loading,
    operations: {
      runCode: {
        func: runCode,
        result: runCodeResult,
        loading: runCodeLoading,
        error: runCodeError,
      },
      updateFile: { loading: updateFileLoading },
      changeLanguage: { func: changeLanguage, loading: changeLanguageLoading },
    },
  } = useEnvironmentContext()

  if (loading) {
    return (
      <ScreenCenter>
        <Loader />
      </ScreenCenter>
    )
  }

  if (!environment) {
    return <div>No environment found</div>
  }

  return (
    <div className="w-full flex flex-col items-stretch h-screen">
      <TopNav persistentBorder heading={<Logo href="/app" />} sticky={false} />
      <Splitter initialSizes={[50, 50]} {...splitterDefaultProps}>
        {/* <div className="bg-slate-100"></div> */}
        <div className="flex-1 h-full w-full">
          <div className="flex justify-between items-center py-4 px-6 border-b ">
            <h3 className="uppercase font-bold text-gray-400">Code Editor</h3>
            <div className="flex gap-2 items-stretch">
              <Select
                className="w-32"
                options={environment.files
                  .map(file => file.language)
                  .map(language => ({
                    label: language.name,
                    value: language.id,
                  }))}
                onChange={value => {
                  changeLanguage({
                    variables: { id: environment.id, languageId: value },
                  }).catch(console.error)
                }}
                value={environment.language.id}
              ></Select>
              <Button
                icon={<PlayIcon />}
                loading={runCodeLoading}
                disabled={updateFileLoading || changeLanguageLoading}
                onClick={() => runCode().catch(console.error)}
                size="sm"
              >
                Run Code
              </Button>
              <div className="flex items-center">
                <IconButton icon={<CogIcon />} />
              </div>
            </div>
          </div>
          <CodeEditor />
        </div>
        <div className="flex h-full flex-col">
          <Splitter
            {...splitterDefaultProps}
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
                  <WhiteBoard />
                </Tabs.Content>
                <Tabs.Content value="questionStatement">
                  <AdvancedMarkdownPreview
                    source={
                      environment?.answers[0].baseAnswer.question
                        .programmingQuestion.statementMrkdwn
                    }
                  />
                </Tabs.Content>
              </Tabs>
            </div>
            <div className="flex-auto p-2 ">
              <pre>
                {runCodeResult?.runCode ||
                  JSON.stringify(runCodeError, null, 2)}
              </pre>
            </div>
          </Splitter>
        </div>
      </Splitter>
    </div>
  )
}
