import { Input } from '@components/atoms';
import Button from '@components/atoms/button';
import ToggleGroup from '@components/atoms/toggle-group/toggle-group';
import { AnnotationIcon } from '@heroicons/react/outline';
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
      <div className="flex">
        <Input className="flex-grow" placeholder="Search by typing" />
        <ToggleGroup />
      </div>
    </DashboardLayout>
  );
}
