/* eslint-disable prettier/prettier */
import { IsString } from 'class-validator';

export class GetUserByRoleDTO {
  @IsString() // TODO: IsCPF
  roleId: string;
}
