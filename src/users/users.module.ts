/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common/decorators';

import { UsersMemoryRepository } from './repository/implementations/users.memory.repository';
import { UsersPrismaRepository } from './repository/implementations/users.prisma.repository';
import { CreateUserController } from './useCases/create-user/create-user.controller';
import { CreateUserUseCase } from './useCases/create-user/create-user.usecase';
import { GetUserByEmailUseCase } from './useCases/get-user/get-user.usecase';

@Module({
  controllers: [CreateUserController],
  providers: [
    UsersMemoryRepository,
    UsersPrismaRepository,
    CreateUserUseCase,
    GetUserByEmailUseCase
  ],
  exports: [UsersPrismaRepository, GetUserByEmailUseCase],
})
export class UsersModule {}
