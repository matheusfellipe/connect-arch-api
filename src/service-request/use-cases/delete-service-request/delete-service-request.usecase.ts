/* eslint-disable prettier/prettier */
import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { ServiceRequest } from '@prisma/client';
import { ServiceRequestRepository } from 'src/service-request/repository/implementations/service-request.prisma.repository';

@Injectable()
export class DeleteServiceRequestUseCase {
  private readonly logger: Logger = new Logger(DeleteServiceRequestUseCase.name);

  constructor(private readonly serviceRequestRepository: ServiceRequestRepository) {}

  async execute(id: string): Promise<ServiceRequest> {
    const serviceRequest = await this.serviceRequestRepository.findById(id);
    if (!serviceRequest) {
      const error = new NotFoundException('Service request not found');
      this.logger.error(error.message);
      throw error;
    }
    const deletedServiceRequest = await this.serviceRequestRepository.delete(id);
    this.logger.log(`Service request ${id} deleted`);
    return deletedServiceRequest;
  }
}