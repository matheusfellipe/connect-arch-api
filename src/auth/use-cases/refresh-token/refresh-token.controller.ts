/* eslint-disable prettier/prettier */
import { Request, Controller, UseGuards, Body, Put } from '@nestjs/common';
import { Public } from '../../decorators/public.decorator';
import { RefreshTokenDTO } from 'src/auth/dto/refresh-token.dto';
import { JwtRefreshGuard } from 'src/auth/guards/jwt-refresh-token.guard';
import { RefreshTokenUseCase } from './refresh-token.use-case';

@Controller('auth')
export class RefreshTokenController {
  constructor(
    private refreshTokenUseCase: RefreshTokenUseCase,
  ) {}

  @Put('refresh-token')
  @UseGuards(JwtRefreshGuard)
  @Public()
  async update(@Body() requestBody: RefreshTokenDTO, @Request() req) {
    return this.refreshTokenUseCase.execute(requestBody, req.user);
  }
}
