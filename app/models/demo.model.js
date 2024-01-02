module.exports = (sequelize, Sequelize) => {
    const Demo = sequelize.define("demo", {
        title: {
            type: Sequelize.STRING
        },
        description: {
            type: Sequelize.STRING
        },
        published: {
            type: Sequelize.BOOLEAN
        }
        // id: {
        //     type: Sequelize.INTEGER,
        //     primaryKey: true
        // },
        // name: {
        //     type: Sequelize.STRING
        // }
    });
    return Demo;
}