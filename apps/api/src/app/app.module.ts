import { Module } from '@nestjs/common'
import { GraphQLModule } from '@nestjs/graphql'
import { ConfigModule } from '@nestjs/config'
import { RedisModule } from '@aelp-app/redis'
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo'

import { join } from 'path'

import UserModule from '../modules/user/user.module'
import AuthModule from '../modules/auth/auth.module'
import ClassroomModule from '../modules/classroom/classroom.module'
import { environment } from '../environments/environment'
import { EnvironmentModule } from '../modules/environment/environment.module'
import AssessmentModule from '../modules/assessment/assessment.module'
import QuestionsModule from '../modules/question/question.module'
import LanguageModule from '../modules/language/language.module'
import DiscussionModule from '../modules/discussion/discussion.module'

function onWebsocketConnection(connectionParams: any) {
  return {
    connection: {
      context: {
        headers: connectionParams,
      },
    },
  }
}

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
    LanguageModule,
    DiscussionModule,

    // Main GraphQL module
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      subscriptions: {
        'graphql-ws': {
          onConnect: onWebsocketConnection,
        },
        'subscriptions-transport-ws': {
          onConnect: onWebsocketConnection,
        },
      },
      introspection: true,
      autoSchemaFile: join(__dirname, './schema.gql'),
      playground: !environment.production,
      context: ({ req, res, connection, payload }) => {
        return {
          req,
          res,
          connection,
          payload,
        }
      },
    }),
  ],
})
export class AppModule {}
