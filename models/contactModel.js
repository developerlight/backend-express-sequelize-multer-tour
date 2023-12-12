module.exports = ( sequelize, Sequelize ) => {
    const Contact = sequelize.define('tb_contacts', {
        id : {
            type : Sequelize.INTEGER,
            primaryKey : true,
            autoIncrement : true
        },
        name : {
            type : Sequelize.STRING
        },
        email : {
            type : Sequelize.STRING
        },
        number : {
            type : Sequelize.STRING
        },
        subject : {
            type : Sequelize.STRING
        },
        message : {
            type : Sequelize.STRING
        }
    });

    return Contact;
};