import 'server-only'
import { SignJWT, jwtVerify } from 'jose'
 
const secretKey = process.env.JWT_SECRET

const encodedKey = new TextEncoder().encode(secretKey)

type SessionPayload = {
  github_access_token: string
}

export async function encrypt(payload: SessionPayload) {
  return new SignJWT(payload)
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime('7d')
    .sign(encodedKey)
}

export async function decrypt(session: string | undefined = '') {
  try {
    const { payload } = await jwtVerify(session, encodedKey, {
      algorithms: ['HS256'],
    })
    return payload
  } catch (error) {
    console.log('Failed to verify session')
  }
}