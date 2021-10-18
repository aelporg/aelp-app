import { Module } from '@nestjs/common';
import { ModelsModule, PrismaService } from '@aelp-app/models';
import { TypeGraphQLModule } from 'typegraphql-nestjs';
import UserModule from './submodules/user.module';
import AuthModule from './submodules/auth.module';

@Module({
  imports: [
    ModelsModule,
    TypeGraphQLModule.forRoot({
      emitSchemaFile: true,
      playground: true,
      authChecker: (data, roles) => {
        console.log(data, roles);
        return true;
      },
      dateScalarMode: 'timestamp',
      context: ({ req }) => ({
        currentUser: req.user,
        prisma: new PrismaService(),
      }),
    }),
    UserModule,
    AuthModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
