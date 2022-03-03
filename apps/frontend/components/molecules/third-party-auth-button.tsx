import Button, { ButtonProps } from '@components/primitives/button'
import React from 'react'
import capitalize from 'utils/capatilize'
import classNames from 'classnames'
import GithubIcon from '@components/primitives/icons/github-icon'
import GoogleIcon from '@components/primitives/icons/google-icon'
import { useGoogleLogin } from 'react-google-login'
import { gql, useMutation } from '@apollo/client'
import {
  LoginWithGoogle,
  LoginWithGoogleVariables,
  LoginWithGoogle_loginWithGoogle,
} from 'typings/graphql/LoginWithGoogle'

type ThirdPartyAuthType = 'github' | 'google'

const LOGIN_WITH_GOOGLE = gql`
  mutation LoginWithGoogle($tokenId: String!) {
    loginWithGoogle(tokenId: $tokenId) {
      token
      refreshToken
      userId
    }
  }
`

export interface ThirdPartyAuthButtonProps extends ButtonProps {
  authType: ThirdPartyAuthType
  onSuccess?: (data: LoginWithGoogle_loginWithGoogle) => void
  onAuthError?: (error: Error) => void
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
  onSuccess,
  onAuthError,
  disabled,
}: ThirdPartyAuthButtonProps) {
  const [loginWithGoogle, { loading: googleLoading }] = useMutation<
    LoginWithGoogle,
    LoginWithGoogleVariables
  >(LOGIN_WITH_GOOGLE)

  const handleThirdPartyAuth = async (tokenId: string) => {
    try {
      const { data } = await loginWithGoogle({
        variables: {
          tokenId,
        },
      })

      onSuccess(data.loginWithGoogle)
    } catch (e) {
      onAuthError && onAuthError(e)
    }
  }

  const { signIn } = useGoogleLogin({
    clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
    onSuccess: (response: any) => {
      handleThirdPartyAuth(response.tokenId)
    },
  })

  return (
    <Button
      size="md"
      disabled={disabled}
      className={classNames('mb-2', getButtonClassNamesByVariant(authType))}
      variant="custom"
      loading={googleLoading}
      onClick={authType === 'google' ? signIn : undefined}
      icon={authType === 'github' ? <GithubIcon /> : <GoogleIcon />}
    >
      Connect with {capitalize(authType)}
    </Button>
  )
}

export default ThirdPartyAuthButton
