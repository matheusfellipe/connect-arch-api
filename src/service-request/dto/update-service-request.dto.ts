/* eslint-disable prettier/prettier */
import {  IsString, IsEnum, IsOptional, IsBoolean } from 'class-validator';
import { ServiceRequestStatus } from './create-service-request.dto';

export class UpdateServiceRequestDTO {
 
  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @IsEnum(ServiceRequestStatus)
  status?: ServiceRequestStatus;

  @IsOptional()
  @IsBoolean()
  isDeleted?: boolean;
}