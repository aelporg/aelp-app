import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ModelsModule } from '@aelp-app/models';

@Module({
  imports: [ModelsModule, GraphQLModule.forRoot({ autoSchemaFile: true })],
  controllers: [],
  providers: [],
})
export class AppModule {}
