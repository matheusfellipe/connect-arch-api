/* eslint-disable prettier/prettier */
import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { ServiceRequestPrismaRepository } from 'src/service-request/repository/implementations/service-request.prisma.repository';

@Injectable()
export class GetAllServiceRequestUseCase {
  private readonly logger: Logger = new Logger(GetAllServiceRequestUseCase.name);

  constructor(private readonly serviceRequestRepository: ServiceRequestPrismaRepository) {}
  async execute(userId:string) {
  
    const serviceRequest = await this.serviceRequestRepository.findAll(userId)
    if (!serviceRequest) {
      const error = new NotFoundException('No service request found');
      this.logger.error(error.message);
      throw error;
    }

    return serviceRequest;
  }
}
