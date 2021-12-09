import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { OAuth2Client } from 'google-auth-library';

@Injectable()
export class GoogleOAuthClientService {
  private client: OAuth2Client;
  private clientId: string;

  constructor(configService: ConfigService) {
    this.clientId = configService.get<string>('NEXT_PUBLIC_GOOGLE_CLIENT_ID');
    this.client = new OAuth2Client(this.clientId);
  }

  verifyIdToken(idToken: string) {
    return this.client.verifyIdToken({ idToken, audience: this.clientId });
  }
}
