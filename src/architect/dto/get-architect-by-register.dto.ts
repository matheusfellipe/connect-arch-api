/* eslint-disable prettier/prettier */
import { IsString } from 'class-validator';

export class GetArchitectByRegisterDTO {
  @IsString() // TODO: IsCPF
  registry: string;
}
