/* eslint-disable prettier/prettier */
import {  IsBoolean } from 'class-validator';


export class DeleteServiceRequestDTO {
 
  @IsBoolean()
  isDeleted?: boolean;

 
  
}