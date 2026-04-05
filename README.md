# Cash-Craft - The Smart Budget System

Cash-Craft is a full-stack personal finance application built with the MERN stack.
It helps users track expenses, manage bills, monitor savings, and organize household
finance activity from a single dashboard.

The project also includes an admin panel for user and system management.

## Features

- Authentication with JWT
- Expense tracking with charts and trend views
- One-time and recurring bill management
- Household management workflows
- Contact and feedback modules
- Admin dashboard for user and platform-level actions

## Tech Stack

- Frontend: React, React Router, Axios, Chart.js
- Backend: Node.js, Express
- Database: MongoDB with Mongoose
- Auth/Security: bcryptjs, jsonwebtoken

## Repository Structure

- `client`: React frontend
- `server`: Express API, business logic, data models
- `scripts`: Utility scripts (for example, admin role assignment)

## Prerequisites

- Node.js 18+ recommended
- npm 9+ recommended
- MongoDB (Atlas or local)

## Environment Variables

Create `server/.env` for development and production.

Common variables:

```env
MONGO_URI=mongodb://127.0.0.1:27017/cash-craft
JWT_SECRET=replace-with-a-secure-secret
PORT=5000
```

Notes:

- In development, the server falls back to default values for `MONGO_URI` and
  `JWT_SECRET` if they are missing.
- In production, both `MONGO_URI` and `JWT_SECRET` are required and the server
  exits if they are not set.

## Run Locally

From the repository root:

```bash
npm install
npm run dev
```

This starts:

- API server on `http://localhost:5000`
- React client on `http://localhost:3000`

The frontend proxies API requests to the backend through the client proxy
configuration.

## Available Root Scripts

- `npm run dev`: Run backend and frontend concurrently (development)
- `npm run server`: Run backend with nodemon
- `npm run client`: Run React client
- `npm run build`: Install dependencies and build frontend for production
- `npm start`: Start backend server (serves `client/build` in production)

## Build and Production

Create a production frontend build:

```bash
npm run build
```

Run production server:

```bash
npm start
```

When `NODE_ENV=production`, Express serves static files from `client/build` and
routes non-API requests to the React app.

## Admin Access Script

Promote an existing user to admin:

```bash
node scripts/makeAdmin.js user@example.com
```

The script reads database configuration from `server/.env`.

## License

ISC
