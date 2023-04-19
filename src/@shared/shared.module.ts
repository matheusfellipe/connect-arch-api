/* eslint-disable prettier/prettier */
import { Global, Module } from "@nestjs/common";
import { EncryptProvider } from "./providers/encrypt.provider";
import { PrismaClient } from "@prisma/client";
import { GenerateHashCodeProvider } from "./providers/generate-hash-code.provider";
import { DateHandlingProvider } from "./providers/date-handling.provider";

@Global()
@Module({
    providers:[
        EncryptProvider,
        PrismaClient,
        GenerateHashCodeProvider,
        DateHandlingProvider
    ],
    exports: [
        EncryptProvider,
        PrismaClient,
        GenerateHashCodeProvider,
        DateHandlingProvider
    ],
    controllers:[]
})
export class SharedModule {}