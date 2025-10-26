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

Backend will run on 👉 `http://localhost:5000/`

### 3️⃣ Setup frontend
Open another terminal:
```
cd client
npm install
npm run dev
```

Frontend will run on 👉 `http://localhost:5173/`

---

## ☁️ Deployment

### 🟢 Backend (Render)
1. Push your backend code to GitHub  
2. Create a new **Render Web Service**  
3. Set environment variable:  
   ```
   MONGO_URI=<your MongoDB Atlas connection string>
   ```
4. Deploy and copy your Render API URL (e.g. `https://crud-server.onrender.com`)

### 🟣 Frontend (Vercel)
1. Go to Vercel → Import your repo  
2. Add environment variable:
   ```
   VITE_BASE_URL=https://crud-server.onrender.com/api
   ```
3. Deploy frontend  
4. Open your deployed app URL 🎉

---

## 🧾 Resume Highlights

- Developed a **MERN-based CRUD web app** to manage users with real-time updates.  
- Implemented **REST APIs** in Node.js with Express and **MongoDB Atlas** as cloud database.  
- Integrated frontend and backend using **Axios** and environment-based configuration.  
- Deployed full stack app using **Vercel (frontend)** and **Render (backend)**.  
- Strengthened knowledge in **React Hooks**, **API communication**, and **full-stack development** workflows.

---

## 👨‍💻 Author

**Ankit Yadav**  
🔗 GitHub: https://github.com/ankiit29
