import { IsString, IsNotEmpty, IsNumber, IsArray, IsOptional } from 'class-validator';
export class CreateShoeDto {
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
    ced: string
    
    //Campo agregado Reciente en clase de Practica
    
    @IsString({each: true})
    @IsArray()
    @IsOptional()
    images?: string[];
}

