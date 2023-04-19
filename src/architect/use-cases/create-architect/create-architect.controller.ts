/* eslint-disable prettier/prettier */
import { Body, Controller, Post } from '@nestjs/common/decorators';
import { CreateArchitectUseCase } from './create-architect.usecase';
import { CreateArchitectDTO } from 'src/architect/dto/create-architect.dto';

@Controller('/architect')
export class CreateArchitectController {
    constructor(private createArchitectUseCase: CreateArchitectUseCase){

    }

    @Post()
    async createArchitect(@Body() architectData:CreateArchitectDTO){
        const output = await this.createArchitectUseCase.execute(architectData);
        return output;
    }
}