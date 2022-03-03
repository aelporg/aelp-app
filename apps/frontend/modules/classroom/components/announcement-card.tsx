import { AnnouncementsQuery_classroom_announcements } from 'typings/graphql/AnnouncementsQuery'
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

function AnnoucementDeletePopoverItem({
  announcementId,
}: {
  announcementId: string
}) {
  const { isOpen, onClose, onOpen } = useDisclosure()
  const [deleteAnnouncement, { loading, error }] = useMutation<
    DeleteAnnoucementMutation,
    DeleteAnnoucementMutationVariables
  >(DELETE_ANNOUNCEMENT_MUTATION, {
    refetchQueries: [ANNOUNCEMENTS_QUERY],
  })

  return (
    <>
      <ConfirmDialog
        isOpen={isOpen}
        onConfirm={() => {
          deleteAnnouncement({
            variables: {
              id: announcementId,
            },
          })
            .catch(console.error)
            .then(onClose)
        }}
        variant="danger"
        onCancel={onClose}
        confirmLoading={loading}
        closeButtonMessage="No, don't delete"
        confirmButtonMessage="Yes, delete it"
        title="Are you sure?"
        message="Are you sure you want to delete?"
      />
      <PopoverMenu.Item
        onClick={onOpen}
        icon={<TrashIcon className="text-error" />}
      >
        Delete
      </PopoverMenu.Item>
    </>
  )
}

export default function AnnouncementCard(props: {
  announcement: AnnouncementsQuery_classroom_announcements
}) {
  return (
    <div className="p-4 border mt-4 rounded-lg bg-white">
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
        <div>
          <PopoverMenu>
            <PopoverMenu.Item icon={<PencilIcon />}>Edit</PopoverMenu.Item>
            <AnnoucementDeletePopoverItem
              announcementId={props.announcement.id}
            />
          </PopoverMenu>
        </div>
      </div>

      <MarkdownPreview source={props.announcement.content} />
    </div>
  )
}
