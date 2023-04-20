/* eslint-disable prettier/prettier */
import { IsString, IsNotEmpty, IsEnum, NotEquals } from 'class-validator';

export enum ServiceRequestStatus {
  REQUESTED = 'requested',
  ACCEPTED = 'accepted',
  REFUSED = 'refused',
}

export class CreateServiceRequestDTO {
  @IsNotEmpty()
  @IsString()
  description: string;

  @IsNotEmpty()
  @IsEnum(ServiceRequestStatus)
  status: ServiceRequestStatus;

  @IsString()
  @NotEquals('architectId',{message:'Architect and customer must be different'})
  customerId: string;

  @IsString()
  @NotEquals('customerId',{message:'Architect and customer must be different'})
  architectId : string;

}






