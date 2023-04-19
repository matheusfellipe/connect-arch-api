/* eslint-disable prettier/prettier */
import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { ServiceRequest } from '@prisma/client';
import { GetServiceRequestByStatusDTO } from 'src/service-request/dto/get-service-request-by-status.dto';
import { ServiceRequestRepository } from 'src/service-request/repository/implementations/service-request.prisma.repository';

@Injectable()
export class GetAllServiceRequestUseCase {
  private readonly logger: Logger = new Logger(GetAllServiceRequestUseCase.name);

  constructor(private readonly serviceRequestRepository: ServiceRequestRepository) {}
  async execute(input: GetServiceRequestByStatusDTO):Promise<ServiceRequest> {
    const serviceRequest = await this.serviceRequestRepository.findByStatus(input.status)
    if (!serviceRequest) {
      const error = new NotFoundException('No service request found');
      this.logger.error(error.message);
      throw error;
    }
    this.logger.log('Request service found successfully');
    return serviceRequest;
  }
}
