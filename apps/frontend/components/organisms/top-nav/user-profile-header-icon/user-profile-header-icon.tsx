import { gql, useQuery } from '@apollo/client';
import Avatar from '@components/primitives/avatar';
import UserProfileMenu from '@components/organisms/top-nav/user-profile-menu/user-profile-menu';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/outline';
import { useAuthStore } from '@modules/auth/store/auth-store';
import { useMeStore } from '@modules/auth/store/me-store';
import classNames from 'classnames';
import { useMemo, useState } from 'react';
import { Shimmer } from 'react-shimmer';
import { useTopNavStore } from '../top-nav.store';

export function UserProfileHeaderIcon() {
  const { me, isLoading } = useMeStore();
  const { isMenuOpen, setIsMenuOpen } = useTopNavStore();

  return (
    <>
      <div
        className="flex items-center gap-2 hover:bg-black hover:bg-opacity-10 rounded-lg p-2 cursor-pointer"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {me && <Avatar name={me.name} />}
        <h4 className="text-xl font-bold select-none">
          {!isLoading ? (
            me?.shortName
          ) : (
            <Shimmer width={50} height={10} className="rounded-lg" />
          )}
        </h4>
        <ChevronDownIcon
          className={classNames(
            'w-5 h-5',
            isMenuOpen && 'transform transition-transform rotate-180'
          )}
        />
      </div>
    </>
  );
}

export default UserProfileHeaderIcon;
