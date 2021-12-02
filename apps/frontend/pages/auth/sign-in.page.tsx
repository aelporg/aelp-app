import { Input } from '../../components';
import React from 'react';
import Logo from '../../components/atoms/logo/logo';
import Button from '../../components/atoms/button';
import FormGroup from '../../components/atoms/form-group/form-group';
import ThirdPartyAuthButton from '@components/molecules/third-party-auth-button';
import OrLine from '@components/atoms/or-line';

export default function SignIn() {
  return (
    <div className="p-7 flex flex-col min-h-screen">
      <nav>
        <Logo />
      </nav>
      <div className="flex-1 flex flex-col justify-center items-center">
        <div className="flex flex-col items-stretch w-1/5">
          <FormGroup label="Username">
            <Input />
          </FormGroup>
          <FormGroup label="Password">
            <Input type="password" />
          </FormGroup>
          <a
            href="/test"
            className="text-sm mb-3 font-semibold text-green-500 hover:underline"
          >
            Forget your password?
          </a>
          <Button size="sm" className="mt-2" variant="primary">
            Sign In
          </Button>
          <Button size="sm" className="mt-2" variant="secondary">
            Don&apos;t have an account?
          </Button>
          <OrLine className="my-6" />
          <ThirdPartyAuthButton variant="google" />
          <ThirdPartyAuthButton variant="github" />
        </div>
      </div>
    </div>
  );
}
