import { gql, useQuery } from '@apollo/client';
import React, { useMemo } from 'react';
import { MeQuery, MeQuery_me } from 'typings/graphql/MeQuery';
import { useAuthStore } from './auth-store';

const ME_QUERY = gql`
  query MeQuery {
    me {
      id
      firstName
      lastName
      userName
      email
    }
  }
`;

class Me {
  constructor(public readonly data: MeQuery_me) {}

  get id(): string {
    return this.data.id;
  }

  get name(): string {
    return this.data.firstName && this.data.lastName
      ? `${this.data.firstName} ${this.data.lastName}`
      : this.data.userName;
  }

  get shortName(): string {
    return this.data.firstName ? this.data.firstName : this.data.userName;
  }
}

export interface MeStore {
  me?: Me;
  isLoading: boolean;
}

export const MeStoreContext = React.createContext<MeStore | undefined>(
  undefined
);

export function useMeStore() {
  const value = React.useContext(MeStoreContext);

  if (!value) {
    throw new Error('useMeStore must be used within a MeStoreProvider');
  }

  return value;
}

export default function MeStoreProvider(
  props: React.PropsWithChildren<Record<string, unknown>>
) {
  const { auth } = useAuthStore();
  const { data, loading } = useQuery<MeQuery | undefined>(ME_QUERY, {
    skip: !auth,
  });
  const me = useMemo(() => (data?.me ? new Me(data.me) : undefined), [data]);

  return (
    <MeStoreContext.Provider
      value={{
        me,
        isLoading: loading,
      }}
    >
      {props.children}
    </MeStoreContext.Provider>
  );
}
