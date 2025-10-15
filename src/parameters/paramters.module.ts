import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ParametersController } from "./parameters.controller";
import { ParameterService } from "./parameters.service";
import { Parameter } from "./entities/parameter.entity";

@Module({
    imports: [TypeOrmModule.forFeature([Parameter])],
    controllers: [ParametersController],
    providers: [ParameterService]
})
export class ParametersModule {}