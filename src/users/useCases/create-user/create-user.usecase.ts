/* eslint-disable prettier/prettier */
import { ConflictException, Injectable, Logger } from '@nestjs/common';
import { CreateUserDTO } from '../../dto/create-user.dto';
import { UsersPrismaRepository } from '../../repository/implementations/users.prisma.repository';
import { EncryptProvider } from 'src/@shared/providers';
import { User } from '@prisma/client';

@Injectable()
export class CreateUserUseCase {
  constructor(private readonly userRepository: UsersPrismaRepository,private readonly encryptProvider:EncryptProvider) {}
  private readonly logger: Logger = new Logger(CreateUserUseCase.name);
  async execute(input: CreateUserDTO):Promise<User> {

    const { email } = input;
    const existUser = await this.userRepository.findByEmail(email);
    if (existUser) {
      const error = new ConflictException('User already exists');
      this.logger.log(error.message);
      throw error;
    }
    const password = await this.encryptProvider.encrypt(input.password, 13);
    const userCreated = await this.userRepository.save(input,password);
    this.logger.log(`User ${userCreated.name} created`);
    return userCreated;
  }
}
