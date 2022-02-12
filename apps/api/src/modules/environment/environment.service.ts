import { PrismaService } from '@aelp-app/models'
import { Injectable } from '@nestjs/common'

@Injectable()
export class EnvironmentService {
  constructor(private prismaService: PrismaService) {}

  async getById(id: string) {
    return this.prismaService.environment.findUnique({
      where: { id },
    })
  }
}
