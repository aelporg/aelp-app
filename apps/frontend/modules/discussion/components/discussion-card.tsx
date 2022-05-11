import Avatar from '@components/primitives/avatar'
import Tag from '@components/primitives/tag/tag'
import { ArrowDownIcon, ArrowUpIcon } from '@heroicons/react/outline'
import { Discussions_discussions } from 'typings/graphql/Discussions'
import moment from 'moment'
import { HUMAN_DATE_ONLY_FORMAT } from 'lib/utils/date'
import classNames from 'classnames'
import Link from 'next/link'
import React from 'react'
import { useVoteUpdaters } from '../hooks/useVoteUpdaters'

export interface DiscussionCardProps {
  discussion: Discussions_discussions
}

export function DiscussionCard({ discussion }: DiscussionCardProps) {
  const iconSizeClass =
    'h-8 w-8 p-2 hover:bg-gray-200 cursor-pointer rounded-full active:bg-gray-300'
  const { upvote, downvote, userVote } = useVoteUpdaters(discussion)

  return (
    <Link href={`/app/discussions/${discussion.id}`} passHref>
      <div className="border-2 p-5 rounded-lg cursor-pointer">
        <div className="flex gap-4">
          <div className="flex items-center flex-col">
            <Avatar name={discussion.user.userName} />
            <div className="mt-4 text-center">
              <div
                className={classNames(
                  iconSizeClass,
                  userVote === 'UPVOTED' && 'bg-gray-300'
                )}
                onClick={upvote}
              >
                <ArrowUpIcon />
              </div>
              <span className="text-lg font-bold text-gray-600">
                {discussion?.votesCount}
              </span>
              <div
                className={classNames(
                  iconSizeClass,
                  userVote === 'DOWNVOTED' && 'bg-gray-300'
                )}
                onClick={downvote}
              >
                <ArrowDownIcon />
              </div>
            </div>
          </div>
          <div>
            <span className="text-xs text-gray-500">
              Posted on{' '}
              {moment(discussion?.createdAt).format(HUMAN_DATE_ONLY_FORMAT)}
            </span>
            <h2 className="text-xl font-bold">{discussion?.title}</h2>{' '}
            <p className="text-gray-500">{discussion?.description}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {discussion?.tags.map(tag => (
                <Tag key={tag.id}>#{tag.name}</Tag>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default DiscussionCard
