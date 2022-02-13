import { Module } from '@nestjs/common'
import { GraphQLModule } from '@nestjs/graphql'
import { ConfigModule } from '@nestjs/config'
import { RedisModule } from '@aelp-app/redis'
import { ApolloDriver } from '@nestjs/apollo'

import { GraphQLError } from 'graphql'
import { join } from 'path'

import UserModule from '../modules/user/user.module'
import AuthModule from '../modules/auth/auth.module'
import ClassroomModule from '../modules/classroom/classroom.module'
import { environment } from '../environments/environment'

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    RedisModule,

    // Sub modules for GraphQl
    UserModule,
    AuthModule,
    ClassroomModule,

    // Main GraphQL module
    GraphQLModule.forRoot({
      driver: ApolloDriver,
      autoSchemaFile: join(__dirname, './schema.gql'),
      playground: !environment.production,
      context: ({ req, res }) => ({ req, res }),
    }),
  ],
})
export class AppModule {}
