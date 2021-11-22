import { Injectable } from '@nestjs/common';
import { caching, CachingConfig } from 'cache-manager';

// TODO: actually use redis

@Injectable()
export class RedisCacheService {
  private memoryCache = caching({
    store: 'memory',
    max: 100,
    ttl: 10 /* seconds */,
  });

  async cache<T>(key: string, func: () => Promise<T>, options?: CachingConfig) {
    const r = await this.memoryCache.get<T>(key);

    if (r) {
      return r;
    }

    return func().then(result => this.memoryCache.set(key, result, options));
  }
}
