# 🛒 NovaCart — Full-Stack MERN E-Commerce Platform

A feature-rich, scalable, and modern E-Commerce web application built using the **MERN Stack** (MongoDB, Express.js, React.js, Node.js). NovaCart provides a seamless shopping experience for users with secure authentication, global state management, media uploads, integrated online payments, and transactional email notifications.

---

## 🚀 Features

### 👤 User Capabilities
- **Authentication & Authorization**: Secure User Registration and Login using JWT (JSON Web Tokens) and password hashing with `bcryptjs`.
- **Product Browsing & Search**: Search, filter, and view detailed product information seamlessly.
- **Cart & State Management**: Real-time shopping cart operations managed efficiently using **Redux Toolkit**.
- **Payment Gateway Integration**: Online payment support powered by **Razorpay**.
- **Email Notifications**: Transactional emails and order confirmations using **Nodemailer**.

### 🛠 Tech Stack & Architecture
- **Media Storage**: Cloud-based image upload and management handled by **Multer** and **Cloudinary**.
- **Backend Architecture**: RESTful APIs powered by **Express.js** and **Mongoose** (MongoDB Object Modeling).
- **Concurrent Development**: Simultaneous frontend and backend execution setup via `concurrently`.

---

## 🛠️ Tech Stack

| Domain | Technologies Used |
| :--- | :--- |
| **Frontend** | React.js, React Router DOM, Redux Toolkit, React Redux |
| **Backend** | Node.js, Express.js (v5), Nodemailer, Cors, Dotenv |
| **Database** | MongoDB, Mongoose |
| **Authentication & Security** | JSON Web Token (JWT), bcryptjs |
| **Payments & Media** | Razorpay API, Cloudinary, Multer |
| **DevOps & Utilities** | Concurrently, Nodemon |

---

## 📁 Project Structure

```text
NovaCart/
├── frontend/             # React Client Application
│   ├── src/
│   │   ├── pages/        # Route Pages (Shop, Cart, Profile, etc.)
│   │   └── redux/        # Redux Slices & Store Configuration
│   └── package.json
├── backend/              # Node.js Express API Server
│   ├── server.js         # Entry Point
│   ├── seed.js           # Database Seeder Script
│   └── package.json
├── package.json          # Root Scripts for Monorepo-style Management
└── README.md
```

---

## ⚡ Getting Started Locally

Follow these steps to set up and run NovaCart on your local system.

### Prerequisites
- [Node.js](https://nodejs.org/) installed (v16+ recommended)
- [MongoDB](https://www.mongodb.com/) running locally or a MongoDB Atlas connection string
- A Cloudinary account (for image uploads)
- A Razorpay developer account (for testing payments)

### 1. Clone the Repository
```bash
git clone [https://github.com/dipanshu-s7/NovaCart.git](https://github.com/dipanshu-s7/NovaCart.git)
cd NovaCart
```

### 2. Install Dependencies
Run the root script to automatically install dependencies for root, backend, and frontend:
```bash
npm run install-all
```

### 3. Environment Variables Configuration
Create a `.env` file inside the `backend/` directory and configure the following variables:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key

# Cloudinary Configuration
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret

# Razorpay Configuration
RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_key_secret

# Nodemailer Configuration
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_email_app_password
```

### 4. Seed Initial Data (Optional)
To populate the database with dummy products, run:
```bash
npm run seed
```

### 5. Run the Application
Start both the Backend API server and Frontend React app concurrently using a single command from the root directory:

```bash
npm run dev
```

- **Frontend Application**: `http://localhost:3000`
- **Backend API Server**: `http://localhost:5000`

---

## 📜 Available Scripts

In the root directory, you can run:

- `npm run install-all`: Installs all dependencies across root, backend, and frontend.
- `npm run dev`: Starts backend (`localhost:5000`) and frontend (`localhost:3000`) simultaneously.
- `npm run start:backend`: Runs the backend development server using `nodemon`.
- `npm run start:frontend`: Runs the React frontend development server.
- `npm run build`: Builds the frontend app for production.

---

## 👤 Author

**Deepanshu Suryavanshi**
- GitHub: [@dipanshu-s7](https://github.com/dipanshu-s7)

---

## 📄 License
This project is open-source and available under the [ISC License](LICENSE).
