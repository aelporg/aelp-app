import Navigate from '@components/navigate'
import { useRouter } from 'next/router'

export default function GotoAnnouncements() {
  const router = useRouter()
  const { id } = router.query

  return <Navigate to={`/app/classroom/${id}/announcements`}  replace/>
}
