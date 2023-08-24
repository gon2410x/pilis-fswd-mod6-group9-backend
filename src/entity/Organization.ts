import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    BaseEntity,
    JoinColumn,
    OneToMany,
    ManyToOne,
    PrimaryColumn,
  } from "typeorm";
import { Container } from "./Container";
import { Location } from "./Location";
  
  @Entity() // se puede pasar como parametro el nombre de tabla ej: 'usersTable'
  export class Organization extends BaseEntity {
    @PrimaryColumn()
    organization_name: string; 
    
    @Column()
    phone: string;
    
    @Column()
    email: string;
    
    @OneToMany( () => Container, ( container ) => container.organization )
    container: Container[];


    @ManyToOne( () => Location, ( location ) => location.organization )
    @JoinColumn({ name: "id_location"})
    location: Location;

    @Column()
    organization_type: string;
  }