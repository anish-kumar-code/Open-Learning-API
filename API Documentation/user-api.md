# 📌 User API Documentation

This document provides a complete guide for working with the **User APIs**, including endpoints for user registration, login, profile access, listing users, and deleting users.

---

## 1. 📝 Register User  
**Method:** `POST`  
**Endpoint:** `/api/user/register`  
**Headers:**  
- `Content-Type: application/json`

**Body (JSON):**
- `name` – _String_ (e.g., `Anish`)
- `email` – _String_ (e.g., `a22@gmail.com`)
- `password` – _String_ (e.g., `123456`)
- `phone` – _Number_ (e.g., `1234567893`)

**Response (Success):**  
- `Status Code` – 200  
- `Message` – User registration successful  
- `user` – Registered user object

```json
{
    "statusCode": 200,
    "message": "User registration done",
    "user": {
        "name": "Anish",
        "email": "a223@gmail.com",
        "phone": "1234567894",
        "password": "$2b$10$kQoS0CYjuZwEj1vxPyudru52NkzcKjU9oGGELYiFoUkP/e7WgKetO",
        "_id": "680ca858f4f7a0bc1bf6e640",
        "__v": 0
    }
}
```

**Response (Error - Already Registered):**  
- `Status Code` – 400  
- `Message` – User already registered with this email

```json
{
    "statusCode": 400,
    "message": "User already registered with this email"
}
```

---

## 2. 🔐 User Login  
**Method:** `POST`  
**Endpoint:** `/api/user/login`  
**Headers:**  
- `Content-Type: application/json`

**Body (JSON):**
- `email` – _String_ (e.g., `a@gmail.com`)
- `password` – _String_ (e.g., `123456`)

**Response:**  
- `Status Code` – 200  
- `Message` – User LoggedIn  
- `token` – _JWT token for authentication_

```json
{
    "statusCode": 200,
    "message": "User LoggedIn",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

---

## 3. 👤 Get User Profile  
**Method:** `GET`  
**Endpoint:** `/api/user/profile`  
**Headers:**  
- `Authorization` – Bearer Token (JWT received after login)

**Response:**  
- `Status Code` – 200  
- `Message` – User Profile  
- `user` – User details object

```json
{
    "statusCode": 200,
    "message": "User Profile",
    "user": {
        "_id": "680b94e12541accfb44618ca",
        "name": "Anish",
        "email": "a@gmail.com",
        "phone": "1234567890",
        "__v": 0
    }
}
```

---

## 4. 📃 Get All Users (Admin Only)  
**Method:** `GET`  
**Endpoint:** `/api/admin/user/list`  
**Headers:**  
- `Authorization` – Bearer Token (Admin token)

**Response:**  
- `Status Code` – 200  
- `Message` – User list  
- `length` – Number of users  
- `users` – Array of user objects

```json
{
    "statusCode": 200,
    "message": "User list",
    "length": 1,
    "users": [
        {
            "_id": "680b94e12541accfb44618ca",
            "name": "Anish",
            "email": "a@gmail.com",
            "phone": "1234567890",
            "password": "$2b$10$RsY.F7sovhUGhsD9zozQcuOiIUO3MPL1C8Sqcdl3mtPb03FDod0wi",
            "__v": 0
        }
    ]
}
```

---

## 5. ❌ Delete User (Admin Only)  
**Method:** `DELETE`  
**Endpoint:** `/api/admin/user/delete/:id`  
**Params:**
- `id` – User ID to be deleted

**Headers:**  
- `Authorization` – Bearer Token (Admin token)

**Response:**  
- `Status Code` – 200  
- `Message` – User deleted

```json
{
    "statusCode": 200,
    "message": "User deleted"
}
```

---

### 📌 Notes:
- Always secure protected routes (`/profile`, `/admin/user/list`, `/admin/user/delete/:id`) using a valid Bearer Token (JWT).
- Passwords are stored securely in hashed form using **bcrypt**.
- Admin-only endpoints require an **admin-authenticated token**.

---

Made with ❤️ by **[Anish Kumar]**  
**Base URL:** `https://test-api-pz0o.onrender.com/`

---

### 🌐 **Connect with Me:**
- [LinkedIn](https://www.linkedin.com/in/itzz-mr-anish/)
- [Instagram](https://www.instagram.com/itzz.mr.anish/)
- [Portfolio](#)