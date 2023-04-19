/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { SharedModule } from './@shared/shared.module';

@Module({
  imports: [ConfigModule.forRoot(),UsersModule,AuthModule,SharedModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
