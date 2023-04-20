/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common/decorators';
import { CreateServiceRequestController } from './use-cases/create-service-request/create-service-request.controller';
import { GetServiceRequestByStatusController } from './use-cases/get-service-request-by-status/get-service-request.controller';
import { UpdateServiceRequestController } from './use-cases/update-service-request/update-service.controller';
import { DeleteServiceRequestController } from './use-cases/delete-service-request/delete-service-request.controller';
import { ServiceRequestPrismaRepository } from './repository/implementations/service-request.prisma.repository';
import { CreateServiceRequestUseCase } from './use-cases/create-service-request/create-service-request.usecase';
import { GetAllServiceRequestUseCase } from './use-cases/get-all-service-request/get-all-service-request.usecase';
import { GetServiceRequestByStatusUseCase } from './use-cases/get-service-request-by-status/get-service-request-by-status.usecase';
import { UpdateServiceRequestUseCase } from './use-cases/update-service-request/update-service.usecase';
import { DeleteServiceRequestUseCase } from './use-cases/delete-service-request/delete-service-request.usecase';



@Module({
  controllers: [
    CreateServiceRequestController,
    GetServiceRequestByStatusController,
    UpdateServiceRequestController,
    DeleteServiceRequestController],
  providers: [
   CreateServiceRequestUseCase,
   GetAllServiceRequestUseCase,
   GetServiceRequestByStatusUseCase,
   UpdateServiceRequestUseCase,
   DeleteServiceRequestUseCase,
   ServiceRequestPrismaRepository
  ],
  exports: [ServiceRequestPrismaRepository],
})
export class ServiceRequestModule {}
