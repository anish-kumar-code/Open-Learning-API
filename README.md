# 🌐 Open Learning API – Node.js + Express + MongoDB

Welcome to the **Open Learning API**, a free and open-source RESTful API built using **Node.js**, **Express**, **MongoDB**, and **Cloudinary**. This API is publicly available and free to use for learning, testing, or integrating into your frontend projects.

---

## 🚀 Features

- Node.js + Express-based REST API
- MongoDB for data storage
- Cloudinary integration for image uploads
- Free hosting on Render
- Open for all learners and developers

---

## 📦 Tech Stack

- **Backend**: Node.js, Express
- **Database**: MongoDB (Mongoose)
- **Image Upload**: Cloudinary
- **Hosting**: Render (free tier)

---

## 🔗 API Base URL

```
https://test-api-pz0o.onrender.com
```

---

## 🛠️ Example Endpoints

```http
GET    /api/admin/category/list         - Get all category
GET    /api/admin/category/:id          - Get post list by category
GET    /api/admin/post/list             - Get all posts
GET    /api/admin/post/:id              - Get single post details
POST   /api/admin/post/add              - Add a new post
DELETE /api/admin/post/delete/:id       - Delete post
PATCH  /api/admin/post/update/:id       - Update post
```

> ⚠️ For more details, visit the API Documentation folder inside the project.

---

## 📁 Project Structure

```
├── .env                      # Environment variables
├── index.js                  # Entry point of the application
├── src/
│   ├── app.js                # Main Express app setup
│   ├── controllers/          # Route handler logic
│   ├── models/               # Mongoose schemas/models
│   ├── routes/               # API route definitions
│   ├── middlewares/          # Middlewares (auth, validations, etc.)
│   └── utils/                # Utility configurations
│       ├── cloudinary.js     # Cloudinary image upload config
│       ├── connectDB.js      # MongoDB connection setup
│       └── multer.js         # File upload setup with Multer
```

---

## 📌 How to Use This API

- Clone the repository (if available) or directly hit the endpoints
- Use tools like **Postman** or **Thunder Client** for testing
- Integrate the endpoints into any frontend project (React, Vue, etc.)
- Make sure to handle API keys (e.g., for Cloudinary) securely in your environment

---

---

## 🙌 Author

Made with ❤️ by **[Anish Kumar]**

- 🌐 Portfolio: [#]
- 🐙 GitHub: [https://github.com/anish-kumar-code]
- 💼 LinkedIn: [https://www.linkedin.com/in/itzz-mr-anish/]

---

## 🤝 Contributions

Feel free to contribute by:
- Forking the repo
- Creating pull requests
- Submitting issues or improvements

Let's learn and grow together 🚀
