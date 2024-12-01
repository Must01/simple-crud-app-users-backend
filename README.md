Here's the updated `README.md` reflecting the changes in the routing and controllers for your app:


# Simple CRUD App: Users Backend

A basic Node.js backend for managing users with MongoDB, using Express for routing and controller functions.

---

## Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/simple-crud-app-users-backend.git
   cd simple-crud-app-users-backend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Update the MongoDB connection string:**
   - Open `server.js` and replace the connection string with your MongoDB URI:
     ```js
     mongoose.connect("your-mongodb-connection-string");
     ```

4. **Start the server:**
   ```bash
   node server.js
   ```
   The server will run at: **http://localhost:3000**

---

## API Endpoints

- **GET /api/users**  
  Fetch all users.

- **GET /api/users/:id**  
  Fetch a single user by ID.

- **POST /api/users**  
  Add a new user.

- **PUT /api/users/:id**  
  Update an existing user by ID.

- **DELETE /api/users/:id**  
  Delete a user by ID.

---

## Folder Structure

- **server.js**: Main entry point to start the server.
- **routes/user.route.js**: Routes for handling user-related operations.
- **controller/user.controller.js**: Functions to handle the logic for the routes.
- **models/user.model.js**: Mongoose model for the user schema.

---

## Example Usage

Use Postman or any API testing tool to test the endpoints:
1. Start the server.
2. Send requests to **http://localhost:3000**.

---

That’s it! 🎉
```

