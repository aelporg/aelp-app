import Button from '@components/atoms/button';
import Input from '@components/atoms/input/input';
import Tag from '@components/atoms/tag/tag';
import ToggleGroup from '@components/atoms/toggle-group/toggle-group';
import QuestionCard from '@components/organisms/question-card/question-card';
import { AnnotationIcon, SearchIcon } from '@heroicons/react/outline';
import React from 'react';
import { DashboardLayout } from './_layout';

export default function QuestionsList() {
  return (
    <DashboardLayout
      renderTopNavActions={() => {
        return (
          <Button size="sm" icon={<AnnotationIcon />}>
            Ask Question
          </Button>
        );
      }}
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
    </DashboardLayout>
  );
}
