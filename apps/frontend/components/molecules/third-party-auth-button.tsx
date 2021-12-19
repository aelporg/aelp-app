import Button from '@components/atoms/button';
import React from 'react';
import Image from 'next/image';
import capitalize from 'utils/capatilize';
import classNames from 'classnames';
import GithubIcon from '@components/atoms/icons/github-icon';
import GoogleIcon from '@components/atoms/icons/google-icon';

type ThirdPartyAuthType = 'github' | 'google';

export interface ThirdPartyAuthButtonProps {
  variant: ThirdPartyAuthType;
  createAccount?: boolean;
}

function getButtonClassNamesByVariant(variant: ThirdPartyAuthType) {
  switch (variant) {
    case 'github':
      return 'bg-github text-white active:bg-black-dark';
    case 'google':
      return 'bg-white border hover:bg-gray-100 active:bg-gray-200';
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
      icon={variant === 'github' ? <GithubIcon /> : <GoogleIcon />}
    >
      Sign {createAccount ? 'Up' : 'In'} with {capitalize(variant)}
    </Button>
  );
}

export default ThirdPartyAuthButton;
