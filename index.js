const express = require("express");
const cors = require('cors');
const cookieSession = require('cookie-session');
const path = require('path');
const db = require('./models');
const Role = db.role;
const app = express();
const authRoutes = require("./routes/authRoute");
const userRoutes = require("./routes/userRoute");
const testRoutes = require('./routes/testRoute');
const adminRoutes = require('./routes/adminRoute');

app.use(cors());

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
app.use('/uploads', express.static(path.join(__dirname, 'public/uploads')));
app.use(
  cookieSession({
    name: "waktu-session", // penamaan cookie sesion
    keys: ["karepku"], // should use as secret environment variable
    httpOnly: true,
    sameSite: 'strict' // mencegah serangan csrf
  })
);

// database
// mensinkronkan model yang telah di definisikan dengan database
db.sequelize.sync();
// force: true will drop the table if it already exists
// db.sequelize.sync({force: true}).then(() => {
//   console.log('Drop and Resync Database with { force: true }');
//   initial();
// });


// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to myApplication." });
});


// routes
authRoutes(app);
userRoutes(app);
testRoutes(app);
adminRoutes(app);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

function initial() {
  Role.create({
    id: 1,
    name: "user",
  });

  Role.create({
    id: 2,
    name: "admin",
  });
}