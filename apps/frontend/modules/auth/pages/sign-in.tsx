import Input from '@components/atoms/input/input';
import React from 'react';
import Logo from '@components/atoms/logo/logo';
import Button from '@components/atoms/button';
import FormGroup from '@components/atoms/form-group/form-group';
import ThirdPartyAuthButton from '@components/molecules/third-party-auth-button';
import OrLine from '@components/atoms/or-line';
import { gql, useMutation } from '@apollo/client';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { useAuthStore } from '../store/auth-store';
import {
  LoginWithCreds,
  LoginWithCredsVariables,
} from './__generated__/LoginWithCreds';

const LOGIN_WITH_CREDS_MUTATION = gql`
  mutation LoginWithCreds($email: String!, $password: String!) {
    loginWithCreds(email: $email, password: $password) {
      token
      userId
      refreshToken
    }
  }
`;

export default function SignIn() {
  const authStore = useAuthStore();

  const [loginWithCreds, { data, error, loading }] =
    useMutation<LoginWithCreds>(LOGIN_WITH_CREDS_MUTATION, {
      onCompleted: data => {
        authStore.login(data.loginWithCreds);
      },
    });

  const { register, handleSubmit } = useForm<LoginWithCredsVariables>();

  const handleLoginWithCreds = async (data: LoginWithCredsVariables) => {
    return loginWithCreds({
      variables: data,
    });
  };

  return (
    <div className="p-7 flex flex-col min-h-screen">
      <nav>
        <Logo />
      </nav>
      <div className="flex-1 flex flex-col justify-center items-center">
        <form onSubmit={handleSubmit(handleLoginWithCreds)}>
          <div className="flex flex-col items-stretch w-80 max-w-full">
            <FormGroup label="Email">
              <Input
                {...register('email', { required: 'Required' })}
                readOnly={loading}
                placeholder="your-email@provider.com"
              />
            </FormGroup>
            <FormGroup label="Password">
              <Input
                type="password"
                readOnly={loading}
                {...register('password', { required: 'Required' })}
                placeholder="********"
              />
            </FormGroup>
            {error && (
              <span className="text-error text-sm pb-1 font-medium">
                {error.message}
              </span>
            )}
            <a
              href="/test"
              className="text-sm mb-3 font-semibold text-accent hover:underline"
            >
              Forget your password?
            </a>
            <Button
              size="sm"
              className="mt-2"
              variant="primary"
              type="submit"
              loading={loading}
              disabled={loading}
            >
              Sign In
            </Button>
            <Link href="/auth/sign-up" passHref>
              <Button size="sm" className="mt-2" variant="secondary">
                Don&apos;t have an account?
              </Button>
            </Link>
            <OrLine className="my-6" />
            <ThirdPartyAuthButton variant="google" />
            <ThirdPartyAuthButton variant="github" />
          </div>
        </form>
      </div>
    </div>
  );
}
