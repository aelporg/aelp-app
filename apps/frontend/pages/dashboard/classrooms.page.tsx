import React from 'react';
import { DashboardLayout } from './_layout';
import { ChevronDownIcon } from '@heroicons/react/outline';
import Image from 'next/image';
import Avatar from '@components/atoms/avatar';
import Button from '@components/atoms/button';

const sampleClassroomSchema = {
  id: 'test',
  name: 'Test Classroom',
  instructor: 'Test Instructor',
  instructorImage: '/images/demo/dp.jpg',
};

export default function ClassroomList() {
  return (
    <DashboardLayout>
      <div className="grid lg:grid-cols-4 gap-8 md:grid-cols-3 grid-cols-1">
        {[1, 2, 3, 4, 5, 5, 6, 6, 7].map(e => (
          <div
            key={e}
            className="flex border rounded-lg overflow-hidden flex-col"
          >
            <Image
              src="/images/demo/class-bg-1.jpg"
              width="250px"
              height="250px"
              alt="Classroom cover"
            />
            <div className="p-5">
              <h4 className="text-2xl font-bold">
                {sampleClassroomSchema.name}
              </h4>
              <div className="flex text-gray-500 mt-2 font-bold items-center">
                <Avatar
                  size="xs"
                  image={sampleClassroomSchema.instructorImage}
                />
                <span className="ml-3">{sampleClassroomSchema.instructor}</span>
              </div>
              <h6 className="text-md mt-4 font-bold text-gray-500">
                Assessments Due Soon
              </h6>
              <div className="flex mt-1 justify-between">
                <div className="flex flex-col">
                  <h5 className="font-bold">LR(1) Parser</h5>
                  <p className="text-sm font-medium text-gray-400">
                    Due in 2 Weeks / 24th Nov, 2021
                  </p>
                </div>
                <Button variant="secondary">View</Button>
              </div>
              <div className="flex text-xs items-center">
                More
                <ChevronDownIcon className="ml-2 w-3 h-3" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </DashboardLayout>
  );
}
