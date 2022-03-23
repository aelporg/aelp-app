import { PrismaService } from '@aelp-app/models'
import { Query } from '@nestjs/graphql'
import { Resolver } from '@nestjs/graphql'
import { Language } from './types/language.model'

@Resolver(() => Language)
export default class LanguageResolver {
  constructor(private prismaService: PrismaService) {}

  @Query(() => [Language])
  async languages() {
    return this.prismaService.language.findMany()
  }
}
