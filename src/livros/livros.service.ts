import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateLivroDto } from './dto/create-livro.dto';
import { UpdateLivroDto } from './dto/update-livro.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { LivroEntity } from './entities/livro.entity';
import { Repository } from 'typeorm';

@Injectable()
export class LivrosService {

    constructor(
        @InjectRepository(LivroEntity) 
        private readonly livroRepository: Repository<LivroEntity>
    ) {}

    async create(createLivroDto: CreateLivroDto){ 
        const livro = this.livroRepository.create(createLivroDto)
        return await this.livroRepository.save(livro)
    }

    async findAll(){
        return await this.livroRepository.find()
    }

    async findOne(id: number){
        const livro = await this.livroRepository.findOneBy({ id: id })

        if(!livro) {
            throw new NotFoundException(`Livro de ID ${id} não encontrado`)
        }

        return livro 
    }


    async update(id: number, updateLivroDto: UpdateLivroDto){
      const livro = await this.livroRepository.preload({
        id,
        ...updateLivroDto
      })

      if(!livro){
        throw new NotFoundException(`Livro de ID ${id} não encontrado`)
      }

      return await this.livroRepository.save(livro)
    }

    async remove(id: number){
        const livro = await this.findOne(id)

        await this.livroRepository.remove(livro)    

        return { message: `Livro de ID ${id} removido com sucesso` }
    }
}
