import { IsEnum, IsInt, IsNotEmpty, IsOptional, IsString, Max, MaxLength, Min } from "class-validator";

export enum StatusLivro {
    LIDO = 'LIDO',
    NAO_LIDO = 'NAO_LIDO',
    LENDO = 'LENDO',
    PAUSADO = 'PAUSADO',
}

export enum AvaliacaoLivro {
    UM = 1,
    DOIS = 2,
    TRES = 3,
    QUATRO = 4,
    CINCO = 5
}

export class CreateLivroDto {

    @IsString()
    @IsNotEmpty()
    @MaxLength(255)
    titulo: string;

    @IsString()
    @IsNotEmpty()
    @MaxLength(100)
    autor: string;

    @IsString()
    @IsNotEmpty()
    @MaxLength(100)
    genero: string;

    @IsEnum(StatusLivro)
    status: StatusLivro;

    @IsInt()
    @Min(1)
    @Max(5)
    @IsOptional()
    avaliacao?: AvaliacaoLivro;
}