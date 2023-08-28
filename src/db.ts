import { DataSource } from "typeorm";
import { User } from "./entity/User";
import { Rol } from "./entity/Rol";
import { Province } from "./entity/Province";
import { Department } from "./entity/Department";
import { Location } from "./entity/Location";
import { Container_type } from "./entity/Container_type";
import { Organization } from "./entity/Organization";
import { Container } from "./entity/Container";


export const AppDataSource = new DataSource({
  type: "mysql",
  host: "localhost",
  port: 4000,
  username: "root",
  password: "mysql",
  database: "recycle-db",
  synchronize: true,
  entities: [User, Rol, Province, Department, Location, Container_type, Organization, Container],
});
