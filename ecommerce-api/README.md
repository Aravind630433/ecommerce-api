# 🛒 Simple E-commerce API – AdaptNXT Assignment

This is a full stack E-commerce project using Node.js, Express, MongoDB, and a simple HTML/JS frontend. Users can register, log in, view products, add items to cart, and place orders.

—

## ✨ Features

- ✅ User registration & login (JWT authentication)
- ✅ Admin & Customer roles
- ✅ Product listing
- ✅ Cart management
- ✅ Order placement
- ✅ Admin can add products (via API/Postman)
- ✅ Simple HTML+JS frontend

—

## 🧰 Tech Stack

- Backend: Node.js + Express.js
- Database: MongoDB (local or Atlas)
- Frontend: HTML, JavaScript (fetch API)
- API Testing: Postman
- Deployment (optional): Render + GitHub Pages

—

## 📂 Project Structure

ecommerce-api/
├── app.js
├── .env
├── models/
│ ├── User.js
│ ├── Product.js
│ ├── Cart.js
│ └── Order.js
├── routes/
│ ├── auth.js
│ ├── products.js
│ ├── cart.js
│ └── orders.js
├── controllers/
│ ├── authController.js
│ ├── productController.js
│ ├── cartController.js
│ └── orderController.js
├── public/
│ ├── index.html
│ └── script.js
└── README.md


—

## 🚀 How to Run

1. Install dependencies:

   ```bash
   npm install

    Set up environment variables:

    Create a file named .env and add:

PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/ecommerce
JWT_SECRET=adaptsecretkey

Start server:

    npx nodemon app.js

    Visit: http://localhost:5000

—
📦 API Endpoints

Authentication:

    POST /api/auth/register

    POST /api/auth/login

Products:

    GET /api/products

    POST /api/products (admin only)

Cart:

    GET /api/cart

    POST /api/cart

    DELETE /api/cart/:productId

Orders:

    GET /api/orders

    POST /api/orders

—
🧪 Testing

Use Postman to:

    Register/login

    Get auth token

    Add products (as admin)

    View products, add to cart, place orders

Or test everything using the HTML frontend at http://localhost:5000

—
👤 Created by

Aravind Sunkenapally