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
**Endpoint:** `GET /post/list`  

**Response:**  
- `200 OK` – Returns an array of posts

---

## 3. 🔍 Get Post Details  
**Endpoint:** `GET /post/:id`  
**Params:**
- `id` – Post ID

**Response:**
- `200 OK` – Post detail data
- `404 Not Found` – If post does not exist

---

## 4. ❌ Delete Post  
**Endpoint:** `DELETE /post/delete/:id`  
**Params:**
- `id` – Post ID

**Response:**
- `200 OK` – Confirmation message
- `404 Not Found` – If post does not exist

---

## 5. ♻️ Update Post  
**Endpoint:** `PATCH /post/update/:id`  
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
- `200 OK` – Updated post data
- `404 Not Found` – If post does not exist

---

### 📌 Notes:
- All endpoints are prefixed with `/post`
- Use `form-data` for image uploads
- Ensure `category` IDs are valid and pre-created

---

**Developed by:** ✨ *Gautam Technologies*  
**Base URL:** `https://yourdomain.com/api` (Replace with actual base URL)
