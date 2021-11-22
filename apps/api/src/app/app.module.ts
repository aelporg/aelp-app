import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ConfigModule } from '@nestjs/config';
import { GraphQLError, GraphQLFormattedError } from 'graphql';
import { join } from 'path';

import UserModule from '../user/user.module';
import AuthModule from '../auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),

    // Sub modules for GraphQl
    UserModule,
    AuthModule,

    // Main GraphQL module
    GraphQLModule.forRoot({
      autoSchemaFile: join(__dirname, '../schema.gql'),
      playground: true,
      formatError: (error: GraphQLError) => {
        console.log(error);
        const graphQLFormattedError: GraphQLFormattedError = {
          message: error.extensions?.response?.message || error.message,
        };
        return graphQLFormattedError;
      },
    }),
  ],
})
export class AppModule {}
