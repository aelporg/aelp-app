import { gql, useMutation } from '@apollo/client';
import { Fragment, useEffect, useState } from 'react';
import GoogleSignIn from 'react-google-login';

export function Index() {
  const [tokenId, setTokenId] = useState();

  const responseGoogle = (response: any) => {
    setTokenId(response.tokenId);
  };

  const [signIn, { data, error }] = useMutation(
    gql`
      mutation LoginWithGoogle($tokenId: String!) {
        loginWithGoogle(tokenId: $tokenId) {
          token
        }
      }
    `,
    { variables: { tokenId } }
  );

  useEffect(() => {
    if (tokenId) signIn().then(e => console.log(e.data));
  }, [tokenId, signIn]);

  return (
    <div>
      <GoogleSignIn
        clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID}
        onSuccess={responseGoogle}
        onFailure={e => alert(JSON.stringify(e))}
        cookiePolicy={'single_host_origin'}
      />
    </div>
  );
}

export default Index;
