/* eslint-disable prettier/prettier */
import { UsersPrismaRepository } from '../../repository/implementations/users.prisma.repository';
import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import {  User } from '@prisma/client';
import { ROLE } from 'src/@shared/enum/role.enum';
import { GetUserByRoleDTO } from 'src/users/dto/get-user-by-role.dto';


@Injectable()
export class GetUserByRoleUseCase {
  private readonly logger: Logger = new Logger(GetUserByRoleUseCase.name);

  constructor(private readonly usersRepository: UsersPrismaRepository) {}

  async execute(input: GetUserByRoleDTO): Promise<User[]> {
    if(input.roleId===ROLE.CUSTOMER){
      return
    }
    const user = await this.usersRepository.findUserByRole(ROLE.ARCHITECT);
    if (!user) {
      const error = new NotFoundException('Role');
      this.logger.error(error.message);
      throw error;
    }
    this.logger.log('User found successfully');
    return user;
  }
}
