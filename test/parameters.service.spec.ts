import { Test } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ParameterService } from '../src/parameters/parameters.service';
import { Parameter } from '../src/parameters/entities/parameter.entity';

describe('ParametersService', () => {
  let service: ParameterService;
  let repository: Repository<Parameter>;
  
  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        ParameterService,
        {
          provide: getRepositoryToken(Parameter),
          useClass: Repository,
        },
      ],
    }).compile();

    service = moduleRef.get(ParameterService);
    repository = moduleRef.get<Repository<Parameter>>(getRepositoryToken(Parameter));
  });

  it('creates parameter', async () => {
    const dto = { name: 'param1', value: 'value1' };
    jest.spyOn(repository, 'findOne').mockResolvedValueOnce(null) as any;
    jest.spyOn(repository, 'create').mockReturnValueOnce({name: 'policyAlert', values: [1]} as any);
    jest.spyOn(repository, 'save').mockResolvedValueOnce({name: 'policyAlert', values: [1]} as any);

    const result = await service.create({name: 'policyAlert', values: [1]});
    expect(result.name).toBe('policyAlert');
  });
});