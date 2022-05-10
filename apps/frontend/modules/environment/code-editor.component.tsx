import Button from '@components/primitives/button'
import Select from '@components/primitives/select/select.component'
import { PlayIcon } from '@heroicons/react/outline'
import Editor, { useMonaco } from '@monaco-editor/react'
import { useCallback, useEffect, useState } from 'react'
import { useDebounce } from 'react-use'
import { useEnviromentStore } from './useEnvirnoment'

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
  const environment = useEnviromentStore(e => e.environment)
  const updateFile = useEnviromentStore(e => e.updateFile)
  const isChangingLanguage = useEnviromentStore(
    e => e.loadingState.changingLanguage
  )
  const changeLanguage = useEnviromentStore(e => e.changeLanguage)
  const runCode = useEnviromentStore(e => e.runCode)
  const loadingState = useEnviromentStore(e => e.loadingState)

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

  useEffect(() => {
    setValue(extractFile().data)
  }, [extractFile])

  useDebounce(
    () => {
      !isChangingLanguage &&
        extractFile().data !== value &&
        updateFile(extractFile().id, value)
    },
    250,
    [value, extractFile]
  )
  return (
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
              changeLanguage(value)
            }}
            value={environment.language.id}
          />
          <Button
            icon={<PlayIcon />}
            loading={loadingState.runningCode}
            disabled={loadingState.updatingCode}
            onClick={() => runCode()}
            size="sm"
          >
            Run Code
          </Button>
        </div>
      </div>
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
          fontLigatures: true,
          minimap: { enabled: false },
        }}
      />
    </div>
  )
}
