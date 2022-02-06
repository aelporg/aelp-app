import { useEffect } from 'react';
import { useAuthStore } from '@modules/auth/store/auth-store';

export default function SignOut() {
  const { logout } = useAuthStore();

  useEffect(() => {
    logout();
  }, [logout]);

  return (
    <div>
      <h1>Bye bye</h1>
    </div>
  );
}
