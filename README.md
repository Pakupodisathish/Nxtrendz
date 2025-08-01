# 🛍️ Nxt Trendz - Full Stack eCommerce App (React)

A complete eCommerce app built with **React.js**, offering **login authentication**, **protected routes**, **advanced product filters**, *detailed product pages*, and **cart functionality**.

---

## 🔗 Live Demo

[**View Live Project**](https://your-username.github.io/nxt-trendz)

---

## 📸 Screenshots

### 🔐 Login Page  
![Login](./screenshots/login.png)

### 🏠 Home Page  
![Home](./screenshots/home.png)

### 🛍️ Products Listing  
![Products](./screenshots/products.png)

### 📦 Product Details  
![Product Details](./screenshots/product-details.png)

### 🛒 Cart Page  
![Cart](./screenshots/cart.png)

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

text

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
text

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

text

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

text

2. **Install `gh-pages`:**
npm install gh-pages --save-dev

text

3. **Deploy to GitHub Pages:**
npm run deploy

text

---

## 👤 Test User Credentials

### ✅ Prime User  
- **Username:** `rahul`  
- **Password:** `rahul@2021`

### ❌ Non-Prime User  
- **Username:** `raja`  
- **Password:** `raja@2021`

---

## ⚠️ Developer Notes

- Components **must** stay in `src/components/`
- Folder names **must not** be changed
- Use **only** the given mock APIs
- Do not remove pre-filled template code

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
