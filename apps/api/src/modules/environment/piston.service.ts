import { Injectable, OnModuleInit } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import Piston from '@aelp-app/piston'

@Injectable()
export default class PistonService implements OnModuleInit {
  private _client: Piston

  get client(): Piston {
    return this._client
  }

  constructor(private configService: ConfigService) {}

  onModuleInit() {
    this._client = new Piston({ baseUrl: this.configService.get('PISTON') })
  }
}
