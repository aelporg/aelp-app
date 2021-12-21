import React, { useEffect } from 'react';
import Logo from '@components/atoms/logo/logo';
import Button from '@components/atoms/button';
import FormGroup from '@components/atoms/form-group/form-group';
import ThirdPartyAuthButton from '@components/molecules/third-party-auth-button';
import OrLine from '@components/atoms/or-line';
import { HFInput } from '@components/atoms/input/input';
import Link from 'next/link';
import { classValidatorResolver } from '@hookform/resolvers/class-validator';
import { gql, useMutation } from '@apollo/client';
import { HFUserRegister } from '@aelp-app/validators';
import HForm from '@components/atoms/form/form';

const REGISTER_WITH_EMAIL = gql`
  mutation RegisterWithEmail($data: UserRegisterDtoWithPassword!) {
    register(data: $data)
  }
`;

const resolver = classValidatorResolver(HFUserRegister);

export default function SignUp() {
  const [registerUser, { error, loading }] = useMutation(REGISTER_WITH_EMAIL, {
    onCompleted: data => {},
  });

  const onSubmit = (data: HFUserRegister) => {
    return registerUser({
      variables: { data },
    });
  };

  return (
    <div className="p-7 flex flex-col min-h-screen">
      <nav>
        <Logo />
      </nav>
      <div className="flex-1 flex flex-col justify-center items-center">
        <HForm<HFUserRegister>
          className="flex flex-col items-stretch w-80 max-w-full"
          onSubmit={onSubmit}
          hfOptions={{
            resolver,
          }}
        >
          <FormGroup label="Email">
            <HFInput name="email" readOnly={loading} />
          </FormGroup>
          <FormGroup label="Password">
            <HFInput type="password" name="password" readOnly={loading} />
          </FormGroup>
          <FormGroup label="Confirm Password">
            <HFInput
              type="password"
              name="confirmPassword"
              readOnly={loading}
            />
          </FormGroup>
          <HFInput type="checkbox" name="agreeTerms" readOnly={loading} />
          <Button
            size="sm"
            className="mt-6"
            type="submit"
            variant="primary"
            loading={loading}
          >
            Sign Up
          </Button>
          <Link href="/auth/sign-in">
            <Button size="sm" className="mt-2" variant="secondary">
              Already have an Account?
            </Button>
          </Link>
          <OrLine className="my-6" />
          <ThirdPartyAuthButton variant="google" createAccount />
          <ThirdPartyAuthButton variant="github" createAccount />
        </HForm>
      </div>
    </div>
  );
}
