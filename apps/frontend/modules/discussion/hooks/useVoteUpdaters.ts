import { useMutation } from "@apollo/client"
import { useMeStore } from "@modules/auth/store/me-store"
import { toast } from "react-toastify"
import { DiscussionQuery_discussion } from "typings/graphql/DiscussionQuery"
import { Discussions_discussions } from "typings/graphql/Discussions"
import { Vote, VoteVariables } from "typings/graphql/Vote"
import { VOTE_ON_DISCUSSION_MUTATION } from "../graphql/mutations/vote-on-discussion"
import { DISCUSSION_QUERY } from "../graphql/queries/discussion-query"
import { DISCUSSIONS_QUERY } from "../graphql/queries/discussions-query"

export const useVoteUpdaters = (discussion: DiscussionQuery_discussion | Discussions_discussions) => {
  const [vote] = useMutation<Vote, VoteVariables>(VOTE_ON_DISCUSSION_MUTATION, {
    refetchQueries: [DISCUSSIONS_QUERY, DISCUSSION_QUERY],
  })

  const { me } = useMeStore()

  const createVoteMutator =
    (isUpvote: boolean | null) => async (e: React.SyntheticEvent) => {
      try {
        e.stopPropagation()
        await vote({
          variables: {
            discussionId: discussion.id,
            isUpvote,
          },
        })
      } catch (e) {
        toast(e.message)
      }
    }

  const userVoteRecord = discussion.votes.find(vote => vote.userId === me?.id)

  const userVote =
    userVoteRecord?.isUpvote === undefined
      ? 'NONE'
      : userVoteRecord.isUpvote
        ? 'UPVOTED'
        : 'DOWNVOTED'


  return {
    upvote: userVote === "UPVOTED" ? createVoteMutator(null) : createVoteMutator(true),
    downvote: userVote === "DOWNVOTED" ? createVoteMutator(null) : createVoteMutator(false),
    userVote,
  }
}
