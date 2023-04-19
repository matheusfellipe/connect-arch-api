/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { prismaClient } from "src/@shared/providers";

import { Architect } from "@prisma/client";
import { CreateArchitectDTO } from "src/architect/dto/architect.dto";

@Injectable()
export class ArchitectPrismaRepository {
    async create(architect:CreateArchitectDTO):Promise<Architect>{
        const {userId, ...rest} = architect;
        const createArchitect = await prismaClient.architect.create({
            data:{
                ...rest,
                user:{
                    connect:{
                        id:userId,
                    }
                }
            
            }

            
        })
        return createArchitect
    }

    async getAllArchitects(): Promise<Architect[] | undefined> {
        const architect = await prismaClient.architect.findMany({});
        if (!architect) return undefined;
        return architect;
      }
    
}