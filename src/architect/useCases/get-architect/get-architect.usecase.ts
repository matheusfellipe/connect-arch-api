/* eslint-disable prettier/prettier */

import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { ArchitectPrismaRepository } from 'src/architect/repository/implementations/architect.prisma.repository';


@Injectable()
export class GetAllArchitectUseCase {
  private readonly logger: Logger = new Logger(GetAllArchitectUseCase.name);

  constructor(private readonly architectRepository: ArchitectPrismaRepository) {}

  async execute() {
   const architect = await this.architectRepository.getAllArchitects();
   if(!architect){
    const error = new NotFoundException("No architects are found");
    this.logger.error(error.message);
    throw error;
   }
   return architect
  }
}
