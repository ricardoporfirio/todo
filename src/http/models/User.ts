import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("users")
class User{

    @PrimaryGeneratedColumn('increment')
    id:number;

    @Column()
    name:string;

    @Column()
    email:string;

    @Column()
    password:string;

    @CreateDateColumn()
    created_at:Date;

    @CreateDateColumn()
    updated_at:Date;

}

export {User}