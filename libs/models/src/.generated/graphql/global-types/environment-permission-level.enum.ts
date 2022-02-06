import { registerEnumType } from '@nestjs/graphql';

export enum EnvironmentPermissionLevel {
    OWNER = "OWNER",
    READ_WRITE = "READ_WRITE",
    READ = "READ"
}


registerEnumType(EnvironmentPermissionLevel, { name: 'EnvironmentPermissionLevel', description: undefined })
