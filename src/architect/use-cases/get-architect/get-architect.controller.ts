/* eslint-disable prettier/prettier */
import { Controller,Get } from '@nestjs/common/decorators';
import { GetAllArchitectUseCase } from './get-architect.usecase';


@Controller('/architect')
export class GetAllArchitectController {
    constructor(private getAllArchitectUseCase: GetAllArchitectUseCase){

    }

    @Get()
    async getArchitect(){
        const output = await this.getAllArchitectUseCase.execute();
        return output;
    }
}