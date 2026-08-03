import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateLivroDto } from './dto/create-livro.dto';
import { UpdateLivroDto } from './dto/update-livro.dto';

@Injectable()
export class LivrosService {

    private livros = [
        {
            id: 1,
            titulo: 'livro 1',
            autor: 'algume',
            genero: 'Terror',
            status: 'Lido'
        }
    ]

    create(createLivroDto: CreateLivroDto){
        const livro = {
            id: this.livros.length + 1,
            titulo: createLivroDto.titulo,
            autor: createLivroDto.autor,
            genero: createLivroDto.genero,
            status: createLivroDto.status
        }

        this.livros.push(livro)
        return livro
    }

    findAll(){
        return this.livros
    }

    findOne(id: string){
        const livro = this.livros.find(l => l.id === +id)

        if(!livro){
            throw new BadRequestException(`Livro de ID ${id} não encontrado`)
        }

        return livro
    }


    update(id: string, updateLivroDto: UpdateLivroDto){
       const livro = this.livros.find(l => l.id == +id)

        if(!livro){
            throw new BadRequestException(`Livro de ID ${id} não encontrado`)
        }

        if(updateLivroDto.titulo)  livro.titulo = updateLivroDto.titulo
        if(updateLivroDto.autor)  livro.autor = updateLivroDto.autor
        if(updateLivroDto.genero)  livro.genero = updateLivroDto.genero
        if(updateLivroDto.status)  livro.status = updateLivroDto.status

        return livro
    }

    remove(id: string){
        const indexLivro = this.livros.findIndex(l => l.id === +id)

        if(indexLivro === -1){
            throw new BadRequestException(`Livro com ID ${id} não encontrado`)
        }

        this.livros.splice(indexLivro, 1)

        return { message: `Livro de ID ${id} removido com sucesso` }
    }
}
