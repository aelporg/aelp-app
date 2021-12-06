import React, { useState } from 'react';
import { DashboardLayout } from './_layout';
import { ChevronDownIcon, PlusIcon } from '@heroicons/react/outline';
import Image from 'next/image';
import Avatar from '@components/atoms/avatar';
import Button from '@components/atoms/button';
import Modal from '@components/atoms/modal/modal';

const sampleClassroomSchema = {
  id: 'test',
  name: 'Test Classroom',
  instructor: 'Test Instructor',
  instructorImage: '/images/demo/dp.jpg',
};

export default function ClassroomList() {
  const [createModalOpen, setCreateModalOpen] = useState(false);

  return (
    <DashboardLayout
      renderTopNavActions={() => {
        return (
          <div className="flex gap-4">
            <Button size="sm" variant="secondary">
              Join
            </Button>
            <Button
              size="sm"
              icon={<PlusIcon />}
              onClick={() => {
                setCreateModalOpen(true);
              }}
            >
              Create
            </Button>
          </div>
        );
      }}
    >
      <Modal
        isOpen={createModalOpen}
        onClose={() => {
          setCreateModalOpen(false);
        }}
      />
      <div className="grid xl:grid-cols-3 lg:grid-cols-2 2xl:grid-cols-4 md:grid-cols-1 grid-cols-1 gap-8">
        {[1, 2, 3, 4, 5, 6, 7, 9, 10, 11, 12, 13, 14].map(e => (
          <div
            key={e}
            className="flex border rounded-lg overflow-hidden flex-col cursor-pointer focus:ring-2 ring-red-100 select-none"
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
              <div className="flex mt-1 justify-between items-start">
                <div className="flex flex-col">
                  <h5 className="font-bold">LR(1) Parser</h5>
                  <p className="text-xs font-medium text-gray-400">
                    Due in 2 Weeks / 24th Nov, 2021
                  </p>
                </div>
                <Button variant="secondary" size="sm" className="ml-4">
                  View
                </Button>
              </div>
              <div className="flex text-xs items-center cursor-pointer">
                More
                <ChevronDownIcon className="ml-1 w-3 h-3" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </DashboardLayout>
  );
}
