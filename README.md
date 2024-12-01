Here’s the full README in proper markdown format:


# Simple CRUD App: Users Backend

A basic Node.js backend for managing users with MongoDB.

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

- **POST /api/user**  
  Add a new user.

- **PUT /api/user/:id**  
  Update a user by ID.

- **DELETE /api/userDelete/:id**  
  Delete a user by ID.

---

## Example Usage

Use Postman or any API testing tool to test the endpoints:
1. Start the server.
2. Send requests to **http://localhost:3000**.

---

That’s it! 🎉
``` 

This markdown is simple, clean, and includes only the essentials.
