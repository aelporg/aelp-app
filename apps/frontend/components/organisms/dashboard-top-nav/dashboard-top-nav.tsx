import { Fragment } from 'react';
import UserProfileHeaderIcon from '@components/molecules/user-profile-header-icon/user-profile-header-icon';

export interface DashboardTopNavProps {
  heading: string;
  renderRight?: () => JSX.Element;
}

export function DashboardTopNav(props: DashboardTopNavProps) {
  return (
    <div className="flex justify-between items-center">
      <h3 className="text-3xl font-bold">{props.heading}</h3>
      <div className="flex">
        {props.renderRight && (
          <Fragment>
            {props.renderRight()}
            <div className="w-px bg-gray-700 h-4"></div>
          </Fragment>
        )}
        {/* TODO: Change it to users's name */}
        <UserProfileHeaderIcon userName="Talha" />
      </div>
    </div>
  );
}

export default DashboardTopNav;
