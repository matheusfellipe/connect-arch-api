/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { prismaClient } from '../../../@shared/providers/prisma-config.provider';
import { ServiceRequest } from '@prisma/client';
import { CreateServiceRequestDTO, ServiceRequestStatus } from 'src/service-request/dto/create-service-request.dto';
import { UpdateServiceRequestDTO } from 'src/service-request/dto/update-service-request.dto';

@Injectable()
export class ServiceRequestPrismaRepository {
  
  async findAll(userId:string): Promise<ServiceRequest[]> {
     const serviceRequest = await prismaClient.serviceRequest.findMany({  where: {
     
          OR: [
            { customer_id: userId },
            { architect_id: userId }
          ]
        },
        include:{
          architect:{
            select:{
              name:true
            }
          },
          customer:{
            select:{
              name:true
            }
          },
        }
    }
    );
     if(!serviceRequest) return undefined;
     return serviceRequest
  }

  async findByStatusAndUserId(status: ServiceRequestStatus,userId:string): Promise<ServiceRequest[]> {
     const serviceRequest = prismaClient.serviceRequest.findMany({
      where: {
        AND: [
          {
           
            status
          },
          {
            OR: [
              { customer_id: userId },
              { architect_id: userId }
            ]
          }
        ]
      },
      include:{
        architect:{
          select:{
            name:true
          }
        },
        customer:{
          select:{
            name:true
          }
        },
      }
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
   customer:{
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
    const { customerId, architectId, ...rest } = updateServiceRequestDTO;
    const serviceRequest = await prismaClient.serviceRequest.update({
      where: { id },
      data: {
        ...rest,
        architect: { connect: { id: architectId } },
       customer: { connect: { id: customerId } },
      },
      include: { architect: true, customer: true },
    });
    return serviceRequest;
  }

  async delete(id: string): Promise<ServiceRequest> {
    const serviceRequest = await prismaClient.serviceRequest.update({
      where: { id },
      data: {
       isDeleted:true
      },
      
    });
    return serviceRequest;
  }
}