import { Mutation } from '@nestjs/graphql';
import { Arg, Resolver } from 'type-graphql';

@Resolver()
export default class AuthResolver {
  @Mutation('login')
  async login(
    @Arg('userName') userName: string,
    @Arg('password') password: string
  ): Promise<string> {
    console.log(userName, password);
    return 'secret';
  }
}
