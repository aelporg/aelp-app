import Navigate from '@components/navigate'
import { useAuthStore } from '@modules/auth/store/auth-store'
import React, { ElementType } from 'react'


export default function withAuthBeing<T>(
  state: boolean,
  Component: React.ComponentType<T>
) {
  const NewComponent = (props: T) => {
    const { auth } = useAuthStore()

    return (state && auth) || (!state && !auth) ? (
      <Component {...props} />
    ) : (
      <Navigate to={auth ? '/app' : '/auth/sign-in'} />
    )
  }


  NewComponent.displayName = `withAuth(${Component.displayName || Component.name})`

  return NewComponent
}
