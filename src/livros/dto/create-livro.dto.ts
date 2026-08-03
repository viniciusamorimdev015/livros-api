import { IsEnum, IsNotEmpty, IsOptional, IsString } from "class-validator";

export enum StatusLivro {
    LIDO = 'Lido',
    NAO_LIDO = 'Não lido',
    LENDO = 'Lendo',
    PAUSADO = 'Pausado',
}

export enum AvaliacaoLivro {
    UM = '1',
    DOIS = '2',
    TRES = '3',
    QUATRO = '4',
    CINCO = '5'
}

export class CreateLivroDto {

    @IsString()
    @IsNotEmpty()
    titulo: string;

    @IsString()
    @IsNotEmpty()
    autor: string;

    @IsString()
    @IsNotEmpty()
    genero: string;

    @IsEnum(StatusLivro)
    @IsNotEmpty()
    status: StatusLivro;

    @IsEnum(AvaliacaoLivro)
    @IsOptional()
    avaliacao?: AvaliacaoLivro;
}