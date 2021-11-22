import { Module, Global } from '@nestjs/common';
import { RedisCacheService } from './redis-cache.service';

export { RedisCacheService };

@Global()
@Module({
  controllers: [],
  imports: [],
  providers: [RedisCacheService],
  exports: [RedisCacheService],
})
export class RedisModule {}
