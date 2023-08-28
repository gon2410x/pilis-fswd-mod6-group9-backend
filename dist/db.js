"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
const typeorm_1 = require("typeorm");
exports.AppDataSource = new typeorm_1.DataSource({
    type: "mysql",
    host: "localhost",
    port: 4000,
    username: "root",
    password: "mysql",
    database: "recycle-db",
    synchronize: true,
    entities: [],
});
