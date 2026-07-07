# Full Stack Blog Platform

This is a full-stack blog application built with a focus on clean architecture, authentication, and real-world functionality. It allows users to create, manage, and view blog posts through a structured admin system.

The project was developed to strengthen understanding of frontend-backend integration, JWT authentication, and scalable application design.

---

## Features

### Authentication

* JWT-based authentication system
* Protected routes for admin operations
* Persistent login using local storage

### Blog Management

* Create, update, and delete blog posts
* Draft and publish workflow
* Fetch and display blog content dynamically

### Admin Dashboard

* Overview of total blogs, comments, and drafts
* Table view of recent blog activity
* Integrated controls for managing content

### Frontend

* Built using React and Vite
* Context API for global state management
* Axios for API communication
* Toast notifications for user feedback

### Backend

* Node.js with Express
* MongoDB for data storage
* Middleware-based authentication using JWT
* RESTful API structure

---

## Tech Stack

Frontend:

* React
* Vite
* Axios
* React Router

Backend:

* Node.js
* Express.js
* MongoDB
* JSON Web Token (JWT)

---

## Project Structure

```
/client
  /src
    /components
    /pages
    /context
    /assets

/server
  /controllers
  /routes
  /middleware
  /models
```

---

## Environment Variables

Frontend (.env):

```
VITE_BASE_URL=http://localhost:5000
```

Backend (.env):

```
PORT=5000
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_secret_key
```

---

## Installation and Setup

Clone the repository:

```
git clone https://github.com/yourusername/blogsite.git
cd blogsite
```

Install and run the frontend:

```
cd client
npm install
npm run dev
```

Install and run the backend:

```
cd server
npm install
npm run server
```

---

## Authentication Flow

1. User logs in through the frontend
2. Backend returns a JWT token
3. Token is stored in local storage
4. Token is sent in request headers for protected routes
5. Backend verifies the token before granting access

---

## Future Improvements

* Add comment system
* Implement search and filtering
* Improve editor experience
* Add analytics to dashboard
* Integrate AI-assisted content generation

---

## Author

Vyom Pratap Singh Gahlot
