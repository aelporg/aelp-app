import { Module } from '@nestjs/common'
import { GraphQLModule } from '@nestjs/graphql'
import { ConfigModule } from '@nestjs/config'
import { RedisModule } from '@aelp-app/redis'
import { ApolloDriver } from '@nestjs/apollo'

import { join } from 'path'

import UserModule from '../modules/user/user.module'
import AuthModule from '../modules/auth/auth.module'
import ClassroomModule from '../modules/classroom/classroom.module'
import { environment } from '../environments/environment'
import { EnvironmentModule } from '../modules/environment/environment.module'
import AssessmentModule from '../modules/assessment/assessment.module'
import QuestionsModule from '../modules/question/question.module'

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    RedisModule,

    // Sub modules for GraphQl
    UserModule,
    AuthModule,
    ClassroomModule,
    EnvironmentModule,
    AssessmentModule,
    QuestionsModule,

    // Main GraphQL module
    GraphQLModule.forRoot({
      driver: ApolloDriver,
      installSubscriptionHandlers: true,
      subscriptions: {
        'graphql-ws': true,
      },
      autoSchemaFile: join(__dirname, './schema.gql'),
      playground: !environment.production,
      context: ({ req, res }) => ({ req, res }),
    }),
  ],
})
export class AppModule {}
