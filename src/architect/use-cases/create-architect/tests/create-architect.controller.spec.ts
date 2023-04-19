/* eslint-disable prettier/prettier */
import { Test, TestingModule } from '@nestjs/testing';
import { CreateArchitectController } from '../create-architect.controller';

describe('UsersController', () => {
  let controller: CreateArchitectController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CreateArchitectController],
    }).compile();

    controller = module.get<CreateArchitectController>(CreateArchitectController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
