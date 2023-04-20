/* eslint-disable prettier/prettier */
import { CreateServiceRequestDTO } from 'src/service-request/dto/create-service-request.dto'; 
import { Injectable, Logger } from '@nestjs/common';
import { ServiceRequest } from '@prisma/client';
import { ServiceRequestPrismaRepository } from 'src/service-request/repository/implementations/service-request.prisma.repository'; 

@Injectable()
export class CreateServiceRequestUseCase {
  private readonly logger: Logger = new Logger(CreateServiceRequestUseCase.name);

  constructor(private readonly serviceRequestRepository: ServiceRequestPrismaRepository) {}

  async execute(input: CreateServiceRequestDTO): Promise<ServiceRequest> {
  
    const patient = await this.serviceRequestRepository.create(input);
    this.logger.log(`Patient ${patient.id} created`);
    return patient;
  }
}
