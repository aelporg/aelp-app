import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ConfigModule } from '@nestjs/config';
import { RedisModule } from '@aelp-app/redis';

import { GraphQLError, GraphQLFormattedError } from 'graphql';
import { join } from 'path';

import UserModule from '../modules/user/user.module';
import AuthModule from '../modules/auth/auth.module';
import ClassroomModule from '../modules/classroom/classroom.module';

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
      autoSchemaFile: join(__dirname, './schema.gql'),
      playground: true,
      context: ({ req, res }) => ({ req, res }),
      formatError: (error: GraphQLError) => {
        console.log(error);
        return error;
      },
    }),
  ],
})
export class AppModule {}
