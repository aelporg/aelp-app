import ClassroomLayout from './classroom-layout'
import { useState } from 'react'
import Avatar from '@components/primitives/avatar'
import Button from '@components/primitives/button'
import AdvancedTextEditor from '@components/molecules/advanced-text-editor/advanced-text-editor'

function AnnouncementCreateForm() {
  const [expanded, setExpaned] = useState(false)
  const [value, onChange] = useState('')

  return (
    <div className="border-2 p-4 flex flex-col rounded-lg ">
      <div className="font-medium flex items-center overflow-y-auto">
        {!expanded && (
          <div className="self-start">
            <Avatar name="Talha Balaj" />
          </div>
        )}
        <AdvancedTextEditor
          expanded={expanded}
          value={value}
          onChange={onChange}
          placeholder="Announce something to your class..."
          onFocus={() => setExpaned(true)}
        />
      </div>
      {expanded && (
        <div className="self-end mt-2">
          <Button
            size="sm"
            variant="ghost"
            onClick={e => {
              // setEditorState(EditorState.createEmpty())
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
