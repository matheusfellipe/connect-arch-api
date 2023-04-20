/* eslint-disable prettier/prettier */
import { Controller, Get} from '@nestjs/common';
import { GetAllServiceRequestUseCase } from './get-all-service-request.usecase';


@Controller('service-request')
export class GetAllServiceRequestController {
    constructor(
       
        private readonly getAllServiceRequestUseCase: GetAllServiceRequestUseCase,
      
      ) {}
@Get()
async getServiceRequest() {
  return this.getAllServiceRequestUseCase.execute();
}
}