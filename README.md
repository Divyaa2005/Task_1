# MERN Task 1 – Project Setup & API Integration

## Overview

This project is a basic MERN Stack application developed as part of **Task ID: B1-MERN-T01**. The objective was to establish communication between a React frontend and an Express backend by creating REST APIs and consuming them using Axios.

The project demonstrates the core concepts of frontend-backend integration that serve as the foundation for future authentication and database-related tasks.

---

# Objectives Completed

- Set up a Node.js backend using Express.js
- Created a React application using Vite
- Organized frontend and backend using a modular folder structure
- Built REST API endpoints using Express Router
- Connected the React frontend to backend APIs using Axios
- Implemented GET and POST request handling
- Configured CORS and environment variables
- Verified successful frontend-backend communication

---

# Project Structure

```
mern-project/
│
├── backend/
│   ├── routes/
│   │   └── api.js
│   ├── server.js
│   ├── .env
│   ├── package.json
│   └── node_modules/
│
└── frontend/
    ├── src/
    │   ├── App.jsx
    │   ├── main.jsx
    │   ├── App.css
    │   └── index.css
    ├── vite.config.js
    ├── package.json
    └── node_modules/
```

---

# Backend Implementation

The backend was developed using **Node.js** and **Express.js**.

The Express server is responsible for:

- Initializing the application
- Parsing JSON request bodies
- Enabling CORS
- Registering API routes
- Listening on Port 5000

Routes are organized separately using **Express Router** to keep the code modular and maintainable.

---

# API Endpoints

### GET `/api/message`

Returns a welcome message from the backend.

Example Response

```text
Hello from Express Backend!
```

---

### GET `/api/users`

Returns sample user data.

Example Response

```json
[
  {
    "id": 1,
    "name": "Alice"
  },
  {
    "id": 2,
    "name": "Bob"
  },
  {
    "id": 3,
    "name": "Charlie"
  }
]
```

---

### POST `/api/echo`

Accepts a JSON object and returns the same value as a response.

Request

```json
{
  "text": "Hello MERN"
}
```

Response

```json
{
  "echo": "Hello MERN"
}
```

---

# Frontend Implementation

The frontend was developed using **React** with **Vite**.

Axios is used to communicate with the backend APIs.

The application performs the following:

- Fetches the backend welcome message
- Displays the list of users returned by the API
- Sends user input to the backend using a POST request
- Displays the echoed response received from the server

---

# Technologies Used

### Frontend

- React
- Vite
- Axios

### Backend

- Node.js
- Express.js
- CORS
- Dotenv

---

# Running the Project

### Backend

```bash
cd backend
npm install
npm run dev
```

Runs on:

```
http://localhost:5000
```

---

### Frontend

```bash
cd frontend
npm install
npm run dev
```

Runs on:

```
http://localhost:5173
```

---

# Learning Outcomes

This task provided hands-on experience with:

- Express server setup
- React project initialization using Vite
- REST API development
- Express Router
- Axios integration
- GET and POST requests
- JSON data exchange
- Client-server communication
- Project folder organization

---

# Future Scope

This project serves as the base for upcoming MERN tasks, including:

- MongoDB integration
- User authentication
- JWT authorization
- Password hashing with bcrypt
- Google OAuth
- Email integration using SMTP

---

**Author**

**Dibyasanti Swain**
