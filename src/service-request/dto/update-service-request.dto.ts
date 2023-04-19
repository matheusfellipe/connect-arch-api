/* eslint-disable prettier/prettier */
import {  IsString, IsEnum } from 'class-validator';
import { ServiceRequestStatus } from './create-service-request.dto';

export class UpdateServiceRequestDTO {
 
  @IsString()
  description: string;

 
  @IsEnum(ServiceRequestStatus)
  status: ServiceRequestStatus;

  @IsString()
  userId: string;

  @IsString()
  architectId : string;
}