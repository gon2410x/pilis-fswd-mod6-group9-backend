import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    BaseEntity,
    JoinColumn,
    ManyToOne,
    OneToMany,
  } from "typeorm";
import { Department } from "./Department";
import { Container } from "./Container";
import { Organization } from "./Organization";
  
  @Entity() // se puede pasar como parametro el nombre de tabla ej: 'usersTable'
  export class Location extends BaseEntity {
    @PrimaryGeneratedColumn()
    id_location: number; 

    @Column()
    location_name: string;
    
    @OneToMany( () => Container, ( container ) => container.location )
    container: Container[];

      
    @OneToMany( () => Organization, ( organization ) => organization.location )
    organization: Organization[];


    @ManyToOne( () => Department, ( department ) => department.location )
    @JoinColumn({ name: "id_department"})
    department: Department;



  }