# Simple CRUD App: Users Backend

A basic backend built with Node.js, Express, and MongoDB for managing user data (CRUD).

---

# Features
- Add, view, update, and delete users.
- MongoDB database with Mongoose.

# Requirements
- Node.js installed.
- MongoDB connection (local or cloud).

# Setup Instructions
1. Clone the repo:
   git clone https://github.com/your-username/simple-crud-app-users-backend.git
   cd simple-crud-app-users-backend

2. Install dependencies:
   npm install

3. Set up MongoDB connection:
   - Open `server.js` and replace:
     mongoose.connect("your-mongodb-connection-string");

4. Start the server:
   node server.js
   # Server will run at http://localhost:3000

# API Endpoints
GET    /                  - Test endpoint.
GET    /api/users         - Get all users.
GET    /api/users/:id     - Get user by ID.
POST   /api/user          - Add a new user.
PUT    /api/user/:id      - Update a user.
DELETE /api/userDelete/:id - Delete a user.

# Folder Structure
models/      # Mongoose schemas.
routes/      # API routes.
server.js    # Main server file.
