import Input from '@components/atoms/input/input';
import React, { useEffect } from 'react';
import Logo from '@components/atoms/logo/logo';
import Button from '@components/atoms/button';
import FormGroup from '@components/atoms/form-group/form-group';
import ThirdPartyAuthButton from '@components/molecules/third-party-auth-button';
import OrLine from '@components/atoms/or-line';
import { useMutation } from '@apollo/client';
import { LOGIN_WITH_CREDS_MUTATION } from '../graqhql';
import { useForm } from 'react-hook-form';

interface LoginWithCreds {
  userName: string;
  password: string;
}

export default function SignIn() {
  const [loginWithCreds, { data, error, loading }] = useMutation(
    LOGIN_WITH_CREDS_MUTATION
  );

  const { register, handleSubmit } = useForm<LoginWithCreds>();

  const handleLoginWithCreds = async (data: LoginWithCreds) => {
    await loginWithCreds({
      variables: data,
    }).catch(console.error);
  };

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <div className="p-7 flex flex-col min-h-screen">
      <nav>
        <Logo />
      </nav>
      <div className="flex-1 flex flex-col justify-center items-center">
        <form onSubmit={handleSubmit(handleLoginWithCreds)}>
          <div className="flex flex-col items-stretch w-80 max-w-full">
            <FormGroup label="Username">
              <Input
                {...register('userName', { required: 'Required' })}
                readOnly={loading}
              />
            </FormGroup>
            <FormGroup label="Password">
              <Input
                type="password"
                readOnly={loading}
                {...register('password', { required: 'Required' })}
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
            <Button size="sm" className="mt-2" variant="secondary">
              Don&apos;t have an account?
            </Button>
            <OrLine className="my-6" />
            <ThirdPartyAuthButton variant="google" />
            <ThirdPartyAuthButton variant="github" />
          </div>
        </form>
      </div>
    </div>
  );
}
