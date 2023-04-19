/* eslint-disable prettier/prettier */
import { IsEmail, IsNotEmpty, MinLength, IsString, MaxLength, IsNumber } from 'class-validator';

export class CreateUserDTO {
  @IsNotEmpty({ message: 'O nome não pode ser vazio' })
  name: string;

  @IsEmail(undefined, { message: 'O e-mail informado é inválido' })
  email: string;

  @MinLength(6, { message: 'A senha precisa ter pelo menos 6 caracteres' })
  password: string;

  @MinLength(9, { message: 'O número de telefone precisa ter pelo menos 9 caracteres' })
  phone:string

  @MaxLength(1, { message: 'O sexo precisa ter no máximo um caracter' })
  gender:string

  @IsNumber(undefined, { message: 'Idade precisa ser um número' })
  age:number

  @IsString()
  roleId: string;
}
