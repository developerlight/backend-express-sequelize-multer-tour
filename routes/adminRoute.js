const { authJwt } = require('../middlewares');
const { multer } = require('../middlewares');
const controller = require('../controllers/adminController');

module.exports = function (app) {
    app.use((req, res, next) => {
        res.header(
            "Access-Control-Allow-Headers",
            "Origin, Content-Type, Accept"
        );
        next();
    });

    // packages
    app.get(
        "/api/admin/packages",
        // [authJwt.verifyToken, authJwt.isAdmin],
        controller.getPackages
    );

    app.post(
        '/api/admin/packages',
        // [authJwt.verifyToken, authJwt.isAdmin],
        multer.single('image'),
        controller.postPackages
    )
    
}