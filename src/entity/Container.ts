import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    BaseEntity,
    ManyToOne,
    JoinColumn,
  } from "typeorm";
import { Organization } from "./Organization";
import { Container_type } from "./Container_type";
import { Location } from "./Location";
  
  @Entity() // se puede pasar como parametro el nombre de tabla ej: 'usersTable'
  export class Container extends BaseEntity {
    @PrimaryGeneratedColumn()
    id_container: number; 

    @Column()
    longitude: string;

    @Column()
    latitude: string;

    @Column()
    street_description: string;

    @ManyToOne( () => Location, ( location ) => location.container )
    @JoinColumn( { name: "id_location" } )
    location: Location;

    @ManyToOne( () => Organization, ( organization ) => organization.container )
    @JoinColumn({ name: "organization_name" })
    organization: Organization;

    @ManyToOne( () => Container_type, ( container_type ) => container_type.container )
    @JoinColumn({ name: "id_container_type"})
    container_type: Container_type;
  }