/* eslint-disable prettier/prettier */
import { IsString } from 'class-validator';

export class GetRoleByidDTO {
  @IsString() // TODO: IsCPF
  id: string;
}
