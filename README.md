# 🛒 Full-Stack E-Commerce Website

![React](https://img.shields.io/badge/React-Frontend-blue)
![Node.js](https://img.shields.io/badge/Node.js-Express-green)
![MongoDB](https://img.shields.io/badge/MongoDB-Database-brightgreen)
![JWT](https://img.shields.io/badge/Auth-JWT-orange)
![License](https://img.shields.io/badge/License-MIT-blue)

A full-stack MERN (MongoDB, Express.js, React.js, Node.js) e-commerce web application that provides secure user authentication, personalized shopping carts, real-time product search, and Razorpay payment integration. The project is currently under active development, with additional features such as category filtering and order management planned for future releases.

---

# 🚀 Live Demo

**Live Website:**
https://e-commerce-frontend-98ck.onrender.com/

**Repository:**
https://github.com/rajashreemukherjee123/E-commerce_website

---

# 📌 Features

* User Registration & Login
* Secure JWT Authentication & Authorization
* Persistent Login using JWT Token
* Password Encryption using bcrypt
* Personalized Shopping Cart
* User-specific cart (each user can access only their own cart)
* Add products to cart
* Remove products from cart
* Dynamic cart quantity update with plus/minus controls
* Real-time dynamic product search with instant suggestions
* Razorpay payment gateway integration (Test Mode)
* Responsive User Interface
* RESTful API Architecture

---

# 🛠️ Tech Stack

## Frontend

* React.js
* React Router DOM
* Axios
* JavaScript (ES6+)
* Material UI
* HTML5
* CSS3

## Backend

* Node.js
* Express.js
* MongoDB
* Mongoose

## Authentication & Security

* JWT (JSON Web Token)
* bcrypt

## Payment Integration

* Razorpay SDK

---

# 🔐 Authentication

* User registration with encrypted passwords
* Secure login using JWT
* Protected backend routes
* Persistent authentication using JWT Token
* Each user can only access and manage their own shopping cart

---

# 🛒 Shopping Cart Workflow

1. User signs up.
2. User logs in.
3. JWT token is generated after successful login.
4. User can browse available products.
5. Products can be added to the shopping cart.
6. Cart data is stored separately for every authenticated user.
7. Users can:

   * Increase quantity
   * Decrease quantity
   * Remove products
8. User proceeds to checkout.
9. Payment is processed through Razorpay Test Gateway.

---

# 🔍 Search Functionality

* Dynamic real-time product search
* Matching product names appear instantly while typing
* Search suggestions update without page refresh

---

# 💳 Payment Integration

* Razorpay Test Mode Integration
* Secure payment flow

---

# 📂 Project Structure

```
E-commerce_website/
│
├── FrontEnd_E-commerce_website/
│   └── E_comProject/
│
├── BackEnd_E-commerce_website/
│
├── .gitignore
│
└── README.md
```

---

# 📦 Installation

## Clone the Repository

```bash
git clone https://github.com/rajashreemukherjee123/E-commerce_website.git
```

## Navigate to the Project Folder

```bash
cd E-commerce_website
```

---

## Install Frontend

```bash
cd FrontEnd_E-commerce_website/E_comProject
npm install
npm run dev
```

---

## Install Backend

```bash
cd BackEnd_E-commerce_website
npm install
npm run dev
```

---

# ⚙️ Environment Variables

Create a **.env** file inside the **BackEnd_E-commerce_website** folder.

```env
PORT=3000

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_jwt_secret

RAZORPAY_KEY_ID=your_key_id

RAZORPAY_KEY_SECRET=your_key_secret
```

---

## 🚧 Upcoming Features

- [ ] Advanced Dynamic Category Filtering
- [ ] Multiple Product Categories
- [ ] Inventory Expansion
- [ ] Wishlist
- [ ] Order Management System
- [ ] Order History
- [ ] User Profile Management
- [ ] Admin Dashboard
- [ ] Product Reviews & Ratings

---

# 👨‍💻 Author

**Rajashree Mukherjee**

---

If you like this project, feel free to ⭐ the repository.

