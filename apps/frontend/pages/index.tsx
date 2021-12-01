import { gql, useMutation } from '@apollo/client';
import { Fragment, useEffect, useState } from 'react';
import GoogleSignIn from 'react-google-login';
import Button from '../components/atoms/Button';

export function Index() {
  return (
    <div className="p-16">
      <Button>Primary</Button>
    </div>
  );
}

export default Index;
