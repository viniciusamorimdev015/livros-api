import { IsEnum, IsInt, IsNotEmpty, IsOptional, IsString, Max, MaxLength, Min } from "class-validator";
import { StatusLivro } from "../enums/status-livro.enum";
import { AvaliacaoLivro } from "../enums/avaliacao-livro.enum";

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