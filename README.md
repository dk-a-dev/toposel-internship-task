# Toposel internship Task

API built with Express.js and MongoDB for user management, featuring secure authentication and search functionality.

## Showcase
[Drive Link for showcase](https://drive.google.com/file/d/1TOXjRio7DJOT0SkXo-lhM39DyVewRtYs/view?usp=sharing)

## Features

- User registration with data validation
- Secure authentication using JWT
- Password hashing with bcrypt
- User search functionality
- MongoDB integration
- Input validation and error handling

## Tech Stack

- Node.js
- Express.js
- MongoDB
- JWT (JSON Web Tokens)
- bcrypt.js
- express-validator

## Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/user-management-api.git
cd user-management-api
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory, check `.env.example`

4. Start the server:
```bash
npm run dev
```

## API Endpoints

### Base URL
```
http://localhost:8000/api/v1/users
```

### Available Endpoints

1. Register User
2. User Login
3. Search Users
> Note: check postman doc for usage 

## Data Validation

### Registration Validation
- Username: Minimum 3 characters
- Password: Minimum 8 characters
- Email: Valid email format
- Full Name: Required
- Gender: Must be 'male', 'female', or 'other'
- Date of Birth: Valid ISO date format
- Country: Required

## Error Handling

The API implements comprehensive error handling:
- Validation errors: `400 Bad Request`
- Authentication errors: `401 Unauthorized`
- Server errors: `500 Internal Server Error`

## Testing/Usage

1. https://documenter.getpostman.com/view/20856291/2sAYXCkz4R
2. Set up environment variables in Postman:
   - `base_url`: `http://localhost:8000/api/v1/users`
   - `jwt_token`: Token received after login

## Security Measures

- Password hashing using bcrypt
- JWT-based authentication
- Input validation and sanitization
- Protected routes using middleware
- Secure password comparison

## Project Structure

```
TOPOSEL/
├── app/
│   ├── controllers/
│   │   └── userController.js
│   ├── middleware/
│   │   ├── auth.js
│   │   └── validation.js
│   ├── routes/
│   │   └── userRoutes.js
│   └── utils/
│       └── authUtils.js
├── config/
│   └── dbConfig.js
├── models/
│   └── userModel.js
├── routes/
│   └── userRoutes.js
├── node_modules/
├── .env
├── .env.example
├── .gitignore
├── app.js
├── package-lock.json
├── package.json
├── postman-docs.json
└── README.md
```