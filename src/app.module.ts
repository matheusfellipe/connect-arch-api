/* eslint-disable prettier/prettier */
import {
    Module,
  } from '@nestjs/common';
 
  import { ConfigModule } from './@shared/config/config.module';
  import { SharedModule } from './@shared/shared.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { ArchitectModule } from './architect/architect.module';
import { ServiceRequestModule } from './service-request/service-request.module';
  
  @Module({
    imports: [ConfigModule.forRoot(), UsersModule, AuthModule, SharedModule,ArchitectModule,ServiceRequestModule],
    controllers: [],
  })
  export class AppModule {
   
  }
  