module.exports = ( sequelize, Sequelize ) => {
    const Review = sequelize.define('tb_reviews', {
        id : {
            type : Sequelize.INTEGER,
            primaryKey : true,
            autoIncrement : true
        },
        name : {
            type : Sequelize.STRING
        },
        review : {
            type : Sequelize.STRING
        },
        image : {
            type : Sequelize.BLOB
        },
        rating : {
            type : Sequelize.DECIMAL
        }
    });

    return Review;
};