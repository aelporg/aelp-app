import AdvancedTextEditor from '@components/molecules/advanced-text-editor/advanced-text-editor'
import TopNav from '@components/organisms/top-nav/top-nav'
import Button from '@components/primitives/button'
import Logo from '@components/primitives/logo/logo'
import { useState } from 'react'
import { CREATE_DISCUSSION_MUTATION } from '../graphql/mutations/create-discussion-mutation'
import { useMutation } from '@apollo/client'
import {
  CreateDiscussionMutation,
  CreateDiscussionMutationVariables,
} from 'typings/graphql/CreateDiscussionMutation'
import Input from '@components/primitives/input/input'
import { toast } from 'react-toastify'
import { useRouter } from 'next/router'
import FormGroup from '@components/primitives/form-group/form-group'

export default function CreateDiscussion() {
  const [description, setDescription] = useState('')
  const [title, setTitle] = useState('')
  const router = useRouter()

  const [createDiscussion, { loading }] = useMutation<
    CreateDiscussionMutation,
    CreateDiscussionMutationVariables
  >(CREATE_DISCUSSION_MUTATION)

  return (
    <div>
      <TopNav heading={<Logo href="/" />} />
      <div className="max-w-screen-xl w-full m-10 mx-auto px-2">
        <FormGroup label="Title">
          <Input
            className="my-2"
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
        </FormGroup>
        <FormGroup label="Description">
        <AdvancedTextEditor
            value={description}
            onChange={setDescription}
            expanded
          />
        </FormGroup>
        <Button
          loading={loading}
          onClick={() => {
            createDiscussion({
              variables: {
                data: {
                  title,
                  description,
                },
              },
            })
              .then(e => {
                router.replace(`/app/discussions/${e.data.createDiscussion.id}`)
              })
              .catch(e => {
                toast(e.message)
              })
          }}
        >
          Post
        </Button>
      </div>
    </div>
  )
}
