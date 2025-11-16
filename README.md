# 📊 ProjectMaster - Project Management Web Application

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Node.js Version](https://img.shields.io/badge/node-%3E%3D16.0.0-brightgreen)](https://nodejs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)](https://www.typescriptlang.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-6.0-green)](https://www.mongodb.com/)
[![React](https://img.shields.io/badge/React-18.0-blue)](https://reactjs.org/)

## 📘 About The Project

A comprehensive project management web application designed to help teams organize, track, and collaborate on projects efficiently. Built with TypeScript, Node.js, Express, and MongoDB, ProjectMaster provides intuitive tools for task management, team collaboration, and project tracking.

> **Note:** Our focus was to build a solid backend architecture. Unfortunately, we got caught up in this part and didn't find the time to begin the frontend, which we're beginning to work on...

### 🛠️ Built With

* ![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
* ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
* ![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
* ![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)
* ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
* ![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
* ![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)

## 🌟 Key Features

### Authentication & Authorization
- 🔐 **Google Sign-In** - OAuth integration
- 📧 **Email/Password Authentication**
- 🔑 **Cookie Session Management**
- 🚪 **Logout & Session Termination**

### Workspace Management
- 🏢 **Create & Manage Multiple Workspaces**
- 👥 **Invite Members to Workspaces**
- 🎭 **Roles & Permissions** (Owner, Admin, Member)

### Project & Task Management
- 📁 **Projects & Epics Management**
- ✅ **Tasks CRUD Operations**
- 🎯 **Task Status, Priority, Assignee**
- 🔍 **Filters & Search** (Status, Priority, AssignedTo)

### Advanced Features
- 📊 **Analytics Dashboard**
- 📄 **Pagination & Load More**
- 🔄 **Mongoose Transactions** for data integrity
- 🌱 **Seeding for Test Data**

## 🚀 Tools & Technologies

This project leverages the latest tools and frameworks for modern development:

- **Node.js** - Scalable backend architecture
- **React.js** - Dynamic frontend framework
- **MongoDB & Mongoose** - Flexible and scalable database solutions
- **Google OAuth** - Seamless Google Sign-In integration
- **TypeScript** - For a type-safe codebase
- **TailwindCSS & Shadcn UI** - Beautiful, responsive design
- **Vite.js** - Lightning-fast frontend development

## 📂 Project Structure
```
backend/
├── node_modules/
├── src/
│   ├── @types/
│   │   └── index.d.ts
│   │
│   ├── config/
│   │   ├── app.config.ts
│   │   ├── database.config.ts
│   │   ├── http.config.ts
│   │   └── passport.config.ts
│   │
│   ├── controllers/
│   │   ├── auth.controller.ts
│   │   ├── member.controller.ts
│   │   ├── project.controller.ts
│   │   ├── task.controller.ts
│   │   ├── user.controller.ts
│   │   └── workspace.controller.ts
│   │
│   ├── enums/
│   │   ├── account-provider.enum.ts
│   │   ├── error-code.enum.ts
│   │   ├── role.enum.ts
│   │   └── task.enum.ts
│   │
│   ├── middlewares/
│   │   ├── asyncHandler.middleware.ts
│   │   ├── errorHandler.middleware.ts
│   │   └── isAuthenticated.middleware.ts
│   │
│   ├── models/
│   │   ├── account.model.ts
│   │   ├── member.model.ts
│   │   ├── project.model.ts
│   │   ├── roles-permission.model.ts
│   │   ├── task.model.ts
│   │   ├── user.model.ts
│   │   └── workspace.model.ts
│   │
│   ├── routes/
│   │   ├── auth.route.ts
│   │   ├── member.route.ts
│   │   ├── project.route.ts
│   │   ├── task.route.ts
│   │   ├── user.route.ts
│   │   └── workspace.route.ts
│   │
│   ├── seeders/
│   │   └── role.seeder.ts
│   │
│   ├── services/
│   │   ├── auth.service.ts
│   │   ├── member.service.ts
│   │   ├── project.service.ts
│   │   ├── task.service.ts
│   │   ├── user.service.ts
│   │   └── workspace.service.ts
│   │
│   ├── utils/
│   │   ├── appError.ts
│   │   ├── bcrypt.ts
│   │   ├── get-env.ts
│   │   ├── role-permission.ts
│   │   ├── roleGuard.ts
│   │   └── uuid.ts
│   │
│   ├── validation/
│   │   ├── auth.validation.ts
│   │   ├── project.validation.ts
│   │   ├── task.validation.ts
│   │   └── workspace.validation.ts
│   │
│   └── index.ts
│
├── dependencies.txt
├── package-lock.json
├── package.json
└── tsconfig.json
```

## 🚀 Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:
* Node.js (v16 or higher)
```sh
  node --version
```
* npm
```sh
  npm --version
```
* MongoDB Atlas account or local MongoDB installation
* Google Cloud Console account (for OAuth)

### Installation

1. **Clone the repository**
```sh
   git clone https://github.com/ZoubeirHicheri/WebProject.git
   cd WebProject
```

2. **Navigate to backend directory**
```sh
   cd backend
```

3. **Install dependencies**
```sh
   npm install
```

4. **Set up environment variables**

   Create a `.env` file in the backend root directory:
```env
   # Server Configuration
   PORT=8000
   NODE_ENV=development

   # Database Configuration
   MONGO_URI="mongodb+srv://<username>:<password>@<cluster>.mongodb.net/teamsync_db"

   # Session Configuration
   SESSION_SECRET="session_secret_key"

   # Google OAuth Configuration
   GOOGLE_CLIENT_ID=your_google_client_id
   GOOGLE_CLIENT_SECRET=your_google_client_secret
   GOOGLE_CALLBACK_URL=http://localhost:8000/api/auth/google/callback

   # Frontend Configuration
   FRONTEND_ORIGIN=http://localhost:3000
   FRONTEND_GOOGLE_CALLBACK_URL=http://localhost:3000/google/callback
```

5. **Set up Google OAuth**
   - Go to [Google Cloud Console](https://console.cloud.google.com/)
   - Create a new project
   - Enable Google+ API
   - Create OAuth 2.0 credentials
   - Add authorized redirect URIs:
     - `http://localhost:8000/api/auth/google/callback`
   - Copy Client ID and Client Secret to `.env`

6. **Run the development server**
```sh
   npm run dev
```

7. **Access the application**
```
   Backend: http://localhost:8000
```

## 💻 Available Scripts

### `npm run dev`
Runs the app in development mode with hot-reload using `ts-node-dev`.

### `npm run build`
Compiles TypeScript to JavaScript in the `dist` folder.

### `npm start`
Runs the compiled app in production mode.

### `npm run seed`
Seeds the database with initial roles and permissions data.

## 📊 API Documentation

### Authentication Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/auth/register` | Register with email/password |
| POST | `/api/auth/login` | Login with email/password |
| GET | `/api/auth/google` | Initiate Google OAuth |
| GET | `/api/auth/google/callback` | Google OAuth callback |
| POST | `/api/auth/logout` | Logout and destroy session |
| GET | `/api/auth/me` | Get current user |

### Workspace Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/workspaces` | Get all workspaces |
| GET | `/api/workspaces/:id` | Get single workspace |
| POST | `/api/workspaces` | Create new workspace |
| PUT | `/api/workspaces/:id` | Update workspace |
| DELETE | `/api/workspaces/:id` | Delete workspace |

### Project Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/projects` | Get all projects |
| GET | `/api/projects/:id` | Get single project |
| POST | `/api/projects` | Create new project |
| PUT | `/api/projects/:id` | Update project |
| DELETE | `/api/projects/:id` | Delete project |

### Task Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/tasks` | Get all tasks (with filters) |
| GET | `/api/tasks/:id` | Get single task |
| POST | `/api/tasks` | Create new task |
| PUT | `/api/tasks/:id` | Update task |
| PATCH | `/api/tasks/:id/status` | Update task status |
| DELETE | `/api/tasks/:id` | Delete task |

### Member Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/members` | Get workspace members |
| POST | `/api/members/invite` | Invite member to workspace |
| PUT | `/api/members/:id/role` | Update member role |
| DELETE | `/api/members/:id` | Remove member |

### User Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/users/me` | Get current user profile |
| PUT | `/api/users/me` | Update user profile |

## 🔐 Environment Variables

Required environment variables:
```env
# Server
PORT=8000
NODE_ENV=development

# Database
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/teamsync_db

# Session
SESSION_SECRET=your_session_secret

# Google OAuth
GOOGLE_CLIENT_ID=your_client_id
GOOGLE_CLIENT_SECRET=your_client_secret
GOOGLE_CALLBACK_URL=http://localhost:8000/api/auth/google/callback

# Frontend
FRONTEND_ORIGIN=http://localhost:3000
FRONTEND_GOOGLE_CALLBACK_URL=http://localhost:3000/google/callback
```

## 🛡️ Security Features

- ✅ **JWT & Session-based Authentication**
- ✅ **Password Hashing with bcrypt**
- ✅ **Google OAuth 2.0 Integration**
- ✅ **Role-based Access Control (RBAC)**
- ✅ **Input Validation with Joi/Zod**
- ✅ **CORS Protection**
- ✅ **HTTP-only Cookies**
- ✅ **MongoDB Injection Prevention**
- ✅ **XSS Protection**
- ✅ **Rate Limiting** (planned)

## 🎭 Roles & Permissions

| Role | Permissions |
|------|-------------|
| **Owner** | Full access to workspace, can delete workspace |
| **Admin** | Manage projects, tasks, and members |
| **Member** | View and manage assigned tasks |


<div align="center">

### 🚀 Backend is live! Frontend coming soon...

</div>

---

