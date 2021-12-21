import { gql, useQuery } from '@apollo/client';
import Avatar from '@components/atoms/avatar';
import { ChevronDownIcon } from '@heroicons/react/outline';
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

export function UserProfileHeaderIcon(props: UserProfileHeaderIconProps) {
  const { data } = useQuery(ME_QUERY);

  return (
    <div className="flex items-center gap-2 hover:bg-black hover:bg-opacity-10 rounded-lg p-2 cursor-pointer">
      <Avatar intials="TB" />
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
