# Task Manager Application

A full-stack Task Manager application built with Node.js, Express.js, MongoDB, and React.js.

## Features

### Backend

* User Registration & Login
* JWT Authentication
* Password Hashing using bcrypt
* Role-Based Access Control (USER / ADMIN)
* CRUD APIs for Tasks
* Protected Routes
* Input Validation
* Centralized Error Handling
* Swagger API Documentation
* MongoDB Database Integration
* RESTful API Design

### Frontend

* Register & Login UI
* Protected Dashboard
* Create Tasks
* View Tasks
* Delete Tasks
* Logout Functionality
* API Integration with Axios

---

# Tech Stack

## Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT
* bcrypt
* Swagger

## Frontend

* React.js
* Vite
* Axios
* React Router DOM

---

# Project Structure

project/
│
├── backend/
│ ├── controllers/
│ ├── middleware/
│ ├── models/
│ ├── routes/
│ ├── docs/
│ └── app.js
│
├── frontend/
│ ├── src/pages/
│ ├── src/components/
│ └── src/api/
│
└── README.md

---

# API Endpoints

## Authentication

### Register

POST `/api/v1/auth/register`

### Login

POST `/api/v1/auth/login`

---

## Tasks

### Create Task

POST `/api/v1/tasks`

### Get Tasks

GET `/api/v1/tasks`

### Update Task

PUT `/api/v1/tasks/:id`

### Delete Task

DELETE `/api/v1/tasks/:id`

---

# Installation & Setup

## Backend Setup

```bash
cd backend
npm install
npm run dev
```

## Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

---

# Environment Variables

Create `.env` inside backend folder:

```env
PORT=5000
JWT_SECRET=your_secret_key
MONGO_URI=your_mongodb_connection_string
```

---

# Swagger Documentation

Swagger API docs available at:

```txt
http://localhost:5000/api-docs
```

---

# Security Features

* JWT Authentication
* Password Hashing
* Protected Routes
* Input Validation
* Authorization Middleware

---

# Scalability Notes

Future improvements for scalability:

* Redis caching
* Docker containerization
* Microservices architecture
* Load balancing
* Queue-based async processing
* CI/CD pipelines

---

# Author

Suyash Pawar
# task-manager-app
