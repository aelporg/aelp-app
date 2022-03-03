import {
  OnModuleInit,
  INestApplication,
  Injectable,
  Logger,
} from '@nestjs/common'
import { PrismaClient } from '.prisma/client'

@Injectable()
export default class PrismaService
  extends PrismaClient
  implements OnModuleInit
{
  private readonly logger = new Logger(PrismaService.name)

  constructor() {
    super({
      log: [
        {
          emit: 'stdout',
          level: 'error',
        },
        {
          emit: 'stdout',
          level: 'info',
        },
        {
          emit: 'stdout',
          level: 'warn',
        },
      ],
    })
  }

  async onModuleInit() {
    await this.$connect()
  }

  async enableShutdownHooks(app: INestApplication) {
    this.$on('beforeExit', async () => {
      await app.close()
    })
  }
}
