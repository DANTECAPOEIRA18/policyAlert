import { ConflictException, Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Parameter } from "./entities/parameter.entity";
import { CreateParameterDto } from "./dto/create-parameter.dto";
import { UpdateParameterDto } from "./dto/update-parameter.dto";

export class ParameterService {
    constructor(
        @InjectRepository(Parameter) private readonly repo:
        Repository<Parameter>,
    ){}

    async create(dto: CreateParameterDto): Promise<Parameter> {
        const exists = await this.repo.findOne({where: {name: dto.name}});
        if(exists) throw new ConflictException('Parameter already exist');
        const entity = this.repo.create(dto);
        return this.repo.save(entity);
    }

    findALl(): Promise<Parameter[]> {
        return this.repo.find({order: {name: 'ASC'}});
    }

    async findOneByName(name: string): Promise<Parameter> {
        const entity = await this.repo.findOne({where:{name}});
        if(!entity) throw new NotFoundException('Parameter not found');
        return entity;
    }

    async updateByName(name: string, dto: UpdateParameterDto): Promise<Parameter> {
        const entity = await this.findOneByName(name);
        Object.assign(entity, dto);
        return this.repo.save(entity);
    }

    async removeByName(name: string): Promise<void> {
        const entity = await this.findOneByName(name);
        await this.repo.remove(entity);
    }
}