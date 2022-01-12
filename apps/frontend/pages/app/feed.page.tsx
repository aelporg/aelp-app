import { gql, useLazyQuery, useQuery } from '@apollo/client';
import Button from '@components/atoms/button';
import React from 'react';
import { AppLayout } from './_layout';

export default function ClassroomList() {
  const [run, { data, loading }] = useLazyQuery(
    gql`
      query UserFirstName {
        me {
          firstName
        }
      }
    `
  );

  return (
    <AppLayout>
      <Button loading={loading} onClick={() => run()}>
        Run Query
      </Button>
    </AppLayout>
  );
}
