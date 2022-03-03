import { useMutation } from '@apollo/client'
import AdvancedTextEditor from '@components/molecules/advanced-text-editor/advanced-text-editor'
import Avatar from '@components/primitives/avatar'
import Button from '@components/primitives/button'
import { useState } from 'react'
import {
  CreateAnnouncementMutation,
  CreateAnnouncementMutationVariables,
} from 'typings/graphql/CreateAnnouncementMutation'
import { CREATE_ANNOUNCEMENT_MUTATION } from '../graphql/create-announcement-mutation'
import { ANNOUNCEMENTS_QUERY } from '../pages/announcements-view'
import { useClassroomContext } from '../store/ClassroomContext'

export default function AnnouncementCreateForm() {
  const [expanded, setExpaned] = useState(false)
  const [value, onChange] = useState('')
  const { data } = useClassroomContext()
  const classroomId = data?.classroom?.id

  const [postAnnouncementMutation, { loading, reset, error }] = useMutation<
    CreateAnnouncementMutation,
    CreateAnnouncementMutationVariables
  >(CREATE_ANNOUNCEMENT_MUTATION, { refetchQueries: [ANNOUNCEMENTS_QUERY] })

  const postAnnouncement = () => {
    if (value.length < 1) return

    postAnnouncementMutation({
      variables: {
        data: {
          content: value,
          classroomId,
        },
      },
    })
      .then(data => {
        onChange('')
        setExpaned(false)
        reset()
      })
      .catch(err => {
        console.log(err)
      })
  }

  return (
    <div className="border shadow-md p-4 flex flex-col rounded-lg bg-white">
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
      {error && <div className="text-error">{error.message}</div>}
      {expanded && (
        <div className="self-end mt-2">
          <Button
            size="sm"
            variant="ghost"
            onClick={e => {
              onChange('')
              setExpaned(false)
            }}
          >
            Cancel
          </Button>
          <Button
            size="sm"
            className="ml-1"
            loading={loading}
            disabled={value === ""}
            onClick={postAnnouncement}
          >
            Post
          </Button>
        </div>
      )}
    </div>
  )
}
