/* eslint-disable prettier/prettier */
import { IsString } from "class-validator";

export class CreateArchitectDTO {
    @IsString()
    registry: string;

    @IsString()
    specialty:string;

    @IsString()
    userId:string;

}