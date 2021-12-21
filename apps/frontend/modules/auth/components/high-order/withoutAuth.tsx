import Redirect from '@components/high-order/Redirect';
import { useAuthStore } from '@modules/auth/store/auth-store';
import React, { ElementType } from 'react';

export default function withoutAuth<T extends ElementType>(
  Component: React.ComponentType<T>
) {
  return (props: React.ComponentPropsWithoutRef<T>) => {
    const authStore = useAuthStore();

    if (!authStore.auth) {
      return <Component {...props} />;
    } else {
      return Redirect('/app')();
    }
  };
}
