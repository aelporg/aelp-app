import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { Request } from 'express';

@Injectable()
export class IPAddressLookUpService {
  public async getCountry(ipAddress?: string): Promise<string> {
    if (!ipAddress) return undefined;

    return axios
      .get<string>(`https://ipapi.co/${ipAddress}/country/`)
      .then(e => (e.data === 'Undefined' ? undefined : e.data));
  }

  public async getCountryOfRequest(ctx: any): Promise<string> {
    return this.getCountry((ctx.req as Request).socket.remoteAddress);
  }
}
