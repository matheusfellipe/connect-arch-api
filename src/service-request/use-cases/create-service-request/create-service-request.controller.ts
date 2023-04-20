/* eslint-disable prettier/prettier */
import { Body, Controller, Post } from '@nestjs/common/decorators';
import { CreateServiceRequestUseCase } from './create-service-request.usecase';
import { CreateServiceRequestDTO } from 'src/service-request/dto/create-service-request.dto';

@Controller('service-request')
export class CreateServiceRequestController {
    constructor(private createServiceRequestUseCase: CreateServiceRequestUseCase){

    }

    @Post()
    async createArchitect(@Body() serviceRequestData:CreateServiceRequestDTO){
        const output = await this.createServiceRequestUseCase.execute(serviceRequestData);
        return output;
    }
}