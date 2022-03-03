import Editor, { useMonaco } from '@monaco-editor/react'
import { useEffect, useState } from 'react'
import { useEnvironmentContext } from './environment.context'
import { useDebounce } from 'react-use'

export default function CodeEditor() {
  const monaco = useMonaco()
  const {
    environment,
    operations: {
      updateFile: { func: updateFile, error, loading },
    },
  } = useEnvironmentContext()

  const [value, setValue] = useState(environment.files[0].data)

  useDebounce(
    () => {
      updateFile({
        variables: {
          id: environment.files[0].id,
          data: value,
        },
      })
    },
    250,
    [value, environment.files]
  )

  return (
    <Editor
      language={environment.files[0].language.editorConfigName}
      className="pt-2"
      onChange={setValue}
      value={value}
      options={{
        fontSize: 16,
        mouseWheelZoom: true,
        fontFamily: 'AelpFiraCode',
        fontLigatures: true,
        minimap: { enabled: false },
      }}
    />
  )
}
