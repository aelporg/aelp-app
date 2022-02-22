import { SetMetadata } from '@nestjs/common'

export default function SkipAuth() {
  return SetMetadata('skipAuth', true)
}
