import { AnnouncementsQuery_classroom_announcements } from 'typings/graphql/AnnouncementsQuery'
import moment from 'moment'
import Avatar from '@components/primitives/avatar'
import MarkdownPreview from '@components/molecules/advanced-markdown-preview/advanced-markdown-review'

export default function AnnouncementCard(props: {
  announcement: AnnouncementsQuery_classroom_announcements
}) {
  return (
    <div className="p-4 border-2 mt-4 rounded-lg">
      <div className="flex mb-2">
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

      <MarkdownPreview

        source={props.announcement.content}
      />
    </div>
  )
}
