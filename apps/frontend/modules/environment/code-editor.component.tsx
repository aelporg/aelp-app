import Editor, { useMonaco } from '@monaco-editor/react'
import { useEnvironmentContext } from './environment.context'

export default function CodeEditor() {
  const monaco = useMonaco()
  const { environment } = useEnvironmentContext()

  return (
    <Editor
      language={environment.files[0].language.editorConfigName}
      className="pt-2"
      defaultValue={environment.files[0].data}
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
