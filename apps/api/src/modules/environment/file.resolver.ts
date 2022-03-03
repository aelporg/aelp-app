import { ResolveField, Resolver, Root } from '@nestjs/graphql'
import { PrismaService } from '@aelp-app/models'
import { File } from './types/file.model'
import { Language } from '../language/types/language.model'

@Resolver(() => File)
export default class FileResolver {
  constructor(private prismaService: PrismaService) {}

  @ResolveField(() => Language)
  async language(@Root() file: File) {
    return this.prismaService.file.findUnique({
      where: { id: file.id },
    }).language()
  }
}
