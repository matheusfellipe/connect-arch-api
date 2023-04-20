/* eslint-disable prettier/prettier */
import { CreateArchitectDTO } from "../../dto/create-architect.dto";
import { ConflictException,Injectable,Logger } from "@nestjs/common";
import { Architect } from "@prisma/client";
import { ArchitectPrismaRepository } from "../../repository/implementations/architect.prisma.repository";

@Injectable()
export class CreateArchitectUseCase {

    private readonly logger: Logger = new Logger(CreateArchitectUseCase.name);

    constructor(private architectRepository:ArchitectPrismaRepository){}

    async execute(input:CreateArchitectDTO):Promise<Architect>{
        const {registry} = input;
        const existArchitect = await this.architectRepository.findByRegistry(registry);
        if(existArchitect){
            const error = new ConflictException('Architect already exists');
      this.logger.log(error.message);
      throw error;
        }
        const architect = await this.architectRepository.create(input);
        this.logger.log(`Architect ${architect.registry} created`);
        return architect
    }
}