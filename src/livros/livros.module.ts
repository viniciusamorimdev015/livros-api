import { Module } from '@nestjs/common';
import { LivrosController } from './livros.controller';
import { LivrosService } from './livros.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LivroEntity } from './entities/livro.entity';

@Module({
  imports: [TypeOrmModule.forFeature([LivroEntity])],
  controllers: [LivrosController],
  providers: [LivrosService]
})
export class LivrosModule {}
