import Toggle from '@components/primitives/toggle'
import classNames from 'classnames'
import {
  DraftHandleValue,
  Editor,
  EditorProps,
  EditorState,
  RichUtils,
} from 'draft-js'
import { useState, useEffect, useRef } from 'react'
import { FiBold, FiItalic } from 'react-icons/fi'

export interface TextEditorProps {
  expanded?: boolean
  editorState: EditorState
  onEditorStateChange: (update: EditorState) => void
  onFocus?: EditorProps['onFocus']
  onBlur?: EditorProps['onBlur']
}

export default function TextEditor({
  onFocus,
  expanded,
  editorState,
  onEditorStateChange,
}: TextEditorProps) {
  const editorRef = useRef(null)

  const handleKeyCommand = (command: string) => {
    const newState = RichUtils.handleKeyCommand(editorState, command)

    if (newState) {
      onEditorStateChange(newState)
      return 'handled'
    }

    return 'not-handled'
  }

  const toggleInlineStyle = (command: string) => {
    const newState = RichUtils.toggleInlineStyle(editorState, command)

    if (newState) {
      console.log("setting")
      onEditorStateChange(newState)
    }

    editorRef.current.focus()
  }

  const getInlineStyleState = (style: string) => {
    return editorState.getCurrentInlineStyle().has(style)
  }

  return (
    <div
      className={classNames(
        'flex-1',
        !expanded && 'ml-4',
        expanded && 'border-2 rounded-md'
      )}
    >
      {expanded && (
        <div className="flex border-b p-2 gap-[4px]">
          <Toggle
            pressed={getInlineStyleState('BOLD')}
            onPressedChange={() => toggleInlineStyle('BOLD')}
          >
            <FiBold />
          </Toggle>
          <Toggle
            pressed={getInlineStyleState('ITALIC')}
            onPressedChange={() => toggleInlineStyle('ITALIC')}
          >
            <FiItalic />
          </Toggle>
        </div>
      )}
      <div className={expanded && 'p-4 min-h-[75px]'}>
        <Editor
          editorState={editorState}
          onChange={onEditorStateChange}
          handleKeyCommand={handleKeyCommand}
          ref={editorRef}
          onFocus={onFocus}
          placeholder="Write your announcement here..."
        />
      </div>
    </div>
  )
}
