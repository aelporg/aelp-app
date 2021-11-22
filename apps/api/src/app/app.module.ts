import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ConfigModule } from '@nestjs/config';
import { GraphQLError, GraphQLFormattedError } from 'graphql';
import { join } from 'path';

import UserModule from '../user/user.module';
import AuthModule from '../auth/auth.module';
import { RedisModule } from '@aelp-app/redis';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    RedisModule,

    // Sub modules for GraphQl
    UserModule,
    AuthModule,

    // Main GraphQL module
    GraphQLModule.forRoot({
      autoSchemaFile: join(__dirname, '../schema.gql'),
      playground: true,
      formatError: (error: GraphQLError) => {
        return error;
      },
    }),
  ],
})
export class AppModule {}
