import Button, { ButtonProps } from '@components/primitives/button'
import React from 'react'
import capitalize from 'utils/capatilize'
import classNames from 'classnames'
import GithubIcon from '@components/primitives/icons/github-icon'
import GoogleIcon from '@components/primitives/icons/google-icon'
import { useGoogleLogin } from 'react-google-login'

type ThirdPartyAuthType = 'github' | 'google'

export interface ThirdPartyAuthButtonProps extends ButtonProps {
  authType: ThirdPartyAuthType
  createAccount?: boolean
  onSuccess?: (code: string) => void
}

function getButtonClassNamesByVariant(authType: ThirdPartyAuthType) {
  switch (authType) {
    case 'github':
      return 'bg-github text-white active:bg-black-dark'
    case 'google':
      return 'bg-white border hover:bg-gray-100 active:bg-gray-200'
  }
}

export function ThirdPartyAuthButton({
  authType,
  createAccount = false,
  onSuccess,
  disabled,
  loading,
}: ThirdPartyAuthButtonProps) {
  const { signIn } = useGoogleLogin({
    clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
    onSuccess: (response: any) => {
      onSuccess(response.tokenId)
    },
  })

  return (
    <Button
      size="md"
      disabled={disabled}
      loading={loading}
      className={classNames('mb-2', getButtonClassNamesByVariant(authType))}
      variant="custom"
      onClick={authType === 'google' ? signIn : undefined}
      icon={authType === 'github' ? <GithubIcon /> : <GoogleIcon />}
    >
      Sign {createAccount ? 'Up' : 'In'} with {capitalize(authType)}
    </Button>
  )
}

export default ThirdPartyAuthButton
