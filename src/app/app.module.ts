import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LivrosModule } from '../livros/livros.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LivroEntity } from 'src/livros/entities/livro.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '12345',
      database: 'postgres',
      entities: [LivroEntity],
      synchronize: true,
    }),
    LivrosModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
