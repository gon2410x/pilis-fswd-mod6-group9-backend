import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    BaseEntity,
    JoinColumn,
    ManyToOne,
    OneToMany,
  } from "typeorm";
import { Province } from "./Province"
import { Location} from "./Location";
  
  @Entity() // se puede pasar como parametro el nombre de tabla ej: 'usersTable'
  export class Department extends BaseEntity {
    @PrimaryGeneratedColumn()
    id_department: number;

    @Column()
    department_name: string;

    @ManyToOne( () => Province, ( province ) => province.department )
    @JoinColumn({ name: "id_province"})
    province: Province;
    
    @OneToMany( () => Location, ( location ) => location.department )
    location: Location[];
  }