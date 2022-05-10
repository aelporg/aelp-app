import Button from '@components/primitives/button'
import Tabs from '@components/primitives/tabs/tabs'
import { PlayIcon } from '@heroicons/react/outline'
import { useRouter } from 'next/router'
import { useEnviromentStore } from '../useEnvirnoment'
import { Console } from './console'
import { TestCasesResult } from './test-cases-result'

export function OutputPortion() {
  const consoleTabState = useEnviromentStore(e => e.uiState.consoleTab)
  const assessmentId = useEnviromentStore(e => e.environment.answer.baseAnswer.question.assessmentId)
  const updateUiState = useEnviromentStore(e => e.updateUiState)
  const runTestCases = useEnviromentStore(e => e.runTestCases)
  const loadingState = useEnviromentStore(e => e.loadingState)
  const submitEnv = useEnviromentStore(e => e.submitEnv)
  const router = useRouter()

  return (
    <div className="flex-auto flex h-full w-full bg-white">
      <div className="w-3/4 overflow-y-scroll text-sm">
        <Tabs
          value={consoleTabState}
          onValueChange={e =>
            updateUiState({ consoleTab: e as 'console' | 'testcases' })
          }
        >
          <Tabs.List className="fixed w-full border-b bg-white ">
            <Tabs.Trigger value="console">Console</Tabs.Trigger>
            <Tabs.Trigger value="testcases">Test Cases</Tabs.Trigger>
          </Tabs.List>
          <Tabs.Content className="bg-white p-4 pt-16" value="console">
            <Console />
          </Tabs.Content>
          <Tabs.Content className="bg-white p-4 pt-20" value="testcases">
            <TestCasesResult />
          </Tabs.Content>
        </Tabs>
      </div>
      <div className="flex justify-center px-5 w-1/4 flex-col gap-2 border">
        <Button
          icon={<PlayIcon />}
          variant="secondary"
          onClick={() => runTestCases()}
          loading={loadingState.runningTestCases}
          disabled={loadingState.updatingCode}
        >
          Run Test Cases
        </Button>
        <Button
          loading={loadingState.submitting}
          onClick={async () => {
            try {
              await submitEnv()
              router.replace(`/app/assessment/${assessmentId}`)
            } catch (e) {
              console.log(e)
            }
          }}
        >
          Submit
        </Button>
      </div>
    </div>
  )
}
