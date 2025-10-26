# 🧑‍💼 User Manager App

A full-stack **MERN CRUD application** that allows users to Create, Read, Update, and Delete user data in real-time.  
Built with **React + Vite** for the frontend, **Node.js + Express** for the backend, and **MongoDB Atlas** for data storage.

---

## 🚀 Features

- 🔹 Add, Edit, and Delete users seamlessly  
- 🔹 Real-time data updates using Axios and React Hooks  
- 🔹 RESTful API built with Express and Node.js  
- 🔹 MongoDB Atlas cloud database integration  
- 🔹 Environment variable-based API configuration (secure URLs)  
- 🔹 Fully responsive UI for desktop and mobile  
- 🔹 Deployed using **Vercel (frontend)** and **Render (backend)**  

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-------------|
| Frontend | React (Vite), Axios, CSS |
| Backend | Node.js, Express.js |
| Database | MongoDB Atlas (Mongoose) |
| Deployment | Vercel + Render |
| Tools | Git, VS Code, Postman |

---

## 📁 Folder Structure

```
CRUD/
│
├── client/                 # React (Vite) frontend
│   ├── src/
│   ├── public/
│   ├── .env                # Frontend env (VITE_BASE_URL)
│   └── package.json
│
├── server/                 # Express backend
│   ├── controllers/        # Business logic
│   ├── models/             # Mongoose schemas
│   ├── routes/             # API routes
│   ├── config/             # MongoDB connection
│   ├── server.js
│   └── package.json
│
└── README.md
```

---

## ⚙️ API Endpoints

| Method | Endpoint | Description |
|--------|-----------|-------------|
| `GET` | `/api/users` | Fetch all users |
| `POST` | `/api/addUser` | Create a new user |
| `PUT` | `/api/users/:userId` | Update existing user |
| `DELETE` | `/api/users/:userId` | Delete a user |

---

## 🧩 Environment Variables

### 🔸 In `/client/.env`
```
VITE_BASE_URL=http://localhost:5000/api
```

### 🔸 In `/server/.env` (if using Atlas)
```
MONGO_URI=mongodb+srv://<username>:<password>@<your-cluster>.mongodb.net/<database-name>
PORT=5000
```

---

## 🧠 How to Run Locally

### 1️⃣ Clone the repository
```
git clone https://github.com/ankiit29/CRUD.git
cd CRUD
```

### 2️⃣ Setup backend
```
cd server
npm install
npm start
```

Backend will run on 👉 `http://localhost:3000/`

### 3️⃣ Setup frontend
Open another terminal:
```
cd client
npm install
npm run dev
```

Frontend will run on 👉 `http://localhost:5173/`

---

## 👨‍💻 Author

**Ankit Yadav**  
🔗 GitHub: https://github.com/ankiit29
