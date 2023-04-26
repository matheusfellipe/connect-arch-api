/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common/decorators';

import { UsersMemoryRepository } from './repository/implementations/users.memory.repository';
import { UsersPrismaRepository } from './repository/implementations/users.prisma.repository';
import { CreateUserController } from './useCases/create-user/create-user.controller';
import { CreateUserUseCase } from './useCases/create-user/create-user.usecase';
import { GetUserByEmailUseCase } from './useCases/get-user-by-email/get-user-by-email.usecase';
import { GetUserByRoleUseCase } from './useCases/get-user-by-role/get-user-by-role.usecase';
import { GetUsersByRoleController } from './useCases/get-user-by-role/get-user-by-role.controller';

@Module({
  controllers: [CreateUserController,GetUsersByRoleController],
  providers: [
    UsersMemoryRepository,
    UsersPrismaRepository,
    CreateUserUseCase,
    GetUserByEmailUseCase,
    GetUserByRoleUseCase
  ],
  exports: [UsersPrismaRepository, GetUserByEmailUseCase],
})
export class UsersModule {}
