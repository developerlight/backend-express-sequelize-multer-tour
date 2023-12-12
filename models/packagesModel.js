module.exports = ( sequelize, Sequelize ) => {
    const tb_packages = sequelize.define('tb_packages', {
        id: {
            type : Sequelize.INTEGER,
            primaryKey : true,
            autoIncrement : true
        },
        placeName : {
            type : Sequelize.STRING
        },
        description : {
            type : Sequelize.STRING
        },
        rating : {
            type : Sequelize.DECIMAL
        },
        price : {
            type : Sequelize.INTEGER
        },
        image : {
            type : Sequelize.STRING
        }
    });

    return tb_packages;
};