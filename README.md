# Simple CRUD App: Users Backend

A simple Node.js backend for managing users with MongoDB.

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

3. **Update MongoDB connection string:**
   - Open `index.js` and replace the connection string with your MongoDB URI:
     ```js
     mongoose.connect("your-mongodb-connection-string");
     ```

4. **Start the server:**
   ```bash
   node index.js
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
  Update a user by ID.

- **DELETE /api/users/:id**  
  Delete a user by ID.

---

## File Structure

- **index.js**: Main entry point of the server.
- **Routes/**: Folder for user route handling.
- **controller/**: Folder for user-related business logic.
- **models/**: Folder containing MongoDB user schema.

---

## Example Usage

1. Start the server by running `node index.js`.
2. Test the API using Postman or similar tools with **http://localhost:3000** as the base URL.

---

Happy Coding! 🎉
