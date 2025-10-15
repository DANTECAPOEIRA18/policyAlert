import { 
    Column, 
    CreateDateColumn, 
    Entity, 
    PrimaryGeneratedColumn, 
    UpdateDateColumn, 
    Index } 
from "typeorm";
 
@Entity('parameters')
export class Parameter {
    @PrimaryGeneratedColumn('uuid')
    id!:string;

    @Index({unique: true})
    @Column({type: 'varchar', length: 150})
    name!: string;

    @Column({type: 'jsonb'})
    values!: unknown[];

    @CreateDateColumn({ type: 'timestamp'})
    createdAt!: Date;

    @UpdateDateColumn({ type: 'timestamp'})
    updatedAt!: Date;
}