# Paytm Clone

A full-stack payment application built with React and Node.js, allowing users to create accounts, view balances, and transfer money between users.

## Features

- User authentication (signup/login with JWT)
- Real-time balance tracking
- Search and find users
- Secure money transfers with MongoDB transactions
- Responsive UI with gradient design

## Tech Stack

**Frontend:** React, Recoil, Axios, Vite  
**Backend:** Node.js, Express, MongoDB, Mongoose, JWT, Zod

## Setup

### Backend
```bash
cd backend
npm install
cp .env.example .env  # Add your MongoDB URI and JWT secret
node index.js
```

### Frontend
```bash
cd frontend
npm install
cp .env.example .env  # Add your backend URL
npm run dev
```

## Environment Variables

**Backend (.env)**
- `MONGODB_URI` - MongoDB connection string
- `JWT_SECRET` - Secret key for JWT tokens
- `PORT` - Server port (default: 3000)

**Frontend (.env)**
- `VITE_BASE_URL` - Backend API URL



