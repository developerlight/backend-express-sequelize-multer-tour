require('dotenv').config();
const Sequelize = require('sequelize');

const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        host : process.env.DB_HOST,
        dialect : process.env.DIALECT,
        pool : {
            max : parseInt(process.env.POOL_MAX),
            min : parseInt(process.env.POOL_MIN),
            acquire : parseInt(process.env.POOL_ACQUIRE),
            idle : parseInt(process.env.POOL_IDLE)
        }
    }
);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user = require('./userModel')(sequelize, Sequelize);
db.role = require('./roleModel')(sequelize, Sequelize);
db.packages = require('./packagesModel')(sequelize, Sequelize);
db.services = require('./servicesModel')(sequelize, Sequelize);
db.gallery = require('./galleryModel')(sequelize, Sequelize);
db.review = require('./reviewModel')(sequelize, Sequelize);
db.booking = require('./bookingModel')(sequelize, Sequelize);
db.contact = require('./contactModel')(sequelize, Sequelize);

db.role.belongsToMany(db.user, {
    through : 'user_roles'
});

db.user.belongsToMany(db.role, {
    through : 'user_roles'
});

db.ROLES = ['user', 'admin'];

module.exports = db;