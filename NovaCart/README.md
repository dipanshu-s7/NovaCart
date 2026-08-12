<div align="center">
  <img src="https://cdn-icons-png.flaticon.com/512/3514/3514491.png" alt="NovaCart Logo" width="80" />
  <h1>NovaCart - Full-Stack MERN E-Commerce App</h1>
  <p>A full-stack e-commerce platform built with React (CRA) on the frontend and Express/MongoDB on the backend.</p>
  <p><strong>Developed by Deepanshu Suryavanshi</strong></p>
</div>

---

## Tech Stack

- **Frontend:** React.js (`react-scripts`), Redux Toolkit (cart state), AuthContext (JWT sessions)
- **Backend:** Node.js, Express.js with middleware-based routing
- **Database:** MongoDB (Mongoose schemas)
- **Features:** Admin dashboard, Cloudinary image uploads, user profiles, order history
- **Payments:** Razorpay integration (test keys or bypass mode)
- **Cloud Storage:** Cloudinary via Multer

---

## Quick Start

### 1. Dependencies & Environment

Ensure MongoDB is running locally or use a remote connection string.

Inside `backend/`, configure your `.env`:

```env
PORT=5000
NODE_ENV=development
MONGO_URI=mongodb://127.0.0.1:27017/novacart
JWT_SECRET=super_secret_key
RAZORPAY_KEY_ID=your_key_id
RAZORPAY_KEY_SECRET=your_key_secret
```

From the **root folder** `NovaCart/`, install dependencies:

```bash
npm run install-all
```

### 2. Seed the Database

```bash
npm run seed
```

> **Seed Admin Access:** Email: `admin@novacart.com` | Password: `password123`

### 3. Run Development Servers

```bash
npm run dev
```

Backend runs on port **5000**, frontend on port **3000**.

---

## Deployment (Render)

The backend serves `frontend/build` in production when `NODE_ENV=production`.

1. Push this repo to GitHub
2. Create a **Web Service** on [Render](https://dashboard.render.com)
3. Set build command: `npm run build`
4. Set start command: `npm start`
5. Add environment variables from `.env.example` with `NODE_ENV=production`

---

## API Testing

Import **`NovaCart_Postman_Collection.json`** into Postman to test auth, products, orders, and admin endpoints.
