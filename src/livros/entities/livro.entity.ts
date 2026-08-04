import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { AvaliacaoLivro, StatusLivro } from "../dto/create-livro.dto";

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