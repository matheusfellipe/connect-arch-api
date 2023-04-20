/* eslint-disable prettier/prettier */
import { IsEnum, IsNotEmpty, IsString } from 'class-validator';
import { ServiceRequestStatus } from './create-service-request.dto';

export class GetServiceRequestByStatusDTO {
  @IsNotEmpty()
  @IsEnum(ServiceRequestStatus)
  status: ServiceRequestStatus;

  @IsString() // TODO: IsCPF
  architectId: string;
}
