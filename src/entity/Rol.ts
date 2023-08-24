import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    BaseEntity,
    OneToMany,
  } from "typeorm";
import { User } from "./User";

  
  @Entity() // se puede pasar como parametro el nombre de tabla ej: 'usersTable'
  export class Rol extends BaseEntity {
    @PrimaryGeneratedColumn()
    id_rol: number;

    @Column()
    rol: string;

    @OneToMany( () => User, ( user ) => user.rol )
    user: User[];
  }