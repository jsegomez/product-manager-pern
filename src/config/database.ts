import { Sequelize } from "sequelize-typescript";

const database = new Sequelize(process.env.DATABASE_URL!,{
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    logging: false
});

export default database;