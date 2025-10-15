import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { ApiTags, ApiResponse } from "@nestjs/swagger";
import { ParameterService } from "./parameters.service";
import { CreateParameterDto } from "./dto/create-parameter.dto";
import { UpdateParameterDto } from "./dto/update-parameter.dto";

@ApiTags('Parameters')
@Controller('parameters')
export class ParametersController {
    constructor(private readonly service : ParameterService) {}

    @Post()
    @ApiResponse({status: 201, description: 'created'})
    create(@Body() dto: CreateParameterDto){
        return this.service.create(dto);
    }

    @Get(':name')
    findOne(@Param('name') name: string){
        return this.service.findOneByName(name);
    }

    @Get()
    findALl() {
        return this.service.findALl();
    }
    
    @Patch(':name')
    update(@Param('name') name: string, @Body() dto: UpdateParameterDto){
        return this.service.updateByName(name, dto);
    }

    @Delete(':name')
    remove(@Param('name') name: string){
        return this.service.removeByName(name);
    }
}