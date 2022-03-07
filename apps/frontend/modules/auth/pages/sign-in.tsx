import React from 'react'
import Logo from '@components/primitives/logo/logo'
import Button from '@components/primitives/button'
import FormGroup from '@components/primitives/form-group/form-group'
import GoogleConnectButton from '@components/molecules/google-connect-button'
import OrLine from '@components/primitives/or-line'
import { gql, useMutation } from '@apollo/client'
import Link from 'next/link'
import { useAuthStore } from '../store/auth-store'
import HForm from '@components/primitives/form/form'
import { HFInput } from '@components/primitives'
import {
  LoginWithCreds,
  LoginWithCredsVariables,
} from 'typings/graphql/LoginWithCreds'

const LOGIN_WITH_CREDS_MUTATION = gql`
  mutation LoginWithCreds($email: String!, $password: String!) {
    loginWithCreds(email: $email, password: $password) {
      token
      userId
      refreshToken
    }
  }
`

export default function SignIn() {
  const authStore = useAuthStore()

  const [loginWithCreds, { error: credsError, loading }] = useMutation<
    LoginWithCreds,
    LoginWithCredsVariables
  >(LOGIN_WITH_CREDS_MUTATION)

  const [googleError, setGoogleError] = React.useState<Error | null>(null)

  const error = credsError || googleError

  const handleLoginWithCreds = async (input: LoginWithCredsVariables) => {
    try {
      const { data } = await loginWithCreds({
        variables: input,
      })

      authStore.login(data.loginWithCreds)
    } catch (e) {
      // error
    }
  }

  return (
    <div className="p-7 flex flex-col min-h-screen">
      <nav>
        <Logo />
      </nav>
      <div className="flex-1 flex flex-col justify-center items-center">
        <HForm<LoginWithCredsVariables>
          onSubmit={handleLoginWithCreds}
          hfOptions={{}}
        >
          <div className="flex flex-col items-stretch w-80 max-w-full">
            <FormGroup label="Email">
              <HFInput
                name="email"
                readOnly={loading}
                placeholder="Email address"
              />
            </FormGroup>
            <FormGroup label="Password">
              <HFInput
                type="password"
                name="password"
                readOnly={loading}
                placeholder="Password"
              />
            </FormGroup>
            {error && (
              <span className="text-error text-sm pb-1 font-medium">
                {error.message}
              </span>
            )}
            <Link href="/auth/forgot-password" passHref>
              <span className="text-sm mb-3 font-semibold text-accent hover:underline">
                Forget your password?
              </span>
            </Link>
            <Button
              size="md"
              className="mt-2"
              variant="primary"
              type="submit"
              loading={loading}
              disabled={loading}
            >
              Sign In
            </Button>
            <Link href="/auth/sign-up" passHref>
              <Button size="md" className="mt-2" variant="secondary">
                Don&apos;t have an account?
              </Button>
            </Link>
            <OrLine className="my-6" />
            <GoogleConnectButton
              onSuccess={success => {
                authStore.login(success)
              }}
              onAuthError={error => setGoogleError(error)}
              disabled={loading}
            />
          </div>
        </HForm>
      </div>
    </div>
  )
}
