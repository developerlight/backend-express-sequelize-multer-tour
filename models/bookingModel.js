
module.exports = (sequelize, Sequelize) => {
    const Booking = sequelize.define('tb_bookings', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        place_name: {
            type: Sequelize.STRING
        },
        guest: {
            type: Sequelize.INTEGER
        },
        arrival: {
            type: Sequelize.DATEONLY
        },
        leave: {
            type: Sequelize.DATEONLY
        }
    });

    return Booking;
};
