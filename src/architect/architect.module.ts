/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { CreateArchitectController } from './useCases/create-architect/create-architect.controller';
import { GetAllArchitectController } from './useCases/get-architect/get-architect.controller';
import { ArchitectPrismaRepository } from './repository/implementations/architect.prisma.repository';
import { CreateArchitectUseCase } from './useCases/create-architect/create-architect.usecase';
import { GetAllArchitectUseCase } from './useCases/get-architect/get-architect.usecase';

@Module({
  controllers: [CreateArchitectController,GetAllArchitectController],
  providers: [ArchitectPrismaRepository,CreateArchitectUseCase,GetAllArchitectUseCase],
  exports: [ArchitectPrismaRepository]
})
export class ArchitectModule {}