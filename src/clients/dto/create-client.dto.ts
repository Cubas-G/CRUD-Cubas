import { IsString, IsNotEmpty, IsNumber } from 'class-validator';
export class CreateClientDto {
    @IsString()
    @IsNotEmpty()
    name: string

    @IsString()
    @IsNotEmpty()
    lastName: string

    @IsString()
    @IsNotEmpty()
    directions: string

    @IsNumber()
    @IsNotEmpty()
    number: number

    @IsString()
    @IsNotEmpty()
    dni: string
}
