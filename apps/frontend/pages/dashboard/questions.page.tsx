import { Input } from '@components/atoms';
import Button from '@components/atoms/button';
import ToggleGroup from '@components/atoms/toggle-group/toggle-group';
import { AnnotationIcon, SearchIcon } from '@heroicons/react/outline';
import React from 'react';
import { DashboardLayout } from './_layout';

export default function ClassroomList() {
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
      <div className="flex">
        <div className="flex-grow"></div>
        <div>My tags</div>
      </div>
    </DashboardLayout>
  );
}
