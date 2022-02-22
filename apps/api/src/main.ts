/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Logger } from '@nestjs/common'
import { JoiPipe } from 'nestjs-joi'
import { NestFactory } from '@nestjs/core'

import { AppModule } from './app/app.module'
import AuthModule from './modules/auth/auth.module'
import { JwtAuthGuard } from './modules/auth/guards/JwtAuthGuard'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  const validationPipe = new JoiPipe()

  app.enableCors({ exposedHeaders: ['set-access-token'] })

  const jwtAuthGuard = app.select(AuthModule).get(JwtAuthGuard)

  app.useGlobalPipes(validationPipe)
  app.useGlobalGuards(jwtAuthGuard)

  const port = process.env.PORT || 3333

  await app.listen(port, () => {
    Logger.log(`Listening at http://localhost:${port}/`)
  })
}

bootstrap()
