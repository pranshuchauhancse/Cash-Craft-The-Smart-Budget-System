# **Cash-Craft – Master Your Finances 🚀**

**Cash-Craft** is a premium personal finance management application built using the **MERN stack**, designed to help users take full control of their financial life. With a sleek, modern interface and powerful tracking tools, Cash-Craft makes managing expenses, bills, and overall financial health both intuitive and visually engaging.

In addition to user-focused features, Cash-Craft includes a comprehensive **Admin Panel** for system oversight, analytics, and user management.

---

## ✨ Key Features

### 💡 Smart Financial Dashboard

* Real-time insights into income, expenses, and savings
* Clean, data-driven visualizations for better financial awareness

### 💸 Expense Tracking

* Log expenses with categories and custom tags
* Multi-currency support for global usability

### 🧾 Bill Management

* Manage one-time and recurring bills
* Track payment status and upcoming due dates

### 🎨 Premium UI / UX

* Dark-mode-first design with glassmorphism effects
* Smooth micro-animations and fully responsive layouts

### 🛡️ Admin Dashboard

* System-wide statistics (users, expenses, messages)
* Advanced user management (search, role promotion/demotion)
* Interactive quick actions such as:

  * Simulated system backups
  * Broadcast notifications
  * System log monitoring

### 🔐 Secure Authentication

* JWT-based authentication
* Encrypted passwords and password reset support

---

## 🛠️ Tech Stack

**Frontend**

* React.js
* React Router
* Axios
* React Icons
* CSS3 (Vanilla CSS with variables)

**Backend**

* Node.js
* Express.js

**Database**

* MongoDB with Mongoose

**Utilities & Tools**

* Dotenv
* Bcrypt.js
* JSON Web Token (JWT)

---

## 🚀 Getting Started

### Prerequisites

* Node.js installed on your system
* MongoDB Atlas account or a local MongoDB setup

---

### Installation Guide

#### 1️⃣ Clone the Repository

```bash
git clone https://github.com/yourusername/cash-craft.git
cd Cash-Craft
```

#### 2️⃣ Backend Setup

* Navigate to the `server` directory
* Create a `.env` file using `.env.example` as a reference
* Install dependencies and start the server

```bash
cd server
npm install
npm run dev
```

#### 3️⃣ Frontend Setup

* Navigate to the `client` directory
* Install dependencies and start the React application

```bash
cd client
npm install
npm start
```

---

## 🔐 Admin Access

To grant administrator privileges to an existing user, run:

```bash
node scripts/makeAdmin.js <user-email>
```

---

**Built with ❤️ by Pranshu Chauhan**
