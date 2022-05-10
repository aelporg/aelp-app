import AdvancedMarkdownPreview from '@components/molecules/advanced-markdown-preview/advanced-markdown-review'
import Tabs from '@components/primitives/tabs/tabs'
import { useEnviromentStore } from '../useEnvirnoment'
import WhiteBoard from '../whiteboard.component'

export function StatementPortion() {
  const environment = useEnviromentStore(e => e.environment)

  return (
    <div className="flex-auto h-full overflow-y-scroll relative">
      <Tabs defaultValue="questionStatement">
        <Tabs.List className="fixed w-full border-b bg-white">
          <Tabs.Trigger value="questionStatement">Statment</Tabs.Trigger>
          <Tabs.Trigger value="whiteboard">Whiteboard</Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content value="whiteboard">
          <WhiteBoard />
        </Tabs.Content>
        <Tabs.Content className="bg-white p-4 pt-20" value="questionStatement">
          <AdvancedMarkdownPreview
            source={
              environment.answer.baseAnswer.question.programmingQuestion
                .statementMrkdwn
            }
          />
        </Tabs.Content>
      </Tabs>
    </div>
  )
}
