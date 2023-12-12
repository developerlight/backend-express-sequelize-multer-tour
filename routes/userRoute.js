const { authJwt } = require("../middlewares");
const controller = require("../controllers/userController");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, Content-Type, Accept"
    );
    next();
  });

  app.get(
    "/api/packages",
    [authJwt.verifyToken, authJwt.isUser],
    controller.packages
  );

  app.get(
    "/api/services",
    [authJwt.verifyToken, authJwt.isUser],
    controller.services
  );

  app.get(
    "/api/gallery",
    [authJwt.verifyToken, authJwt.isUser],
    controller.gallery
  );

  app.get(
    "/api/review",
    [authJwt.verifyToken, authJwt.isUser],
    controller.review
  );

  app.post(
    '/api/booking',
    [authJwt.verifyToken, authJwt.isUser],
    controller.postBooking
  );

  app.get(
    '/api/booking',
    [authJwt.verifyToken, authJwt.isUser],
    controller.getBooking
  )

  app.post(
    '/api/contact',
    [authJwt.verifyToken, authJwt.isUser],
    controller.postContact
  );
};
