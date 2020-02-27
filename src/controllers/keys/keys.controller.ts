import { Controller, Get } from '@nestjs/common';
import { generateKeyPairSync, KeyPairSyncResult, randomBytes } from 'crypto';

@Controller('keys')
export class KeysController {

    private CHARSET = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()-[]{}.?<>'.split('');

    @Get('keypair')
    protected getKeyPair(): KeyPairResult {
        const passphrase: string = this.generatePassword();
        return {
            ...generateKeyPairSync('rsa', {
                modulusLength: 2048,
                publicKeyEncoding: {
                    type: 'pkcs1',
                    format: 'pem',
                },
                privateKeyEncoding: {
                    type: 'pkcs1',
                    format: 'pem',
                    cipher: 'aes-256-cbc',
                    passphrase,
                },
            }),
            passphrase,
        };
    }

    private generatePassword() {
        let password = '';
        const randBytes = randomBytes(this.CHARSET.length);
        for (let i = 1; i < 32; i++) {
            password += this.CHARSET[randBytes[i] % this.CHARSET.length];
        }
        return password;
    }
}

interface KeyPairResult extends KeyPairSyncResult<string, string> {
    passphrase: string;
}
