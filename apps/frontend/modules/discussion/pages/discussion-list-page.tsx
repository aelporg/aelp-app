import React from 'react'
import Button from '@components/primitives/button'
import Input from '@components/primitives/input/input'
import Tag from '@components/primitives/tag/tag'
import ToggleGroup from '@components/primitives/toggle-group/toggle-group'
import { AnnotationIcon, SearchIcon } from '@heroicons/react/outline'
import MainDashboardLayout from '@modules/dashboard/components/main-dashboard-layout'
import { DISCUSSIONS_QUERY } from '../graphql/queries/discussions-query'
import { Discussions, DiscussionsVariables } from 'typings/graphql/Discussions'
import Query from '@components/templates/Query'
import DiscussionCard from '../components/discussion-card'

export default function DiscussionListPage() {
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
          <Query<Discussions, DiscussionsVariables> query={DISCUSSIONS_QUERY}>
            {({ discussions }) => {
              return (
                <div className="flex-grow flex flex-col gap-4">
                  {discussions?.map(discussion => (
                    <DiscussionCard
                      key={discussion.id}
                      discussion={discussion}
                    />
                  ))}
                </div>
              )
            }}
          </Query>
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
          </div>
        </div>
      </div>
    </MainDashboardLayout>
  )
}
