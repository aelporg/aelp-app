import React from 'react';
import Logo from '../../components/atoms/logo/logo';
import Button from '../../components/atoms/button';
import FormGroup from '../../components/atoms/form-group/form-group';
import ThirdPartyAuthButton from '@components/molecules/third-party-auth-button';
import OrLine from '@components/atoms/or-line';
import Input from '@components/atoms/input/input';

export default function Login() {
  return (
    <div className="p-7 flex flex-col min-h-screen">
      <nav>
        <Logo />
      </nav>
      <div className="flex-1 flex flex-col justify-center items-center">
        <div className="flex flex-col items-stretch w-80 max-w-full">
          <FormGroup label="Email">
            <Input />
          </FormGroup>
          <FormGroup label="Password">
            <Input type="password" />
          </FormGroup>
          <FormGroup label="Confirm Password">
            <Input type="password" />
          </FormGroup>
          <Button size="sm" className="mt-6" variant="primary">
            Sign Up
          </Button>
          <Button size="sm" className="mt-2" variant="secondary">
            Already have an Account?
          </Button>
          <OrLine className="my-6" />
          <ThirdPartyAuthButton variant="google" createAccount />
          <ThirdPartyAuthButton variant="github" createAccount />
        </div>
      </div>
    </div>
  );
}
