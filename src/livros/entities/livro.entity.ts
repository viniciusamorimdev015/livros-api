import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { StatusLivro } from "../enums/status-livro.enum";
import { AvaliacaoLivro } from "../enums/avaliacao-livro.enum";

@Entity('livros')   
export class LivroEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 255 })
    titulo: string;

    @Column({ length: 100 })
    autor: string;

    @Column({ length: 100 })
    genero: string;

    @Column({
        type: 'enum',
        enum: StatusLivro,
        default: StatusLivro.NAO_LIDO
    })
    status: StatusLivro;

    @Column({
        type: 'smallint',
        nullable: true

    })
    avaliacao: AvaliacaoLivro;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}