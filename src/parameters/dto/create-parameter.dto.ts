import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";
import { IsAllowedValueArray } from "../validators/value-type.validator";

export class CreateParameterDto {
    @ApiProperty({example: 'policyAlert'})
    @IsString()
    @IsNotEmpty()
    name!: string;

    @ApiProperty({
        example: [null, true, false, 80, 'Visible', {extra: 1}, [1,2]],
        type: Array
    })
    @IsAllowedValueArray()
    values!: unknown[]
}