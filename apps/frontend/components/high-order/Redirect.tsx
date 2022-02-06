import Navigate from '@components/navigate'

export default function Redirect(to: string) {
  const RedirectC = () => <Navigate to={to} />

  return RedirectC
}
