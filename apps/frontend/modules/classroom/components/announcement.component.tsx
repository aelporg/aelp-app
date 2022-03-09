import {
  AnnouncementsQuery_classroom_announcements,
} from 'typings/graphql/AnnouncementsQuery'
import moment from 'moment'
import Avatar from '@components/primitives/avatar'
import MarkdownPreview from '@components/molecules/advanced-markdown-preview/advanced-markdown-review'
import PopoverMenu from '@components/primitives/popover-menu/popover-menu'
import { PencilIcon, TrashIcon } from '@heroicons/react/outline'
import ConfirmDialog from '@components/molecules/confirm-dialog/confirm-dialog'
import useDisclosure from 'lib/hooks/useDisclosure'
import { useMutation } from '@apollo/client'
import { DELETE_ANNOUNCEMENT_MUTATION } from '../graphql/delete-announcement-mutation'
import {
  DeleteAnnoucementMutation,
  DeleteAnnoucementMutationVariables,
} from 'typings/graphql/DeleteAnnoucementMutation'
import { ANNOUNCEMENTS_QUERY } from '../pages/announcements-view'
import { ClassroomRole } from 'typings/graphql/globalTypes'
import { useClassroomContext } from '../store/ClassroomContext'
import { useMeStore } from '@modules/auth/store/me-store'
import { UPDATE_ANNOUNCEMENT_MUTATION } from '../graphql/update-announcement-mutation'
import {
  UpdateAnnoucementMutation,
  UpdateAnnoucementMutationVariables,
} from 'typings/graphql/UpdateAnnoucementMutation'
import { useEffect, useState } from 'react'
import AdvancedTextEditor from '@components/molecules/advanced-text-editor/advanced-text-editor'
import Button from '@components/primitives/button'

export default function AnnouncementCard(props: {
  announcement: AnnouncementsQuery_classroom_announcements
}) {
  const { isOpen, onClose, onOpen } = useDisclosure()
  const [deleteAnnouncement, { loading, reset }] = useMutation<
    DeleteAnnoucementMutation,
    DeleteAnnoucementMutationVariables
  >(DELETE_ANNOUNCEMENT_MUTATION, {
    refetchQueries: [ANNOUNCEMENTS_QUERY],
  })
  const [editMode, setEditMode] = useState(false)
  const [editorValue, onEditorValueChange] = useState(
    props.announcement.content
  )

  useEffect(() => {
    onEditorValueChange(props.announcement.content)
  }, [props.announcement.content])

  const [updateAnnouncement, { loading: updateLoading }] = useMutation<
    UpdateAnnoucementMutation,
    UpdateAnnoucementMutationVariables
  >(UPDATE_ANNOUNCEMENT_MUTATION, { refetchQueries: [ANNOUNCEMENTS_QUERY] })

  const { userClassroomRole } = useClassroomContext()
  const { me } = useMeStore()

  return (
    <div className="p-4 border mt-4 first:mt-0  rounded-lg bg-white">
      <div className="flex mb-2 justify-between">
        <div className="flex">
          <Avatar name={props.announcement.user.name} />
          <div className="flex-1 ml-4">
            <div className="flex justify-between flex-col">
              <div className="font-bold">{props.announcement.user.name}</div>
              <div className="text-gray-400 text-sm">
                {moment(props.announcement.createdAt).fromNow()}
              </div>
            </div>
          </div>
        </div>
        {[ClassroomRole.INSTRUCTOR, ClassroomRole.OWNER].includes(
          userClassroomRole
        ) &&
          props.announcement.user.id === me?.id && (
            <div>
              <ConfirmDialog
                isOpen={isOpen}
                onConfirm={() => {
                  deleteAnnouncement({
                    variables: {
                      id: props.announcement.id,
                    },
                  })
                    .catch(console.error)
                    .then(value => onClose())
                    .finally(reset)
                }}
                variant="danger"
                onCancel={onClose}
                confirmLoading={loading}
                closeButtonMessage="No, don't delete"
                confirmButtonMessage="Yes, delete it"
                title="Delete announcement?"
                message="Are you sure you want to delete this announcement?"
              />
              <PopoverMenu>
                <PopoverMenu.Item
                  icon={<PencilIcon />}
                  onClick={() => setEditMode(true)}
                >
                  Edit
                </PopoverMenu.Item>
                <PopoverMenu.Item
                  onClick={onOpen}
                  icon={<TrashIcon className="text-error" />}
                >
                  Delete
                </PopoverMenu.Item>
              </PopoverMenu>
            </div>
          )}
      </div>

      {editMode ? (
        <div className="flex flex-col">
          <AdvancedTextEditor
            expanded
            value={editorValue}
            onChange={onEditorValueChange}
          />{' '}
          <div className="self-end mt-2">
            <Button
              size="sm"
              variant="ghost"
              onClick={e => {
                onEditorValueChange(props.announcement.content)
                setEditMode(false)
              }}
            >
              Cancel
            </Button>
            <Button
              size="sm"
              className="ml-1"
              loading={updateLoading}
              disabled={editorValue === props.announcement.content}
              onClick={() => {
                updateAnnouncement({
                  variables: {
                    id: props.announcement.id,
                    data: { content: { set: editorValue } },
                  },
                })
                  .catch(console.error)
                  .then(() => setEditMode(false))
              }}
            >
              Update
            </Button>
          </div>
        </div>
      ) : (
        <MarkdownPreview source={props.announcement.content} />
      )}
    </div>
  )
}
