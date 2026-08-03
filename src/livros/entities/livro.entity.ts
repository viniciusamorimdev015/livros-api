import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { AvaliacaoLivro, StatusLivro } from "../dto/create-livro.dto";

@Entity('livros')   
export class LivroEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    titulo: string;

    @Column()
    autor: string;

    @Column()
    genero: string;

    @Column({
        type: 'enum',
        enum: StatusLivro,
        default: StatusLivro.NAO_LIDO
    })
    status: StatusLivro;

    @Column({
        type: 'enum',
        enum: AvaliacaoLivro,
        nullable: true
    })
    avaliacao: AvaliacaoLivro;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}