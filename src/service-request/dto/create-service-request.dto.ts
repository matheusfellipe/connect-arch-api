/* eslint-disable prettier/prettier */
import { IsString, IsNotEmpty, IsEnum } from 'class-validator';

export enum ServiceRequestStatus {
  REQUESTED = 'requested',
  ACCEPTED = 'accepted',
  REFUSED = 'refused',
}

export class CreateServiceRequestDto {
  @IsNotEmpty()
  @IsString()
  description: string;

  @IsNotEmpty()
  @IsEnum(ServiceRequestStatus)
  status: ServiceRequestStatus;

  @IsString()
  userId: string;

  @IsString()
  architectId : string;

}






