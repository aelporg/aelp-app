import Editor, { EditorProps, useMonaco } from '@monaco-editor/react'
import { useEffect } from 'react'
import { Path, useController, useFormContext } from 'react-hook-form'

const theme = {
  base: 'vs',
  inherit: true,
  rules: [
    {
      foreground: '04B46D',
      fontStyle: 'bold',
      token: 'keyword',
    },
  ],
}

export default function CodeEditor(props: EditorProps) {
  const monaco = useMonaco()

  useEffect(() => {
    if (monaco) {
      monaco.editor.defineTheme('aelpTheme', theme as any)
      monaco.editor.setTheme('aelpTheme')
    }
  }, [monaco])

  return (
    <Editor
      options={{
        fontSize: 16,
        mouseWheelZoom: true,
        tabSize: 2,
        theme: 'aelpTheme',
        // fontFamily: 'AelpFiraCode',
        fontLigatures: true,
        minimap: { enabled: false },
      }}
      className="w-full h-full"
      {...props}
    />
  )
}

export function HFCodeEditor<T = any>({ name, ...rest}: { name: Path<T> } & Omit<EditorProps, 'name'>) {
  const { control } = useFormContext<T>()

  const {
    field: { onChange, value },
  } = useController({ control, name })

  return <CodeEditor onChange={onChange} value={value as string} {...rest} />
}
