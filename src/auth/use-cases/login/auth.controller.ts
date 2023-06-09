/* eslint-disable prettier/prettier */
import { Request, Controller, Post, UseGuards } from '@nestjs/common';
import { Public } from '../../decorators/public.decorator';
import { LocalAuthGuard } from '../../guards/local-auth.guard';
import { GenerateAccessAndRefreshTokenUseCase } from '../generate-token/generate-token-and-refresh.use-case';

@Controller('auth')
export class AuthController {
  constructor(
    private generateAccessAndRefreshTokenUseCase: GenerateAccessAndRefreshTokenUseCase,
  ) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  @Public()
  async signIn(@Request() req) {
  console.log(req.user)
    const { accessToken, refreshToken,payload } =
      await this.generateAccessAndRefreshTokenUseCase.execute(req.user);
    return {
      accessToken,
      refreshToken,
      payload
    };
  }
}
