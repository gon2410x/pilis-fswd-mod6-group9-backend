import { DataSource } from "typeorm";


export const AppDataSource = new DataSource({
  type: "mysql",
  host: "localhost",
  port: 4000,
  username: "root",
  password: "mysql",
  database: "recycle-db",
  synchronize: true,
  entities: [],
});
