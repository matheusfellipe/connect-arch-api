/* eslint-disable prettier/prettier */
import { Controller,Put, Param, Body, UseGuards} from '@nestjs/common';
import { UpdateServiceRequestUseCase } from './update-service.usecase';
import { ServiceRequest } from '@prisma/client';
import { UpdateServiceRequestDTO } from 'src/service-request/dto/update-service-request.dto';
import { RolesGuard } from 'src/auth/guards/roles.guard';

@Controller('architect')

export class UpdateServiceRequestController {
    constructor(
       
        private readonly updateServiceRequestUseCase:  UpdateServiceRequestUseCase ,
      
      ) {}
      @UseGuards(RolesGuard)
@Put(':id')
async updateServiceRequest(@Param('id') id: string, @Body() data:UpdateServiceRequestDTO): Promise<ServiceRequest> {
  return this.updateServiceRequestUseCase.execute(id,data);
}
}