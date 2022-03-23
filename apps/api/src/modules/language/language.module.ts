import { ModelsModule } from '@aelp-app/models'
import { Module } from '@nestjs/common'
import LanguageResolver from './language.resolver'

@Module({ imports: [ModelsModule], providers: [LanguageResolver] })
export default class LanguageModule {}
