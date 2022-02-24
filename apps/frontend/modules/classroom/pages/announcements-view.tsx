import ClassroomLayout from './classroom-layout'
import { Editor, EditorState, RichUtils, DraftHandleValue } from 'draft-js'
import 'draft-js/dist/Draft.css'
import { useEffect, useState } from 'react'
import Avatar from '@components/primitives/avatar'
import classNames from 'classnames'
import Button from '@components/primitives/button'
import { UserAddIcon } from '@heroicons/react/outline'
import { FiBold, FiItalic } from 'react-icons/fi'
import Toggle from '@components/primitives/toggle'
import TextEditor from '@components/molecules/text-editor/text-editor'

function AnnouncementCreateForm() {
  const [expanded, setExpaned] = useState(false)
  const [editorState, setEditorState] = useState(EditorState.createEmpty())

  return (
    <div className="border-2 p-5 flex flex-col rounded-lg ">
      <div className="font-medium flex items-center overflow-y-auto">
        {!expanded && (
          <div className="self-start">
            <Avatar name="Talha Balaj" />
          </div>
        )}
        <TextEditor
          editorState={editorState}
          expanded={expanded}
          onEditorStateChange={setEditorState}
          onFocus={() => setExpaned(true)}
        />
      </div>
      {expanded && (
        <div className="self-end mt-2">
          <Button
            size="sm"
            variant="ghost"
            onClick={e => {
              setEditorState(EditorState.createEmpty())
              return setExpaned(false)
            }}
          >
            Cancel
          </Button>
          <Button size="sm" className="ml-1">
            Post
          </Button>
        </div>
      )}
    </div>
  )
}

export default function AnnouncementsView() {
  return (
    <ClassroomLayout>
      <div className="flex">
        <div className="flex-1">
          <AnnouncementCreateForm />
        </div>
        <div className="flex-1"></div>
      </div>
    </ClassroomLayout>
  )
}
