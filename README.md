 📘 Description of  “ProjectMaster”
 
A comprehensive project management web application designed to help teams organize, track, and collaborate on projects efficiently. Built with TypeScript, Node.js, Express, and MongoDB, ProjectMaster provides intuitive tools for task management, team collaboration, and project tracking.

🌟 Key Features

- Authentication (Google Sign-In, Email, Password)
- Create & Manage Multiple Workspaces
- Projects & Epics Management
- Tasks (CRUD, Status, Priority, Assignee)
- Roles & Permissions (Owner, Admin, Member)
- Invite Members to Workspaces
- Filters & Search (Status, Priority, AssignedTo)
- Analytics Dashboard
- Pagination & Load More
- Cookie Session Management
- Logout & Session Termination
- Seeding for Test Data
- Mongoose Transactions for Robust Data Integrity
- Built with MERN Stack (Node.js, MongoDB, React, TypeScript)

  
🚀 Tools & Technologies
This project leverages the latest tools and frameworks for modern development:

Node.js: Scalable backend architecture
React.js: Dynamic frontend framework
MongoDB & Mongoose: Flexible and scalable database solutions
Google OAuth: Seamless Google Sign-In integration
TypeScript: For a type-safe codebase
TailwindCSS & Shadcn UI: Beautiful, responsive design
Vite.js: Lightning-fast frontend development




📂 Project Structure : ( our focus here was to build a solid backend architecture . Unfortunately , we've got caught up in this part and didn't find the time to begin the frontend , which we're beginning to work on ........) :
backend/
│
├── node_modules/
│
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
│   |   ├── auth.validation.ts
│   |  ├── project.validation.ts
│   |  └── task.validation.ts
│   |  └── workspace.validation.ts
|   ├── index.ts
|    
|      
|── dependancies.txt
│── package-lock.json   
├── package.json
└── tsconfig.json


🔄 Getting Started

1. Set Up Environment Variables
Create a .env file in the root of your project and configure these variables:

PORT=8000
NODE_ENV=development
MONGO_URI="mongodb+srv://<username>:<password>@<>.mongodb.net/teamsync_db"  

SESSION_SECRET="session_secret_key"

GOOGLE_CLIENT_ID=<your-google-client-id>  
GOOGLE_CLIENT_SECRET=<your-google-client-secret>  
GOOGLE_CALLBACK_URL=http://localhost:8000/api/auth/google/callback

FRONTEND_ORIGIN=http://localhost:3000
FRONTEND_GOOGLE_CALLBACK_URL=http://localhost:3000/google/callback

3. Run the Application
Install dependencies and start the development server:

npm install  
npm run dev  

Access the backend at http://localhost:8000.

🌐 Deploying ProjectMaster

1. Add Environment Variables
Add the .env variables to your hosting platform 

2. Deploy
Deploy your app using your preferred method to make it live.
