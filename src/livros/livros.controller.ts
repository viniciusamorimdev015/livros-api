import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { LivrosService } from './livros.service';


@Controller('livros')
export class LivrosController {

    constructor(private readonly livrosService: LivrosService) {}

    @Post()
    create(
        @Body('titulo') titulo: string,
        @Body('autor') autor: string,
        @Body('genero') genero: string,
    ){
        return this.livrosService.create(titulo, autor, genero)
    }

    @Get()
    findAll(){
        return this.livrosService.findAll()
    }

    @Get(':id')
    findOne(@Param('id') id: string){
        return this.livrosService.findOne(id)
    }

    @Patch(':id')
    update(
        @Param('id') id: string,
        @Body('titulo') titulo: string,
        @Body('autor') autor: string,
        @Body('genero') genero: string,
    ){
        return this.livrosService.update(id, titulo, autor, genero)
    }

    @Delete(':id')
    remove(@Param('id') id: string){
        return this.livrosService.remove(id)
    }


}
