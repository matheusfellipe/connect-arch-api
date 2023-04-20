/* eslint-disable prettier/prettier */
import { Controller,Put, Param, Body} from '@nestjs/common';
import { UpdateServiceRequestUseCase } from './update-service.usecase';
import { ServiceRequest } from '@prisma/client';
import { UpdateServiceRequestDTO } from 'src/service-request/dto/update-service-request.dto';


@Controller('architect')

export class UpdateServiceRequestController {
    constructor(
       
        private readonly updateServiceRequestUseCase:  UpdateServiceRequestUseCase ,
      
      ) {}
  
@Put(':id')
async updateServiceRequest(@Param('id') id: string, @Body() data:UpdateServiceRequestDTO): Promise<ServiceRequest> {
  return this.updateServiceRequestUseCase.execute(id,data);
}
}