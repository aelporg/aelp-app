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
import Loader from '@components/primitives/loader'
import Button from '@components/primitives/button'
import Select from '@components/primitives/select/select.component'
import Center from '@components/primitives/center'
import NoResultMessage from '@components/templates/NoResultMessage'
import { useEffect, useState } from 'react'
import { EnvironmentProvider, useEnviromentStore } from './useEnvirnoment'
import { Console } from './components/console'
import { TestCasesResult as TestCases } from './components/test-cases-result'
import { OutputPortion } from './components/output-portion'
import { StatementPortion } from './components/statement-portion'
const splitterDefaultProps = {
  gutterClassName: 'bg-slate-100',
  draggerClassName: 'bg-slate-300',
}

export default function Environment() {
  const router = useRouter()
  const { id } = router.query

  if (!id) return null

  return (
    <EnvironmentProvider environmentId={id as string}>
      <EnvironmentPageContent />
    </EnvironmentProvider>
  )
}

function EnvironmentPageContent() {
  const environment = useEnviromentStore(e => e.environment)
  const envLoading = useEnviromentStore(e => e.loadingState.loadingEnv)
  const loadEnv = useEnviromentStore(e => e.fetchEnvironment)

  useEffect(() => {
    loadEnv()
  }, [loadEnv])

  if (envLoading) {
    return (
      <Center full>
        <Loader />
      </Center>
    )
  }

  if (environment == null) {
    return (
      <Center full>
        <NoResultMessage title="404 NOT FOUND">
          The environment you are looking for does not exist.
        </NoResultMessage>
      </Center>
    )
  }

  return (
    <div className="w-full flex flex-col items-stretch h-screen">
      <TopNav persistentBorder heading={<Logo href="/app" />} sticky={false} />
      <Splitter initialSizes={[50, 50]} {...splitterDefaultProps}>
        <CodeEditor />
        <div className="flex h-full flex-col">
          <Splitter
            {...splitterDefaultProps}
            direction={SplitDirection.Vertical}
          >
            <StatementPortion />
            <OutputPortion />
          </Splitter>
        </div>
      </Splitter>
    </div>
  )
}
