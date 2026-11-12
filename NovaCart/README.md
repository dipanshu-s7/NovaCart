# NovaCart

NovaCart is my full-stack shopping application. I built it with a React storefront and an Express API backed by MongoDB. Customers can browse products, manage a cart, sign in, and place orders; administrators can manage the catalog and orders.

## What’s inside

- **Storefront:** React, React Router, and Redux Toolkit for cart state
- **API:** Node.js and Express
- **Data:** MongoDB with Mongoose models
- **Authentication:** JWT-based sessions and password hashing
- **Admin tools:** Product, user, order, and analytics views
- **Integrations:** Cloudinary image uploads, Gmail email, and Razorpay payments

## Run locally

### Prerequisites

- Node.js and npm
- A MongoDB instance (local or hosted)

### Install dependencies

From the project root:

```bash
npm run install-all
```

### Configure the backend

Copy `backend/.env.example` to `backend/.env`, then set the values for your environment:

```env
PORT=5000
NODE_ENV=development
MONGO_URI=mongodb://127.0.0.1:27017/novacart
JWT_SECRET=replace_with_a_long_random_secret
FRONTEND_URL=http://localhost:3000

# Required only for the corresponding integrations
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_key_secret
GMAIL_USER=your_email@gmail.com
GMAIL_PASS=your_gmail_app_password
```

`MONGO_URI` must point to a reachable database, and `JWT_SECRET` must be a private, random value. Cloudinary, Razorpay, and Gmail credentials are only needed when using those integrations. Keep `backend/.env` private; do not commit real credentials.

### Start the app

From the project root:

```bash
npm run dev
```

The storefront runs at [http://localhost:3000](http://localhost:3000), and the API runs at [http://localhost:5000](http://localhost:5000). The frontend proxies `/api` requests to the backend.

## Database seed data

To load the included demo catalog and admin account:

```bash
npm run seed
```

**Warning:** this command deletes all existing users and products in the configured database before inserting the demo data. Only run it on a disposable development database or after backing up data.

The seeded admin account is `admin@novacart.com` with password `password123`. It is for local development only. Change or remove it before using the app in a shared or production environment.

## API collection

Import [`NovaCart_Postman_Collection.json`](./NovaCart_Postman_Collection.json) into Postman to try the authentication, product, order, payment, and admin endpoints.

## Production note

Set `NODE_ENV=production` when running the backend to serve the frontend build from `frontend/build`. Build the frontend with:

```bash
npm run build
```

Set production environment variables for the hosting platform and use a production MongoDB database. Never use the seeded admin credentials or development secrets in production.
