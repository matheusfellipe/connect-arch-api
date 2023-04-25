/* eslint-disable prettier/prettier */
import { UsersPrismaRepository } from '../../repository/implementations/users.prisma.repository';
import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { Role } from '@prisma/client';
import { GetRoleByidDTO } from 'src/users/dto/get-role-by-id.dto';


@Injectable()
export class GetRoleByIdUseCase {
  private readonly logger: Logger = new Logger(GetRoleByIdUseCase.name);

  constructor(private readonly usersRepository: UsersPrismaRepository) {}

  async execute(input: GetRoleByidDTO): Promise<Role> {
    const role = await this.usersRepository.findByRole(input.id);
    if (!role) {
      const error = new NotFoundException('Role');
      this.logger.error(error.message);
      throw error;
    }
    this.logger.log('User found successfully');
    return role;
  }
}
