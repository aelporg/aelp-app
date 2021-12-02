import classNames from 'classnames';
import React from 'react';
import { Size } from 'typings/utils-types';

interface OrLineProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: Size;
}

export function OrLine({ className }: OrLineProps) {
  return (
    <div
      className={classNames(
        'flex justify-center gap-3 items-center',
        className
      )}
    >
      <div className="h-px rounded bg-gray-300 w-20"></div>
      <span className="text-gray-400">or</span>
      <div className="h-px rounded bg-gray-300 w-20"></div>
    </div>
  );
}

export default OrLine;
