# 📌 Category API Documentation

This document provides a comprehensive guide for working with the Category APIs, including endpoints for adding, listing, retrieving details, updating, and deleting categories.

---

## 1. 📝 Add Category  
**Method:** `POST`  
**Endpoint:** `/api/admin/category/add`  
**Headers:**  
- `Content-Type: application/json`

**Body (JSON):**
- `name` – _String_ (e.g., `Category 1`)

**Response:**  
- `Status Code` – 200  
- `Message` – Category added  
- `category` – Category object  
    ```json
    {
        "name": "Category 2",
        "status": true,
        "_id": "680c8ed2feb8c845aaf194a9",
        "__v": 0
    }
    ```

---

## 2. 📃 Get All Categories  
**Method:** `GET`  
**Endpoint:** `/api/admin/category/list`  

**Response:**  
- `Status Code` – 200  
- `Message` – Category list  
- `allCategory` – Array of categories  
    ```json
    [
        {
            "_id": "680bd50fbb267edeaeafaf6c",
            "name": "Category 1",
            "status": true,
            "__v": 0
        }
    ]
    ```

---

## 3. 🔍 Get Category Details  
**Method:** `GET`  
**Endpoint:** `/api/admin/category/:id`  
**Params:**
- `id` – Category ID

**Response:**
- `Status Code` – 200  
- `Message` – Category details  
- `category` – Category object  
    ```json
    {
        "_id": "680bd50fbb267edeaeafaf6c",
        "name": "Category 1",
        "status": true,
        "__v": 0
    }
    ```

---

## 4. ❌ Delete Category  
**Method:** `DELETE`  
**Endpoint:** `/api/admin/category/delete/:id`  
**Params:**
- `id` – Category ID

**Response:**
- `Status Code` – 200  
- `Message` – Category deleted  

---

## 5. ♻️ Update Category  
**Method:** `PATCH`  
**Endpoint:** `/api/admin/category/update/:id`  
**Headers:**
- `Content-Type: application/json`

**Params:**
- `id` – Category ID

**Body (JSON):**
- `name` – _String_ (e.g., `Updated Category`)

**Response:**
- `Status Code` – 200  
- `Message` – Category updated  
- `category` – Updated category object  
    ```json
    {
        "_id": "680bd50fbb267edeaeafaf6c",
        "name": "Category 1",
        "status": true,
        "__v": 0
    }
    ```

---

### 📌 Notes:
- Ensure the `name` field is a valid category name.
- All category updates are applied to the specified category ID.

---

Made with ❤️ by **[Anish Kumar]** <br>  
**Base URL:** `https://test-api-pz0o.onrender.com/`

### 🌐 **Connect with Me:**
- [LinkedIn](https://www.linkedin.com/in/itzz-mr-anish/)  
- [Instagram](https://www.instagram.com/itzz.mr.anish/)  
- [Portfolio](#)