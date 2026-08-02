import { BadRequestException, Injectable } from '@nestjs/common';

@Injectable()
export class LivrosService {

    private livros = [
        {
            id: 1,
            titulo: 'livro 1',
            autor: 'algume',
            genero: 'Terror'
        }
    ]

    create(titulo: string, autor: string, genero: string){
        const livro = {
            id: this.livros.length + 1,
            titulo,
            autor,
            genero
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


    update(id: string, titulo: string, autor: string, genero: string){
       const livro = this.livros.find(l => l.id == +id)

        if(!livro){
            throw new BadRequestException(`Livro de ID ${id} não encontrado`)
        }

        if(titulo)  livro.titulo = titulo
        if(autor)  livro.autor = autor
        if(genero)  livro.genero = genero

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
