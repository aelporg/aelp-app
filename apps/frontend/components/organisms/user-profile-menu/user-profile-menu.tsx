import Avatar from '@components/atoms/avatar';
import './user-profile-menu.module.scss';

/* eslint-disable-next-line */
export interface UserProfileMenuProps {}

export function UserProfileMenu(props: UserProfileMenuProps) {
  return (
    <div className=" absolute bg-white p-4 rounded-lg top-full right-1/4 shadow">
      <Avatar />
    </div>
  );
}

export default UserProfileMenu;
