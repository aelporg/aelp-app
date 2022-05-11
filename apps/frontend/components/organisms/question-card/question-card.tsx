import Avatar from '@components/primitives/avatar'
import Tag from '@components/primitives/tag/tag'
import { ArrowDownIcon, ArrowUpIcon } from '@heroicons/react/outline'
import { Discussions_discussions } from 'typings/graphql/Discussions'
import './question-card.module.scss'
import moment from 'moment'
import { HUMAN_DATE_ONLY_FORMAT } from 'lib/utils/date'
import { useMutation } from '@apollo/client'
import { VOTE_ON_DISCUSSION_MUTATION } from '@modules/questions/graphql/mutations/vote-on-discussion'
import { Vote, VoteVariables } from 'typings/graphql/Vote'
import { toast } from 'react-toastify'
import { DISCUSSIONS_QUERY } from '@modules/questions/graphql/queries/discussions-query'
import classNames from 'classnames'

export interface DiscussionCardProps {
  dicussion: Discussions_discussions
}

export function DiscussionCard(props: DiscussionCardProps) {
  const iconSizeClass =
    'h-8 w-8 p-2 hover:bg-gray-200 cursor-pointer rounded-full active:bg-gray-300'

  const [vote] = useMutation<Vote, VoteVariables>(VOTE_ON_DISCUSSION_MUTATION, {
    refetchQueries: [DISCUSSIONS_QUERY]
  })

  const createVote = (isUpvote: boolean) => async () => {
    try {
      await vote({
        variables: {
          discussionId: props.dicussion.id,
          isUpvote,
        },
      })
    } catch(e) {
      toast(e.message)
    }
  }

  return (
    <div className="border-2   p-5 rounded-lg">
      <div className="flex gap-4">
        <div className="flex items-center flex-col">
          <Avatar name={props.dicussion.user.userName} />
          <div className="mt-4 text-center">
            <div className={classNames(iconSizeClass, props.dicussion?.votes?.[0].isUpvote && "bg-gray-400")} onClick={createVote(true)}>
              <ArrowUpIcon />
            </div>
            <span className="text-lg font-bold text-gray-600">{props.dicussion?.votesCount}</span>
            <div className={classNames(iconSizeClass, !props.dicussion?.votes?.[0].isUpvote && "bg-gray-400")} onClick={createVote(false)}>
              <ArrowDownIcon />
            </div>
          </div>
        </div>
        <div>
          <span className="text-xs text-gray-500">
            Posted on{' '}
            {moment(props.dicussion?.createdAt).format(HUMAN_DATE_ONLY_FORMAT)}
          </span>
          <h2 className="text-xl font-bold">{props.dicussion?.title}</h2>{' '}
          <p className="text-gray-500">{props.dicussion?.description}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {props.dicussion?.tags.map(tag => (
              <Tag key={tag.id}>#{tag.name}</Tag>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default DiscussionCard
