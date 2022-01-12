import { gql, useQuery } from '@apollo/client';
import Avatar from '@components/atoms/avatar';
import UserProfileMenu from '@components/organisms/user-profile-menu/user-profile-menu';
import { ChevronDownIcon } from '@heroicons/react/outline';
import { useAuthStore } from '@modules/auth/store/auth-store';
import { useMemo, useState } from 'react';
import { Shimmer } from 'react-shimmer';

const ME_QUERY = gql`
  query Me {
    me {
      id
      firstName
      userName
      lastName
      email
    }
  }
`;

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface UserProfileHeaderIconProps {}

const getInitials = (me: any) => {
  const { firstName, lastName, userName } = me;

  if (firstName && lastName) {
    return `${firstName.charAt(0)}${lastName.charAt(0)}`.toUpperCase();
  }

  return userName.charAt(0).toUpperCase();
};

export function UserProfileHeaderIcon(props: UserProfileHeaderIconProps) {
  const { data } = useQuery(ME_QUERY);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="flex relative items-center gap-2 hover:bg-black hover:bg-opacity-10 rounded-lg p-2 cursor-pointer"
      onClick={() => {
        setIsOpen(!isOpen);
      }}
    >
      {isOpen && <UserProfileMenu />}
      <Avatar intials={getInitials(data.me)} />
      <h4 className="text-xl font-bold">
        {data ? (
          data.me.firstName || data.me.userName
        ) : (
          <Shimmer width={50} height={10} className="rounded-lg" />
        )}
      </h4>
      <ChevronDownIcon className="w-5 h-5" />
    </div>
  );
}

export default UserProfileHeaderIcon;
