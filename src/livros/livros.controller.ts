import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, UsePipes } from '@nestjs/common';
import { LivrosService } from './livros.service';
import { CreateLivroDto } from './dto/create-livro.dto';
import { UpdateLivroDto } from './dto/update-livro.dto';
import { ParsePositiveIntPipe } from './pipes/parse-positive-int.pipe';


@Controller('livros')
@UsePipes(ParsePositiveIntPipe)
export class LivrosController {

    constructor(private readonly livrosService: LivrosService) {}

    @Post()
    create(
        @Body() createLivroDto: CreateLivroDto
    ){
        return this.livrosService.create(createLivroDto)
    }

    @Get()
    findAll(){
        return this.livrosService.findAll()
    }

    @Get(':id')
    findOne(@Param('id') id: number){
        return this.livrosService.findOne(id)
    }

    @Patch(':id')
    update(
        @Param('id') id: number,
        @Body() updateLivroDto: UpdateLivroDto
    ){
        return this.livrosService.update(id, updateLivroDto)
    }

    @Delete(':id')
    remove(@Param('id') id: number){
        return this.livrosService.remove(id)
    }


}
