import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    BaseEntity,
    OneToMany,
  } from "typeorm";

  import { Container } from "./Container";
  
  @Entity() // se puede pasar como parametro el nombre de tabla ej: 'usersTable'
  export class Container_type extends BaseEntity {
    @PrimaryGeneratedColumn()
    id_container_type: number; 

    @Column()
    residuo: string;

    @Column()
    color: string;

    @Column()
    description: string;

    @OneToMany( () => Container, ( container ) => container.container_type )
    container: Container[];
  }