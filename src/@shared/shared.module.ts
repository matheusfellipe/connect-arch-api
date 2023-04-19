/* eslint-disable prettier/prettier */
import { Global, Module } from "@nestjs/common";
import { EncryptProvider } from "./providers/encrypt.provider";

@Global()
@Module({
    providers:[
        EncryptProvider,
    ],
    exports: [
        EncryptProvider
    ],
    controllers:[]
})
export class SharedModule {}