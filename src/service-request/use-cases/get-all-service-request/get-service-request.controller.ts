/* eslint-disable prettier/prettier */
import { Controller, Get, Request, UseGuards} from '@nestjs/common';
import { GetAllServiceRequestUseCase } from './get-all-service-request.usecase';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';


@Controller('service-request')
export class GetAllServiceRequestController {
    constructor(
       
        private readonly getAllServiceRequestUseCase: GetAllServiceRequestUseCase,
      
      ) {}
      @UseGuards(JwtAuthGuard)
@Get()
async getServiceRequest(@Request() req) {
  const userId =req.user.userId;
  return this.getAllServiceRequestUseCase.execute(userId);
}
}