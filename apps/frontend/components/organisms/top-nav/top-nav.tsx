import { Fragment, useCallback, useEffect, useRef, useState } from 'react';
import UserProfileHeaderIcon from '@components/molecules/user-profile-header-icon/user-profile-header-icon';
import classNames from 'classnames';

export interface TopNavProps {
  heading: string;
  renderActions?: () => JSX.Element;
}

export function TopNav(props: TopNavProps) {
  const elementRef = useRef<HTMLDivElement>(null);
  const [sticking, setSticking] = useState(false);

  const handleStickChange: IntersectionObserverCallback = useCallback(
    ([event]) => {
      setSticking(event.intersectionRatio < 1);
    },
    [setSticking]
  );

  useEffect(() => {
    if (elementRef.current) {
      const currentRef = elementRef.current;
      const observer = new IntersectionObserver(handleStickChange, {
        threshold: [1],
      });

      observer.observe(currentRef);

      return () => {
        observer.unobserve(currentRef);
      };
    }
  }, [elementRef, handleStickChange]);

  return (
    <div
      ref={elementRef}
      className={classNames(
        'flex justify-between sticky self-start bg-white z-10 pb-2 px-8 items-center transition-all duration-200',
        sticking && 'border-b'
      )}
      style={{
        // Sticky detection hack
        top: '-1px',
        paddingTop: 'calc(.5rem + 1px)',
      }}
    >
      <h3 className="text-3xl font-bold">{props.heading}</h3>
      <div className="flex items-center">
        {props.renderActions && (
          <Fragment>
            {props.renderActions()}
            <div className="w-0.5 rounded-lg ml-4 bg-gray-300 mx-2 h-8"></div>
          </Fragment>
        )}
        {/* TODO: Change it to users's name */}
        <UserProfileHeaderIcon userName="Talha" />
      </div>
    </div>
  );
}

export default TopNav;
