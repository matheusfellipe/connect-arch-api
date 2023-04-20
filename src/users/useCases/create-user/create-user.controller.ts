/* eslint-disable prettier/prettier */
import { Body, Controller, Post } from '@nestjs/common/decorators';
import { CreateUserDTO } from '../../dto/create-user.dto';
import { CreateUserUseCase } from './create-user.usecase';
import { Public } from 'src/auth/decorators/public.decorator';
@Controller('users')
export class CreateUserController {
  constructor(private createUserUseCase: CreateUserUseCase) {}

  @Post()
  @Public()
  async createUser(@Body() userData: CreateUserDTO) {
    const output = await this.createUserUseCase.execute(userData);
    return output;
  }
}
