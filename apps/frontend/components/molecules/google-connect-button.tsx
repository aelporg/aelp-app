import Button, { ButtonProps } from '@components/primitives/button'
import React from 'react'
import GoogleIcon from '@components/primitives/icons/google-icon'
import { useGoogleLogin } from 'react-google-login'
import { gql, useMutation } from '@apollo/client'
import {
  LoginWithGoogle,
  LoginWithGoogleVariables,
  LoginWithGoogle_loginWithGoogle,
} from 'typings/graphql/LoginWithGoogle'

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
  onSuccess?: (data: LoginWithGoogle_loginWithGoogle) => void
  onAuthError?: (error: Error) => void
}

// function getButtonClassNamesByVariant(authType: ThirdPartyAuthType) {
//   switch (authType) {
//     case 'github':
//       return 'bg-github text-white active:bg-black-dark'
//     case 'google':
//       return 'bg-white border hover:bg-gray-100 active:bg-gray-200'
//   }
// }

export function GoogleConnectButton({
  onSuccess,
  onAuthError,
  disabled,
}: ThirdPartyAuthButtonProps) {
  const [loginWithGoogle, { loading: googleLoading }] = useMutation<
    LoginWithGoogle,
    LoginWithGoogleVariables
  >(LOGIN_WITH_GOOGLE)

  const handleAuth = async (tokenId: string) => {
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

  const { signIn, loaded } = useGoogleLogin({
    clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
    onSuccess: (response: any) => {
      handleAuth(response.tokenId)
    },
  })

  return (
    <Button
      size="md"
      disabled={disabled}
      className={'bg-white border hover:bg-gray-100 active:bg-gray-200'}
      variant="custom"
      loading={googleLoading || !loaded}
      onClick={signIn}
      icon={<GoogleIcon />}
    >
      Connect with Google
    </Button>
  )
}

export default GoogleConnectButton
