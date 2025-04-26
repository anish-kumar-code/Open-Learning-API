# 📌 Post API Documentation

This document provides a comprehensive guide for working with the Post APIs, including endpoints for adding, listing, retrieving details, updating, and deleting posts.

---

## 1. 📝 Add Post  
**Method:** `POST`  
**Endpoint:** `/api/admin/post/add`  
**Headers:**  
- `Content-Type: multipart/form-data`

**Body (form-data):**
- `title` – _String_ (e.g., `Post 5`)
- `description` – _String_ (e.g., `Description`)
- `category` – _Category ID_ (e.g., `680bdc21439da83ed3c327ce`)
- `image` – _File_ (e.g., Upload file)

**Response:**  
- `Status Code` – 200
- `Message` – Post added

---

## 2. 📃 Get All Posts  
**Method:** `GET`  
**Endpoint:** `/api/admin/post/list`  

**Response:**  
- `Status Code` – 200
- `Message` – Post list
- `allPosts` – array of posts

---

## 3. 🔍 Get Post Details
**Method:** `GET`   
**Endpoint:** `/api/admin/post/:id`  
**Params:**
- `id` – Post ID

**Response:**
- `Status Code` – 200
- `Message` – Post list
- `post` – object of post details

---

## 4. ❌ Delete Post 
**Method:** `DELETE`  
**Endpoint:** `/api/admin/post/delete/:id`  
**Params:**
- `id` – Post ID

**Response:**
- `Status Code` – 200
- `Message` – Post deleted

---

## 5. ♻️ Update Post  
**Method:** `PATCH` 
**Endpoint:** `/api/admin/post/update/:id`  
**Headers:**
- `Content-Type: multipart/form-data`

**Params:**
- `id` – Post ID

**Body (form-data):**
- `title` – _String_ (e.g., `Post 5`)
- `description` – _String_ (e.g., `Description`)
- `category` – _Category ID_ (e.g., `680bdc21439da83ed3c327ce`)
- `image` – _File_ (Upload new image)

**Response:**
- `Status Code` – 200
- `Message` – Post updated

---

### 📌 Notes:
- All endpoints are prefixed with `/post`
- Use `form-data` for image uploads
- Ensure `category` IDs are valid and pre-created

---

**Developed by:** ✨ *Anish Kumar*  
**Base URL:** `https://test-api-pz0o.onrender.com/`
