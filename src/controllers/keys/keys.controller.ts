import { Controller, Get } from '@nestjs/common';
import { generateKeyPairSync, randomBytes } from 'crypto';

@Controller('keys')
export class KeysController {

  @Get('keypair')
  protected getKeyPair() {
    return generateKeyPairSync('rsa', { modulusLength: 2048,
      publicKeyEncoding: {
        type: 'pkcs1',
        format: 'pem',
      },
      privateKeyEncoding: {
        type: 'pkcs1',
        format: 'pem',
        cipher: 'aes-256-cbc',
        passphrase: randomBytes(16).toString('utf-8'),
      },
    });
  }
}
