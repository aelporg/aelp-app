import Avatar from '@components/primitives/avatar';
import { useMeStore } from '@modules/auth/store/me-store';
import { CogIcon, LogoutIcon, UserIcon } from '@heroicons/react/outline';
import './user-profile-menu.module.scss';
import Link from 'next/link';
import classNames from 'classnames';
import { useTopNavStore } from '../top-nav.store';


const userMenu = [
  {
    label: 'Profile',
    icon: UserIcon,
    href: '/app/me',
  },
  {
    label: 'Account Settings',
    icon: CogIcon,
    href: '/app/me/settings',
  },
  {
    label: 'Sign Out',
    icon: LogoutIcon,
    href: '/auth/sign-out',
  },
];

export function UserProfileMenu() {
  const { me } = useMeStore();
  const { isMenuOpen, setIsMenuOpen } = useTopNavStore();

  return (
    <div
      className={classNames('absolute inset-0 z-50', !isMenuOpen && 'hidden')}
      onClick={() => setIsMenuOpen(false)}
    >
      <div className="absolute border whitespace-nowrap bg-white rounded-lg top-16 right-10 drop-shadow-lg">
        <div className="flex p-4 pb-2">
          {me && <Avatar name={me.name} />}
          <div className="ml-2 flex flex-col align-text-top">
            <h4 className="text-xl font-bold select-none ">{me?.name}</h4>
            <span className="font-bold text-sm text-yellow-500">Level 13</span>
          </div>
        </div>
        <div className="mb-2">
          {userMenu.map(item => (
            <Link href={item.href} passHref key={item.label}>
              <div className="flex items-center py-1.5 hover:bg-gray-200 px-4 cursor-pointer">
                <item.icon className="w-6 h-6" />
                <span className="ml-2 font-bold">{item.label}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default UserProfileMenu;
