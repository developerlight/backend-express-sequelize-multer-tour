# Welcome to MyApplication

MyApplication is a simple Express.js application with user authentication and authorization features. This app is designed to be a starting point for building more complex web applications.

## Features

- User authentication and authorization
- Secure session handling with cookie-session
- RESTful API for user management
- Role-based access control (user, admin)
- File uploads and static file serving

## Technologies Used

- **Express.js**: A fast, unopinionated, minimalist web framework for Node.js.
- **Sequelize**: A promise-based Node.js ORM for Postgres, MySQL, MariaDB, SQLite, and Microsoft SQL Server.
- **Cors**: Middleware for enabling Cross-Origin Resource Sharing (CORS) in Express.js.
- **Cookie-session**: Middleware for session handling using cookies.

## Getting Started

1. Clone this repository.

```bash
git clone https://github.com/developerlight/backend-express-sequelize-multer-tour.git
cd backend-express-sequelize-multer-tour
```

2. Install dependencies.

```bash
npm install
```

3. Set up your database configuration in `config/db.config.js`.

4. Run the application.

```bash
npm start
```

5. Visit `http://localhost:8080` in your browser to see the welcome message.

## API Endpoints
  Here are the API endpoints for the authentication routes:
- **POST /api/auth/signup**: User registration.
- **POST /api/auth/signin**: User login.
- **POST /api/auth/signout**: User logout.
- **GET /api/test/all**: Public content.
- **GET /api/test/user**: User content.
- **GET /api/test/admin**: Admin content.

  Here are the API endpoints for the specified user routes:

- **GET /api/packages**: Retrieve packages. (Authentication required, user role)
- **GET /api/services**: Retrieve services. (Authentication required, user role)
- **GET /api/gallery**: Retrieve gallery items. (Authentication required, user role)
- **GET /api/review**: Retrieve reviews. (Authentication required, user role)
- **POST /api/booking**: Create a new booking. (Authentication required, user role)
- **GET /api/booking**: Retrieve user's bookings. (Authentication required, user role)
- **POST /api/contact**: Submit a contact form. (Authentication required, user role)

The routes use a middleware `[authJwt.verifyToken, authJwt.isUser]` to ensure that the request is authenticated and has the required user role.

Here are the API endpoints for the specified routes:

- **GET /api/test/all**: Accessible to all users. (No authentication required)
- **GET /api/test/user**: Accessible to authenticated users. (User role required)
- **GET /api/test/mod**: Accessible to authenticated users with the "Moderator" role. (Moderator role required)
- **GET /api/test/admin**: Accessible to authenticated users with the "Admin" role. (Admin role required)

The routes use middleware `[authJwt.verifyToken]` to ensure that the request is authenticated. Additional middleware `[authJwt.isModerator]` and `[authJwt.isAdmin]` is used to check for specific roles.

Here are the API endpoints for the authentication routes:

- **POST /api/auth/signup**: User registration.
  - Middleware:
    - `verifySignUp.checkDuplicateUsernameOrEmail`: Checks for duplicate username or email.
    - `verifySignUp.checkRolesExisted`: Checks if specified roles exist.
  - Controller: `controller.signup`

- **POST /api/auth/signin**: User login.
  - Controller: `controller.signin`

- **POST /api/auth/signout**: User logout.
  - Controller: `controller.signout`

These routes handle user registration, login, and logout functionalities, incorporating middleware for verification and validation.

Here are the API endpoints for the admin-specific routes related to packages:

- **GET /api/admin/packages**: Retrieve all packages (admin access only).
  - Middleware:
    - `authJwt.verifyToken`: Verifies user token.
    - `authJwt.isAdmin`: Checks if the user has admin role.
  - Controller: `controller.getPackages`

- **POST /api/admin/packages**: Create a new package (admin access only).
  - Middleware:
    - `authJwt.verifyToken`: Verifies user token.
    - `authJwt.isAdmin`: Checks if the user has admin role.
    - `multer.single('image')`: Handles image file upload.
  - Controller: `controller.postPackages`

These routes provide functionalities for admins to manage packages, allowing them to retrieve existing packages and add new ones.

## File Uploads

You can upload files by sending a POST request to `/api/test/upload`. The files will be stored in the `public/uploads` directory.

## Contributors

- [developerlight](https://github.com/developerlight)

Feel free to contribute and make this application even better!
