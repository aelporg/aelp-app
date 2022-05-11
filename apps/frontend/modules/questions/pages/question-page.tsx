import React from 'react'
import QuestionCard from '@components/organisms/question-card/question-card'
import Button from '@components/primitives/button'
import Input from '@components/primitives/input/input'
import Tag from '@components/primitives/tag/tag'
import ToggleGroup from '@components/primitives/toggle-group/toggle-group'
import { AnnotationIcon, SearchIcon } from '@heroicons/react/outline'
import MainDashboardLayout from '@modules/dashboard/components/main-dashboard-layout'
import { useQuery } from '@apollo/client'
import { DISCUSSIONS_QUERY } from '../graphql/queries/discussions-query'
import { Discussions, DiscussionsVariables } from 'typings/graphql/Discussions'

export default function QuestionPage() {
  const { data } = useQuery<Discussions, DiscussionsVariables>(
    DISCUSSIONS_QUERY
  )

  return (
    <MainDashboardLayout
      topNavActions={
        <Button size="md" icon={<AnnotationIcon />}>
          Ask Question
        </Button>
      }
    >
      <div className="flex flex-col gap-4">
        <div className="flex gap-4">
          <Input
            className="flex-grow"
            placeholder="Search by typing"
            prefixIcon={<SearchIcon />}
          />
          <ToggleGroup
            type="single"
            defaultValue="newest"
            items={[
              {
                label: 'Newest',
                value: 'newest',
              },
              {
                label: 'Unanswered',
                value: 'unanswered',
              },
            ]}
          />
        </div>
        <div className="flex gap-10">
          <div className="flex-grow flex flex-col gap-4">
            <QuestionCard />
            <QuestionCard />
            <QuestionCard />
            <QuestionCard />
            <QuestionCard />
          </div>
          <div className="w-80 flex flex-col gap-4">
            <div>
              <h3 className="text-xl font-bold mb-3">My Tags</h3>
              <div className="flex flex-wrap gap-2">
                <Tag>#react</Tag>
                <Tag>#learning</Tag>
                <Tag>#beginner</Tag>
                <Tag>#aelp</Tag>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-3">My Tags</h3>
              <div className="flex flex-wrap gap-2">
                <Tag>#react</Tag>
                <Tag>#learning</Tag>
                <Tag>#beginner</Tag>
                <Tag>#aelp</Tag>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainDashboardLayout>
  )
}
