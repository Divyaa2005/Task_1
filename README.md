# MERN Task 1 – Project Setup & API Integration

## Overview

This project demonstrates the basic setup of a MERN Stack application using **React**, **Node.js**, and **Express**. The frontend communicates with the backend using **Axios**, while the backend exposes REST API endpoints through Express.

---

## Project Structure

```
Task_1
├── backend
│   ├── routes
│   │   └── api.js
│   ├── server.js
│   ├── db.js
│   └── package.json
│
└── frontend
    ├── src
    │   ├── App.jsx
    │   ├── App.css
    │   ├── main.jsx
    │   └── index.css
    ├── public
    ├── vite.config.js
    └── package.json
```

---

## Features

- Express server setup
- REST API endpoints
- React frontend with Vite
- Axios integration
- JSON request/response handling
- CORS enabled
- Development proxy using Vite

---

## API Endpoints

| Method | Endpoint | Description |
|---------|----------|-------------|
| GET | `/api/message` | Returns a welcome message |
| GET | `/api/users` | Returns sample user data |
| POST | `/api/echo` | Echoes the submitted text |

---

## Technologies Used

- React
- Vite
- Axios
- Node.js
- Express.js
- JavaScript

---

## Running the Project

### Backend

```bash
cd backend
npm install
npm run dev
```

### Frontend

```bash
cd frontend
npm install
npm run dev
```

---

## Output

- Displays a message fetched from the backend.
- Displays a list of users.
- Sends text to the backend and displays the echoed response.

---

## Author

**Dibyasanti Swain**
