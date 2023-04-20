/* eslint-disable prettier/prettier */
import { IsString } from 'class-validator';

export class GetServiceRequestByStatusDTO {
  @IsString() // TODO: IsCPF
  status: string;

  @IsString() // TODO: IsCPF
  architectId: string;
}
