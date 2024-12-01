# **Simple CRUD App: Users Backend**

A lightweight backend application built with Node.js, Express, and MongoDB, designed for managing user data with full CRUD (Create, Read, Update, Delete) functionality.

---

# **Features**
- RESTful APIs for user management:
  - Create new users.
  - Retrieve all users or specific users by ID.
  - Update existing users.
  - Delete users.
- MongoDB integration using Mongoose for seamless data modeling.
- Scalable and maintainable code structure with modular routes and models.

# **Technologies Used**
- Node.js: Backend runtime environment.
- Express.js: Web application framework.
- MongoDB: NoSQL database for storing user data.
- Mongoose: Object Data Modeling (ODM) library for MongoDB.

# **Installation and Setup**

## **Prerequisites**
Before running this app, ensure you have:
- Node.js (v14 or later) installed.
- MongoDB (local or cloud-based instance).

## **Steps to Set Up the App**
1. Clone the repository:
   git clone https://github.com/your-username/simple-crud-app-users-backend.git
   cd simple-crud-app-users-backend

2. Install dependencies:
   npm install

3. Configure the database connection:
   - Open the `server.js` file (or create a `.env` file if dotenv is used).
   - Replace the placeholder with your MongoDB connection string:
     mongoose.connect("your-mongodb-connection-string");

4. Start the server:
   node server.js

   The server will run at http://localhost:3000

# **API Endpoints**

## Base URL:
http://localhost:3000

## Available Endpoints
GET    /                  - Test endpoint to confirm the server is running.
GET    /api/users         - Retrieve all users.
GET    /api/users/:id     - Retrieve a user by ID.
POST   /api/user          - Create a new user.
PUT    /api/user/:id      - Update user details by ID.
DELETE /api/userDelete/:id - Delete a user by ID.

# **Folder Structure**

simple-crud-app-users-backend/
├── models/               # Contains Mongoose schemas and models
│   └── user.model.js     # User schema definition
├── routes/               # API route definitions
│   └── user.route.js     # Routes for user CRUD operations
├── server.js             # Main server entry point
├── package.json          # Metadata and dependencies
└── README.md             # Project documentation

# **Usage Notes**
- Ensure the MongoDB database is accessible before starting the server.
- For deployment on production, consider adding environment variables for sensitive data (e.g., MongoDB URI).
- Use tools like Postman or cURL to test the API endpoints.

# **Example Environment Variables (if used)**
Create a `.env` file at the root of your project:
MONGO_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/<database-name>
PORT=3000

# **Contributing**
Contributions are welcome! To contribute:
1. Fork the repository.
2. Create a feature branch: `git checkout -b feature-name`.
3. Commit your changes: `git commit -m 'Add feature'`.
4. Push to the branch: `git push origin feature-name`.
5. Submit a pull request.

# **License**
This project is licensed under the MIT License.
