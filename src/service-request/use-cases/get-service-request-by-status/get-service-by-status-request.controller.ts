/* eslint-disable prettier/prettier */
import { Controller, Get, Param, Request, UseGuards} from '@nestjs/common';
import { GetServiceRequestByStatusUseCase } from './get-service-request-by-status.usecase'; 
import { ServiceRequest } from '@prisma/client';
import { GetServiceRequestByStatusDTO } from 'src/service-request/dto/get-service-request-by-status.dto';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';

@Controller('service-request')
export class GetServiceRequestByStatusController {
    constructor(
       
        private readonly getServiceRequestUseCase: GetServiceRequestByStatusUseCase,
      
      ) {}
      @UseGuards(JwtAuthGuard)
@Get(':status')
async getServiceRequest(@Param('status') status: GetServiceRequestByStatusDTO,@Request() req): Promise<ServiceRequest[]> {
  const arquitectId =req.arquitectId;
  return this.getServiceRequestUseCase.execute(status,arquitectId);
}
}