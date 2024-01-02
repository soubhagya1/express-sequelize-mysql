// configure mysql database and sequelize
module.exports = {
    HOST: "localhost",
    USER: "root",
    PASSWORD: "password",
    DB: "sequelizemysql",
    dialect: "mysql",
    pool: {
        max: 5,
        min: 0,
        acuire: 30000,
        idle: 10000
    }
};