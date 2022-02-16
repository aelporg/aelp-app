import { ModelsModule } from "@aelp-app/models";
import { Module } from "@nestjs/common";
import EnvironmentResolver from "./environment.resolver";
import { EnvironmentService } from "./environment.service";

@Module({
  imports: [ModelsModule],
  providers: [EnvironmentService, EnvironmentResolver],
})
export class EnvironmentModule {}
