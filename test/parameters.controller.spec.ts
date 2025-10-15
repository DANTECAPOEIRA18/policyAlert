import { Test } from "@nestjs/testing";
import { ParametersController } from "../src/parameters/parameters.controller";
import { ParameterService } from "../src/parameters/parameters.service";


describe('ParametersController', () => {
    it('calls service to create parameter', async () => {
        const mockService = { create: jest.fn().mockResolvedValue({ name: 'param1', values: [] }) };
        const moduleRef = await Test.createTestingModule({
            controllers: [ParametersController],
            providers: [{ provide: ParameterService, useValue: mockService }]
        }).compile();

        const controller = moduleRef.get(ParametersController);
        await controller.create({ name: 'param1', values: [] });
        expect(mockService.create).toHaveBeenCalled();
    });});