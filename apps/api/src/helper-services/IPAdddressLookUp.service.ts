import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class IPAddressLookUpService {
  public async getCountry(ipAddress: string): Promise<string> {
    return axios
      .get<string>(`https://ipapi.co/${ipAddress}/country/`)
      .then(e => (e.data === 'Undefined' ? undefined : e.data));
  }
}
