/* eslint-disable prettier/prettier */
import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { ServiceRequest } from '@prisma/client';
import { GetServiceRequestByStatusDTO } from 'src/service-request/dto/get-service-request-by-status.dto';
import { ServiceRequestPrismaRepository } from 'src/service-request/repository/implementations/service-request.prisma.repository';

@Injectable()
export class GetServiceRequestByStatusUseCase {
  private readonly logger: Logger = new Logger(GetServiceRequestByStatusUseCase.name);

  constructor(private readonly serviceRequestRepository: ServiceRequestPrismaRepository) {}
  async execute(input: GetServiceRequestByStatusDTO,userId:string):Promise<ServiceRequest[]> {
    const serviceRequest = await this.serviceRequestRepository.findByStatusAndUserId(input.status,userId)
    if (!serviceRequest) {
      const error = new NotFoundException('No service request found');
      this.logger.error(error.message);
      throw error;
    }
    this.logger.log('Request service found successfully');
    return serviceRequest;
  }
}
