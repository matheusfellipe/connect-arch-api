/* eslint-disable prettier/prettier */


import { GetUserByRoleUseCase } from "./get-user-by-role.usecase";

import { Controller, Get, Request, UseGuards } from "@nestjs/common";
import { JwtAuthGuard } from "src/auth/guards/jwt-auth.guard";


@Controller('users')
export class GetUsersByRoleController {
    constructor(
       
        private readonly getUserByRoleUseCase: GetUserByRoleUseCase,
      
      ) {}
      @UseGuards(JwtAuthGuard)
@Get()
async getUserByRoleRequest(@Request() req) {
  const roleId =req.user.userRole;
  console.log(req.user)
  return this.getUserByRoleUseCase.execute(roleId);
}
}