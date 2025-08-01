# 🛍️ Nxt Trendz - Full Stack eCommerce App (React)

A complete eCommerce app built with **React.js**, offering **login authentication**, **protected routes**, **advanced product filters**, *detailed product pages*, and **cart functionality**.

---

## 🔗 Live Demo

[**View Live Project**](https://pakupodisathish.github.io/Nxtrendz/)

---
## 📸 Screenshots

### 🔐 Login Page  
![Login](https://github.com/user-attachments/assets/2de0abe3-138c-4669-8b49-774c3542a7c2)

### 🏠 Home Page  
![Home](https://github.com/user-attachments/assets/2104b786-9009-4f72-bfa5-16109f000317)

### 🛍️ Products Listing  page part 1 
![Products](https://github.com/user-attachments/assets/2180bffd-296d-4c38-b821-56f0b6540e57)

### 🛍️ Products Listing  page part 2
![Products](https://github.com/user-attachments/assets/e7ea3430-a97e-45f8-a61b-63cc4ca80187)

### 📦 Product Details  
![Product Details](https://github.com/user-attachments/assets/6f96112e-6e16-4c52-9e3a-59f29f534540)

### 🛒 Cart Page  
![Cart](https://github.com/user-attachments/assets/a0941c79-43b2-4e0a-97da-48b3c156cd2a)

---

## 🚀 Features

### 🔒 Authentication & Protected Routes
- Login with `username` and `password`
- JWT saved in cookies for session management
- Routes `/`, `/products`, `/products/:id`, and `/cart` are protected
- Unauthorized users redirected to `/login`

### 🧰 Product Filters Group
- Filter products by:  
  - Category  
  - Rating  
  - Search input
- Loader and error UI
- “No Products Found” message for empty results

### 📦 Product Details Page
- Dynamic route `/products/:id`
- Quantity counter (increment/decrement)
- Similar Products section
- Retry on API failure

### 🛒 Cart
- Add / Remove / Update product quantity
- Total order summary

---

## 🛠️ Tech Stack

- React.js
- React Router DOM
- JavaScript (ES6+)
- CSS3
- js-cookie
- React Icons
- React Context API

---

## 📁 Folder Structure

src/
├── App.js
├── index.js
└── components/
├── LoginForm/
├── Home/
├── Products/
├── Cart/
├── ProductCard/
├── ProductItemDetails/
├── SimilarProductItem/
├── FiltersGroup/
├── AllProductsSection/
└── ProtectedRoute/


---

## 🔧 Getting Started

### ✅ Installation

Clone the repository
git clone https://github.com/your-username/nxt-trendz.git
cd nxt-trendz

Install dependencies
npm install

Start the development server
npm start

Visit http://localhost:3000 in your browser

---

## 🔐 API Endpoints

### 🟢 Login API

- **URL:** `https://apis.ccbp.in/login`  
- **Method:** `POST`
- **Request Body:**
{
"username": "rahul",
"password": "rahul@2021"
}

text
- **Response:**
{
"jwt_token": "your-token"
}


### 🟢 Products List API

- **URL:** `https://apis.ccbp.in/products`
- **Method:** `GET`
- **Query Params:** `title_search`, `category`, `rating`

### 🟢 Product Details API

- **URL:** `https://apis.ccbp.in/products/:id`
- **Method:** `GET`
- **Headers:** JWT token (from cookie)

---

## 📦 GitHub Pages Deployment

1. **Update `package.json`:**
"homepage": "https://your-username.github.io/nxt-trendz",
"scripts": {
"predeploy": "npm run build",
"deploy": "gh-pages -d build"
}



2. **Install `gh-pages`:**
npm install gh-pages --save-dev



3. **Deploy to GitHub Pages:**
npm run deploy



---

## 👤 Test User Credentials

### ✅ Prime User  
- **Username:** `rahul`  
- **Password:** `rahul@2021`

### ❌ Non-Prime User  
- **Username:** `raja`  
- **Password:** `raja@2021`

---


## 📄 License

This project is licensed under the [MIT License](./LICENSE).

---

## 🙌 Acknowledgements

Built as part of the NxtWave CCBP 4.0 Full Stack Developer program.  
Uses CCBP public APIs for learning and demo purposes.

---

## ✨ Author

pakupodi sathish
GitHub: [@pakupodisathish](https://github.com/pakupodisathish)
