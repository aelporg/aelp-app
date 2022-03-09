import { Facebook } from 'react-content-loader'

export default function ContentLoader() {
  return (
    <Facebook
      className="p-5 bg-white border rounded-lg"
      backgroundColor={'#e1e1e1'}
      foregroundColor={'#f1f1f1'}
      interval={0}
      speed={2}
    />
  )
}
