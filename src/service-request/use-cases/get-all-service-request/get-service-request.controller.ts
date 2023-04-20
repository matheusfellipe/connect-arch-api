/* eslint-disable prettier/prettier */
import { Controller, Get} from '@nestjs/common';
import { GetAllArchitectUseCase } from 'src/architect/useCases/get-architect/get-architect.usecase'; 


@Controller('service-request')
export class GetAllServiceRequestController {
    constructor(
       
        private readonly getAllServiceRequestUseCase: GetAllArchitectUseCase,
      
      ) {}
@Get()
async getServiceRequest() {
  return this.getAllServiceRequestUseCase.execute();
}
}