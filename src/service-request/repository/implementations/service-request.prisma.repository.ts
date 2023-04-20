/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { prismaClient } from '../../../@shared/providers/prisma-config.provider';
import { ServiceRequest } from '@prisma/client';
import { CreateServiceRequestDTO } from 'src/service-request/dto/create-service-request.dto';
import { UpdateServiceRequestDTO } from 'src/service-request/dto/update-service-request.dto';

@Injectable()
export class ServiceRequestPrismaRepository {
  
  async findAll(): Promise<ServiceRequest[]|undefined> {
     const serviceRequest = await prismaClient.serviceRequest.findMany({});
     if(!serviceRequest) return undefined;
     return serviceRequest
  }

  async findByStatusAndUserId(status: string,userId:string): Promise<ServiceRequest[]> {
     const serviceRequest = prismaClient.serviceRequest.findMany({
      where: { status:status,userId },
    });

    return serviceRequest;
  }

  async findById(id: string): Promise<ServiceRequest> {
    const architect = prismaClient.serviceRequest.findUnique({
     where: { id },
   });

   return architect || undefined;
 }

  async create(serviceRequest:CreateServiceRequestDTO): Promise<ServiceRequest> {
    const {customerId,architectId,...rest} = serviceRequest
    const serviceRequestCreated = prismaClient.serviceRequest.create({ 
        data:{
    ...rest,
    architect:{
        connect:{
            id:architectId
        }
    },
   cliente:{
    connect:{
        id:customerId
    }
   }

        }
     });
     return serviceRequestCreated;
  }

  async update(
    id: string,
    updateServiceRequestDTO: UpdateServiceRequestDTO,
  ): Promise<ServiceRequest> {
    const { userId, architectId, ...rest } = updateServiceRequestDTO;
    const serviceRequest = await prismaClient.serviceRequest.update({
      where: { id },
      data: {
        ...rest,
        architect: { connect: { id: architectId } },
        cliente: { connect: { id: userId } },
      },
      include: { architect: true, cliente: true },
    });
    return serviceRequest;
  }

  async delete(id: string): Promise<ServiceRequest> {
    const serviceRequest = await prismaClient.serviceRequest.delete({
      where: { id },
      include: { architect: true, cliente: true },
    });
    return serviceRequest;
  }
}