import { useMutation } from '@apollo/client'
import AdvancedMarkdownPreview from '@components/molecules/advanced-markdown-preview/advanced-markdown-review'
import AdvancedTextEditor from '@components/molecules/advanced-text-editor/advanced-text-editor'
import TopNav from '@components/organisms/top-nav/top-nav'
import { Logo } from '@components/primitives'
import Avatar from '@components/primitives/avatar'
import Button from '@components/primitives/button'
import Center from '@components/primitives/center'
import Tag from '@components/primitives/tag/tag'
import NoResultMessage from '@components/templates/NoResultMessage'
import Query from '@components/templates/Query'
import { ArrowUpIcon, ArrowDownIcon } from '@heroicons/react/outline'
import classNames from 'classnames'
import { HUMAN_DATE_ONLY_FORMAT } from 'lib/utils/date'
import moment from 'moment'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { toast } from 'react-toastify'
import {
  DiscussionQuery,
  DiscussionQueryVariables,
} from 'typings/graphql/DiscussionQuery'
import { CREATE_RESPONSE_MUTATION } from '../graphql/mutations/create-response-mutation'
import { DISCUSSION_QUERY } from '../graphql/queries/discussion-query'
import { useVoteUpdaters } from '../hooks/useVoteUpdaters'

export default function DiscussionDetialPage() {
  const router = useRouter()
  const { discussionId } = router.query

  if (!discussionId) return null

  return (
    <Query<DiscussionQuery, DiscussionQueryVariables>
      query={DISCUSSION_QUERY}
      variables={{ id: discussionId as string }}
    >
      {({ discussion }) => {
        return <DiscussionDetialPageContent discussion={discussion} />
      }}
    </Query>
  )
}

function DiscussionDetialPageContent({
  discussion,
}: {
  discussion: DiscussionQuery['discussion']
}) {
  const iconSizeClass =
    'h-8 w-8 p-2 hover:bg-gray-200 cursor-pointer rounded-full active:bg-gray-300'
  const { userVote, upvote, downvote } = useVoteUpdaters(discussion)
  const [responseText, setResponseText] = useState('')
  const [postResponse, { loading }] = useMutation(CREATE_RESPONSE_MUTATION, {
    variables: {
      response: responseText,
      discussionId: discussion.id,
    },
    refetchQueries: [DISCUSSION_QUERY],
  })

  if (discussion === null)
    return (
      <Center full>
        <NoResultMessage title="404 NOT FOUND">
          The discussion you are looking for does not exist.
        </NoResultMessage>
      </Center>
    )

  return (
    <div className="flex flex-col">
      <TopNav persistentBorder heading={<Logo href='/app' />} />
      <div className="max-w-screen-xl w-full mt-10 self-center">
        <h2 className="text-4xl font-bold">{discussion.title}</h2>
        <div className="flex-grow my-2">
          <span className="text-gray-400 pr-1">Asked</span>{' '}
          {moment(discussion.createdAt).fromNow()}
        </div>
        <hr />
        <div className="flex gap-4 my-4">
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
            <AdvancedMarkdownPreview source={discussion?.description} />
            <div className="mt-4 flex flex-wrap gap-2">
              {discussion?.tags.map(tag => (
                <Tag key={tag.id}>#{tag.name}</Tag>
              ))}
            </div>
          </div>
        </div>

        {discussion.responces.length > 0 && (
          <>
            <hr />
            <div className="text-xl my-4">
              {discussion.responces.length} Responses
            </div>
            <div className="flex flex-col gap-4">
              {discussion.responces.map(response => (
                <>
                  <div
                    key={response.id}
                    className="flex py-2 gap-4 min-h-[4rem]"
                  >
                    <div className="flex">
                      <Avatar name={response.user.name} />
                    </div>
                    <div className="flex-grow">
                      <AdvancedMarkdownPreview source={response.responce} />
                    </div>
                  </div>
                  <span className='text-sm'>
                    <span className="text-gray-400 pr-1">Responsed</span>{' '}
                    {moment(response.createdAt).fromNow()}
                  </span>
                  <hr />
                </>
              ))}
            </div>
          </>
        )}
        <hr />
        <div className="my-4">
          <h4 className="text-xl font-medium mb-2">Your Response</h4>
          <AdvancedTextEditor
            value={responseText}
            onChange={text => {
              setResponseText(text)
            }}
            expanded
          />
        </div>
        <Button
          size="sm"
          loading={loading}
          onClick={() =>
            postResponse()
              .then(e => setResponseText(''))
              .catch(e => toast(e.message))
          }
        >
          Post Response
        </Button>
      </div>
    </div>
  )
}
