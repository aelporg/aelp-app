import { generate } from 'randomstring';

export function generateRefreshToken() {
  return generate({ length: 64 });
}
