import { Module } from '@nestjs/common';
import PrismaService from './services/PrismaService';

@Module({
  controllers: [],
  providers: [PrismaService],
  exports: [PrismaService],
})
export class ModelsModule {}
