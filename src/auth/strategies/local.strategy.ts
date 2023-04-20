/* eslint-disable prettier/prettier */
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy, IStrategyOptionsWithRequest } from 'passport-local';
import { AuthUseCase } from '../use-cases/login/auth.use-case';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly authUseCase: AuthUseCase) {
    super({
      usernameField: 'email',
    } as IStrategyOptionsWithRequest);
  }

  async validate(email: string, password: string) {
    const user = await this.authUseCase.validateUser(email, password);
    if (!user)
      throw new UnauthorizedException('Email or password is incorrect');
    return user;
  }
}
