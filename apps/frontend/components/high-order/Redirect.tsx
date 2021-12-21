import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function Redirect(to: string) {
  return () => {
    const router = useRouter();

    useEffect(() => {
      router.replace(to);
    }, [router, to]);

    return null;
  };
}
