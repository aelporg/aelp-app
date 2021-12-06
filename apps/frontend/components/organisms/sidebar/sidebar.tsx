import React, { useState } from 'react';
import classNames from 'classnames';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Logo } from '@components/atoms';
import { ChevronLeftIcon } from '@heroicons/react/outline';

export interface SidebarLink {
  name: string;
  href: string;
  icon: (props: React.ComponentProps<'svg'>) => JSX.Element;
}

export interface SidebarProps {
  links: SidebarLink[];
}

export function Sidebar({ links }: SidebarProps) {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div className="w-80 border-r fixed h-screen bg-accent bg-opacity-5 p-8">
        <div className="flex justify-between">
          <Logo />
          <button className="self-end hover:bg-black hover:bg-opacity-5 rounded-md p-1">
            <ChevronLeftIcon className="w-7" />
          </button>
        </div>
        <div className="flex gap-2 flex-col items-start mt-14">
          {links.map(link => (
            <Link key={link.name} passHref href={link.href}>
              <div
                className={classNames(
                  'flex items-center px-2 py-2 select-none cursor-pointer rounded-lg transition-colors duration-200',
                  router.pathname === link.href
                    ? 'bg-black bg-opacity-10'
                    : 'hover:bg-black hover:bg-opacity-5'
                )}
              >
                <link.icon className="w-8 mr-3" />
                <span className="text-2xl pr-2 font-bold">{link.name}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div className="w-80"></div>
    </div>
  );
}

export default Sidebar;
