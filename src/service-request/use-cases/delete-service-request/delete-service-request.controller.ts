/* eslint-disable prettier/prettier */
import { Controller,Delete, Param} from '@nestjs/common';
import { DeleteServiceRequestUseCase } from './delete-service-request.usecase';
import { ServiceRequest } from '@prisma/client';

@Controller()
export class DeleteServiceRequestController {
    constructor(
       
        private readonly deleteServiceRequestUseCase: DeleteServiceRequestUseCase,
      
      ) {}
@Delete(':id')
async deleteServiceRequest(@Param('id') id: string): Promise<ServiceRequest> {
  return this.deleteServiceRequestUseCase.execute(id);
}
}