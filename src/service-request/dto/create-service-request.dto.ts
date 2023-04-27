/* eslint-disable prettier/prettier */
import { IsString, IsNotEmpty, IsEnum, NotEquals, ValidateIf } from 'class-validator';
import { ServiceRequestStatus } from './enum/service-request-status.enum';


export class CreateServiceRequestDTO {
  @IsNotEmpty()
  @IsString()
  description: string;

  
  @IsEnum(ServiceRequestStatus)
  @ValidateIf((object, value) => value !== null)
  status!: ServiceRequestStatus|null;

  @IsString()
  @NotEquals('architectId',{message:'Architect and customer must be different'})
  customerId: string;

  @IsString()
  @NotEquals('customerId',{message:'Architect and customer must be different'})
  architectId : string;

}






export { ServiceRequestStatus };

