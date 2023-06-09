/* eslint-disable prettier/prettier */
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy, StrategyOptions } from 'passport-jwt';
import { authConfig } from '../config/auth.cofig'; 
import { PayloadToken } from './interfaces/jwt.interfaces';

export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly configService: ConfigService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: authConfig.secret,
      jsonWebTokenOptions: {
        audience: authConfig.audience,
        issuer: authConfig.issuer,
      },
    } as StrategyOptions);
  }

  async validate(payload: PayloadToken) {
    console.log(payload)
    return { userId: payload.sub, userRole: payload.role };
  }
}
