import FormGroup from '@components/primitives/form-group/form-group'
import { TextArea } from '@components/primitives/textarea'
import { useEnviromentStore } from '../useEnvirnoment'

export function Console() {
  const lastTestResult = useEnviromentStore(e => e.lastRunResult)
  const customInput = useEnviromentStore(e => e.customInput)
  const setCustomInput = useEnviromentStore(e => e.setCustomInput)
  const hasCompileError = lastTestResult?.compile && lastTestResult?.compile?.code != 0

  return (
    <>
      <FormGroup label='Custom Input'>
        <TextArea
          placeholder="Test Input"
          className="mb-2"
          onChange={e => setCustomInput(e.target.value)}
          value={customInput}
        />
      </FormGroup>
      <pre>
        {hasCompileError ? (
          <pre>{lastTestResult?.compile?.output}</pre>
        ) : (
          <pre>{lastTestResult?.run?.output || 'No output'}</pre>
        )}
      </pre>
    </>
  )
}
