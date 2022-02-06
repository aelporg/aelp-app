import { useRouter } from 'next/router'
import { useEffect } from 'react'

export default function Navigate({
  to,
  replace,
}: {
  to: string
  replace?: boolean
}) {
  const router = useRouter()

  useEffect(() => {
    if (replace) {
      router.replace(to)
    } else {
      router.push(to)
    }
  }, [router, to, replace])

  return null
}
