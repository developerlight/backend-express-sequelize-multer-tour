module.exports = ( sequelize, Sequelize ) => {
    const Gallery = sequelize.define('tb_galleries', {
        id : {
            type : Sequelize.INTEGER,
            primaryKey : true,
            autoIncrement : true
        },
        place_name : {
            type : Sequelize.STRING
        },
        description : {
            type : Sequelize.STRING
        },
        image : {
            type : Sequelize.BLOB
        }
    });

    return Gallery;
};