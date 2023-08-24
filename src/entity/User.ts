import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    BaseEntity,
    JoinColumn,
    OneToOne,
    ManyToOne,
  } from "typeorm";
import { Rol } from "./Rol";

  
  @Entity() // se puede pasar como parametro el nombre de tabla ej: 'usersTable'
  export class User extends BaseEntity {
    @PrimaryGeneratedColumn()
    id_user: number;

    @Column()
    user: string;
    
    @Column()
    email: string;
  
    @Column()
    password: string;

    @ManyToOne( () => Rol, (rol) => rol.user)
    @JoinColumn({name: "id_rol"})
    rol: Rol;
  }
