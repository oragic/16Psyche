import crypto from 'crypto';
import dotenv  from 'dotenv';
import SECRETE from '../config/secret';

dotenv.config();


const decryptToken = (value: string) => {
  const secret = SECRETE
  const [iv, encrypted] = value.split(':');
  const ivBuffer = Buffer.from(iv,'hex');
  const decipher = crypto.createDecipheriv('aes-256-cbc',Buffer.from(secret),ivBuffer);
  let decrypted = decipher.update(Buffer.from(encrypted,'hex'));
  decrypted = Buffer.concat([decrypted,decipher.final()])
  return decrypted.toString();
}

export default decryptToken;
