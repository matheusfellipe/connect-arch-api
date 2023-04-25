/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common/decorators';

import { UsersMemoryRepository } from './repository/implementations/users.memory.repository';
import { UsersPrismaRepository } from './repository/implementations/users.prisma.repository';
import { CreateUserController } from './useCases/create-user/create-user.controller';
import { CreateUserUseCase } from './useCases/create-user/create-user.usecase';
import { GetUserByEmailUseCase } from './useCases/get-user-by-email/get-user-by-email.usecase';
import { GetRoleByIdUseCase } from './useCases/get-role-by-id/get-role-by-id.usecase';

@Module({
  controllers: [CreateUserController],
  providers: [
    UsersMemoryRepository,
    UsersPrismaRepository,
    CreateUserUseCase,
    GetUserByEmailUseCase,
    GetRoleByIdUseCase
  ],
  exports: [UsersPrismaRepository, GetUserByEmailUseCase],
})
export class UsersModule {}
