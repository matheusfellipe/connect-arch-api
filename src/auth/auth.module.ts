/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { APP_GUARD } from '@nestjs/core';

import { UsersModule } from '../users/users.module';
import { authConfig } from './config/auth.cofig';
import { GenerateAccessAndRefreshTokenUseCase } from './use-cases/generate-token/generate-token-and-refresh.use-case';
import { AuthUseCase } from './use-cases/login/auth.use-case';
import { PassportModule } from '@nestjs/passport';
import { AuthController } from './use-cases/login/auth.controller';
import { RefreshTokenUseCase } from './use-cases/refresh-token/refresh-token.use-case';
import { RefreshTokenRepository } from './repositories/refresh-token.repository';
import { LocalStrategy } from './strategies/local.strategy';
import { JwtStrategy } from './strategies/jwt.strategy';
import { JwtRefreshTokenStrategy } from './strategies/jwt-refresh-token.strategy';
import { JwtAuthGuard } from './guards/jwt-auth.guard';

@Module({
  controllers:[AuthController],
  imports: [
    UsersModule,
    PassportModule,
    JwtModule.register({
      secret: authConfig.secret,
      signOptions: {
        expiresIn: authConfig.expiresIn,
        audience: authConfig.audience,
        issuer: authConfig.issuer,
        jwtid: authConfig.jwtId,
      },
    }),
  ],
  providers: [AuthUseCase, GenerateAccessAndRefreshTokenUseCase,RefreshTokenUseCase,RefreshTokenRepository,LocalStrategy,JwtStrategy,JwtRefreshTokenStrategy,{provide: APP_GUARD,useClass:JwtAuthGuard}],
})
export class AuthModule {}
