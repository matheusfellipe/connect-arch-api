/* eslint-disable prettier/prettier */
import { Controller, Get, Param} from '@nestjs/common';
import { GetServiceRequestByStatusUseCase } from './get-service-request-by-status.usecase'; 
import { ServiceRequest } from '@prisma/client';
import { GetServiceRequestByStatusDTO } from 'src/service-request/dto/get-service-request-by-status.dto';

@Controller()
export class GetServiceRequestByStatusController {
    constructor(
       
        private readonly getServiceRequestUseCase: GetServiceRequestByStatusUseCase,
      
      ) {}
@Get(':status')
async getServiceRequest(@Param('status') status: GetServiceRequestByStatusDTO): Promise<ServiceRequest> {
  return this.getServiceRequestUseCase.execute(status);
}
}