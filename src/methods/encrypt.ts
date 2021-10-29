import crypto from 'crypto';
import SECRETE from '../config/secret';

const encryptToken = (value:string) => {
  const secret = SECRETE;
  const iv = Buffer.from(crypto.randomBytes(16));
  const cipher = crypto.createCipheriv('aes-256-cbc', Buffer.from(secret),iv);
  let encrypted = cipher.update(value);
  encrypted = Buffer.concat([encrypted, cipher.final()])
  return `${iv.toString('hex')}:${encrypted.toString('hex')}`;
}

export default encryptToken;

