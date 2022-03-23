import Editor, { useMonaco } from '@monaco-editor/react'
import { useCallback, useEffect, useState } from 'react'
import { useEnvironmentContext } from './environment.context'
import { useDebounce } from 'react-use'

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

export default function CodeEditor() {
  const monaco = useMonaco()
  const {
    environment,
    operations: {
      updateFile: { func: updateFile, error, loading },
      changeLanguage: { loading: changeLanguageLoading },
    },
  } = useEnvironmentContext()

  const extractFile = useCallback(() => {
    return environment.files.find(
      file => file.language.id === environment.language.id
    )
  }, [environment.files, environment.language])

  const [value, setValue] = useState(extractFile().data)

  useEffect(() => {
    if (monaco) {
      monaco.editor.defineTheme('myTheme', theme as any)
      monaco.editor.setTheme('myTheme')
    }
  }, [monaco])

  useDebounce(
    () => {
      !changeLanguageLoading &&
        extractFile().data !== value &&
        updateFile({
          variables: {
            id: extractFile().id,
            data: value,
          },
        })
    },
    250,
    [value, extractFile]
  )

  return (
    <Editor
      language={environment.language.editorConfigName}
      className="pt-2"
      onChange={setValue}
      value={value}
      options={{
        fontSize: 16,
        mouseWheelZoom: true,
        tabSize: 2,
        theme: 'myTheme',
        // fontFamily: 'AelpFiraCode',
        fontLigatures: true,
        minimap: { enabled: false },
      }}
    />
  )
}
