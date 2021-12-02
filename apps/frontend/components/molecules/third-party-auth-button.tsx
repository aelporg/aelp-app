import Button from '@components/atoms/button';
import React from 'react';
import Image from 'next/image';
import capitalize from 'utils/capatilize';
import classNames from 'classnames';

type ThirdPartyAuthType = 'github' | 'google';

export interface ThirdPartyAuthButtonProps {
  variant: ThirdPartyAuthType;
  createAccount?: boolean;
}

function getButtonClassNamesByVariant(variant: ThirdPartyAuthType) {
  switch (variant) {
    case 'github':
      return 'bg-black text-white';
    case 'google':
      return 'bg-white border-2';
  }
}

export function ThirdPartyAuthButton({
  variant,
  createAccount = false,
}: ThirdPartyAuthButtonProps) {
  return (
    <Button
      size="sm"
      className={classNames('mb-2', getButtonClassNamesByVariant(variant))}
      variant="custom"
      icon={
        <Image
          src={`/images/${variant}-icon.svg`}
          width={20}
          height={20}
          alt={`${capitalize(variant)} icon`}
        />
      }
    >
      Sign {createAccount ? 'Up' : 'In'} with {capitalize(variant)}
    </Button>
  );
}

export default ThirdPartyAuthButton;
