import React from 'react'
import Logo from '@components/primitives/logo/logo'
import Button from '@components/primitives/button'
import FormGroup from '@components/primitives/form-group/form-group'
import ThirdPartyAuthButton from '@components/molecules/third-party-auth-button'
import OrLine from '@components/primitives/or-line'
import { HFInput } from '@components/primitives/input/input'
import Link from 'next/link'
import { useMutation } from '@apollo/client'
import { hfUserRegisterInputResolver } from '@aelp-app/validators'
import HForm from '@components/primitives/form/form'
import { HFCheckbox } from '@components/primitives/checkbox/checkbox'
import { useAuthStore } from '../store/auth-store'
import {
  RegisterWithEmail,
  RegisterWithEmailVariables,
} from 'typings/graphql/RegisterWithEmail'
import { REGISTER_WITH_EMAIL } from 'graphql/mutations/user/register-with-email-mutation'

export default function SignUp() {
  const authStore = useAuthStore()
  const [registerUser, { error: registerError, loading, reset }] = useMutation<
    RegisterWithEmail,
    RegisterWithEmailVariables
  >(REGISTER_WITH_EMAIL)
  const [connectError, setConnectError] = React.useState<Error>(undefined)

  const error = connectError || registerError

  const onSubmit = async (input: RegisterWithEmailVariables['data']) => {
    try {
      const { data } = await registerUser({
        variables: {
          data: input,
        },
      })
      authStore.login(data.register)
      reset()
    } catch (e) {
      console.error(e)
    }
  }

  return (
    <div className="p-7 flex flex-col min-h-screen">
      <nav>
        <Logo />
      </nav>
      <div className="flex-1 flex flex-col justify-center items-center">
        <HForm<RegisterWithEmailVariables['data']>
          className="flex flex-col items-stretch w-80 max-w-full"
          onSubmit={onSubmit}
          hfOptions={{
            resolver: hfUserRegisterInputResolver,
          }}
        >
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
          <FormGroup label="Confirm Password">
            <HFInput
              type="password"
              name="confirmPassword"
              placeholder="Re-enter password"
              readOnly={loading}
            />
          </FormGroup>
          <FormGroup>
            <HFCheckbox name="agreeTerms" disabled={loading}>
              I agree to the terms and conditions of the service
            </HFCheckbox>
          </FormGroup>
          <div className="text-sm font-medium text-error">
            {error && error.message}
          </div>
          <Button
            size="md"
            className="mt-6"
            type="submit"
            variant="primary"
            loading={loading}
          >
            Sign Up
          </Button>
          <Link href="/auth/sign-in" passHref>
            <Button size="md" className="mt-2" variant="secondary">
              Already have an Account?
            </Button>
          </Link>
          <OrLine className="my-6" />
          <ThirdPartyAuthButton
            authType="google"
            onSuccess={success => authStore.login(success)}
            onAuthError={setConnectError}
          />
          <ThirdPartyAuthButton authType="github" />
        </HForm>
      </div>
    </div>
  )
}
