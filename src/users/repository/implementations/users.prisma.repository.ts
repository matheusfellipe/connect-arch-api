/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import {  User } from '@prisma/client';
import { prismaClient } from '../../../@shared/providers/prisma-config.provider';
import { CreateUserDTO } from '../../dto/create-user.dto';
import { IUserRepository } from '../users.repository';

@Injectable()
export class UsersPrismaRepository implements IUserRepository {
  async findByEmail(email: string): Promise<User> {
    const user = await prismaClient.user.findFirst({
      where: {
        email,
      },
    });
    return user || undefined;
  }

  async findUserByRole(roleId: string): Promise<User[]> {
    const user = await prismaClient.user.findMany({
      where: {
      roleId
      },
    });
    return user || undefined;
  }

  async save(data: CreateUserDTO,password:string): Promise<User> {
    const { roleId, ...rest } = data;
    const createdUser = await prismaClient.user.create({
      data: {
        ...rest,
        password,
     role:{
      connect:{
        id:roleId
      }
     }
      },
    });
    return createdUser;
  }
}
