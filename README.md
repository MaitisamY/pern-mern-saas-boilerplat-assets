
# PERN SaaS Boilerplate

A minimal, production-ready SaaS starter kit built with PostgreSQL/MongoDB, Express, React, and Node.js (PERN/MERN stack).

## 🔧 Requirements

- Node.js (https://nodejs.org)
- Docker (https://www.docker.com/)

## 🔧 Environment Setup (Cross-platform)

Choose the script that matches your system:

### macOS/Linux/WSL
```bash
./setup.sh
```

### Windows
```cmd
setup.bat
```

These scripts will:
- Prompt you for required environment variables (DB, Stripe, Email)
- Generate a valid `.env` file automatically

## 🧩 Features

- 🔐 Auth system (Sign up, login, email verification, forgot/reset password)
- 💳 Stripe-based billing (monthly/yearly plans)
- 📊 Admin dashboard (manage users, roles, plans)
- 🔔 Email notifications (SMTP configurable)
- 🧰 Modular backend and frontend architecture
- 🐳 Docker support via `docker-compose.yml`

## 🚀 Getting Started

### 1. Clone & Install Dependencies

```bash
git clone https://your-repo-url.git
cd pern-saas-boilerplate
npm install
```

### 2. Setup Environment

Use the included script to create your `.env` file:

```bash
./setup.sh for Mac/Linux   # or   setup.bat for Windows
```

Or manually copy and configure:

```bash
cp .env.example .env
```

### 3. Run with Docker (Recommended)

```bash
docker-compose up --build
```

This sets up:
- PostgreSQL database
- Backend server on port 5000
- Frontend on port 3000

### 4. First Login

Use the seeded admin credentials:

- **Email:** admin@example.com
- **Password:** password123

## 🛠 Folder Structure

```
backend/           → Express API (routes, models, services)
frontend/          → React client
sequelize/         → DB schema and migrations
docker-compose.yml → One command setup
.env.example       → Reference for environment variables
```

## 📦 Built-in Tech

- Express + Sequelize + Socket.io / Express + Mongoose + Socket.io
- React + Context OR Zustand (extendable) or Redux (extendable)
- Stripe Billing (w/ webhook handling)
- Nodemailer or other SMTP setup
- Role-based access control
