module.exports = ( sequelize, Sequelize ) => {
    const Services = sequelize.define('tb_services', {
        id : {
            type : Sequelize.INTEGER,
            primaryKey : true,
            autoIncrement : true
        },
        service : {
            type : Sequelize.STRING
        },
        description : {
            type : Sequelize.STRING
        }
    });

    return Services;
};