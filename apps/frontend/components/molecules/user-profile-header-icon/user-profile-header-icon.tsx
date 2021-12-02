import Avatar from '@components/atoms/avatar';
import { ChevronDownIcon } from '@heroicons/react/outline';

export interface UserProfileHeaderIconProps {
  userName: string;
}

export function UserProfileHeaderIcon(props: UserProfileHeaderIconProps) {
  return (
    <div className="flex items-center gap-2 hover:bg-black hover:bg-opacity-5 rounded-lg p-2 cursor-pointer">
      <Avatar intials="TB" image="/images/demo/dp.jpg" />
      <h4 className="text-xl font-bold">{props.userName}</h4>
      <ChevronDownIcon className="w-5 h-5" />
    </div>
  );
}

export default UserProfileHeaderIcon;
