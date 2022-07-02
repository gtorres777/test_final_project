const { Sequelize, Model, DataTypes } = require("sequelize");

const connect = () => {

    const userName = process.env.PGUSER;
    const hostName = process.env.PGHOST;
    const database = process.env.PGDATABASE;
    const password = process.env.PGPASSWORD;

    const sequelize = new Sequelize(database, userName, password, {
        host: hostName,
        dialect: 'postgres',
        pool: {
            max: 10,
            min: 0,
            acquire: 20000,
            idle: 5000
        }
    });


    const db = {};
    db.Sequelize = Sequelize;
    db.sequelize = sequelize;
    db.tasks = require("../model/task.model")(sequelize, DataTypes, Model);

    return db;

}

module.exports = {
    connect
}
