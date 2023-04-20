/* eslint-disable prettier/prettier */
import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { ServiceRequest } from '@prisma/client';
import { UpdateServiceRequestDTO } from 'src/service-request/dto/update-service-request.dto';
import { ServiceRequestPrismaRepository} from 'src/service-request/repository/implementations/service-request.prisma.repository';

@Injectable()
export class UpdateServiceRequestUseCase {
  private readonly logger: Logger = new Logger(UpdateServiceRequestUseCase.name);

  constructor(private readonly serviceRequestRepository: ServiceRequestPrismaRepository) {}

  async execute(id: string, input: UpdateServiceRequestDTO): Promise<ServiceRequest> {
    const serviceRequested = await this.serviceRequestRepository.findById(id)
    if (!serviceRequested) {
      const error = new NotFoundException('Service request not found');
      this.logger.error(error.message);
      throw error;
    }
    const updatedServiceRequest = await this.serviceRequestRepository.update(id, input);
    this.logger.log(`Service request ${id} updated`);
    return updatedServiceRequest;
  }
}