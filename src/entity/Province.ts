import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    BaseEntity,
    OneToMany,
    JoinColumn,
  } from "typeorm";
import { Container } from "./Container";
import { Department } from "./Department";
  
  @Entity() // se puede pasar como parametro el nombre de tabla ej: 'usersTable'
  export class Province extends BaseEntity {
    @PrimaryGeneratedColumn()
    id_province: number;

    @Column()
    province_name: string;

    // @OneToMany( () => Container, ( container ) => container.location )
    // container: Container[];
    
    @OneToMany( () => Department, ( department ) => department.province )
    department: Department[];
  }