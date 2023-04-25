/* eslint-disable prettier/prettier */
import { NestFactory } from '@nestjs/core';
import { SwaggerModule,DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import {json,urlencoded} from 'body-parser';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    allowedHeaders: ['content-type'],
    origin: 'http://localhost:3000',
    credentials: true,
  });
  app.useGlobalPipes(new ValidationPipe({
    forbidUnknownValues:false,
  }))
  
  const config = new DocumentBuilder()
  .setTitle('Connect Arch App')
  .setDescription('The API description')
  .setVersion('1.0')
  .addTag('architect')
  .build();
const document = SwaggerModule.createDocument(app, config);
SwaggerModule.setup('api', app, document);

app.use(json({limit:'50mb'}));
app.use(urlencoded({limit:'50mb',extended:true}));
  await app.listen(3001);
}
bootstrap();
