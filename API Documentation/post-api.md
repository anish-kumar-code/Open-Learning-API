# 📌 Post API Documentation

This document provides a comprehensive guide for working with the Post APIs, including endpoints for adding, listing, retrieving details, updating, and deleting posts.

---

## 1. 📝 Add Post  
**Method:** `POST`  
**Endpoint:** `/api/admin/post/add`  
**Headers:**  
- `Content-Type: multipart/form-data`

**Body (form-data):**
- `title` – _String_ (e.g., `Post 6`)
- `description` – _String_ (e.g., `Description`)
- `category` – _Category ID_ (e.g., `680bdc21439da83ed3c327ce`)
- `image` – _File_ (e.g., Upload file)

**Response:**  
- `Status Code` – 200  
- `Message` – Post added  
```json
{
  "statusCode": 200,
  "message": "Post added",
  "post": {
    "title": "Post 6",
    "image": {
      "url": "https://res.cloudinary.com/docogdzqh/image/upload/v1745654774/test-e-commerce/gqrsm2uxzf42dlluah6b.jpg",
      "public_id": "test-e-commerce/gqrsm2uxzf42dlluah6b"
    },
    "description": "Description",
    "category": "680bdc21439da83ed3c327ce",
    "status": true,
    "_id": "680c93fa5b0db50ec9134f2f",
    "date": "2025-04-26T08:06:18.899Z",
    "__v": 0
  }
}
```

---

## 2. 📃 Get All Posts  
**Method:** `GET`  
**Endpoint:** `/api/admin/post/list`  

**Response:**  
- `Status Code` – 200  
- `Message` – Post list  
- `allPosts` – Array of posts  
```json
{
  "statusCode": 200,
  "message": "Post list",
  "length": 8,
  "allPosts": [
    {
      "image": {
        "url": "https://res.cloudinary.com/docogdzqh/image/upload/v1745641048/test-e-commerce/j4wi40hze0emnxbogpxb.jpg",
        "public_id": "test-e-commerce/j4wi40hze0emnxbogpxb"
      },
      "_id": "680c5e5d881058ed1cf8bb11",
      "title": "Post 1",
      "description": "Description",
      "category": "680bdc21439da83ed3c327ce",
      "status": true,
      "date": "2025-04-26T04:17:33.716Z",
      "__v": 0
    }
  ]
}
```

---

## 3. 🔍 Get Post Details  
**Method:** `GET`   
**Endpoint:** `/api/admin/post/:id`  
**Params:**
- `id` – Post ID

**Response:**
- `Status Code` – 200  
- `Message` – Post details  
- `post` – Object of post details  
```json
{
  "statusCode": 200,
  "message": "Post details",
  "post": {
    "image": {
      "url": "https://res.cloudinary.com/docogdzqh/image/upload/v1745641048/test-e-commerce/j4wi40hze0emnxbogpxb.jpg",
      "public_id": "test-e-commerce/j4wi40hze0emnxbogpxb"
    },
    "_id": "680c5e5d881058ed1cf8bb11",
    "title": "Post 1",
    "description": "Description",
    "category": "680bdc21439da83ed3c327ce",
    "status": true,
    "date": "2025-04-26T04:17:33.716Z",
    "__v": 0
  }
}
```

---

## 4. ❌ Delete Post  
**Method:** `DELETE`  
**Endpoint:** `/api/admin/post/delete/:id`  
**Params:**
- `id` – Post ID

**Response:**
- `Status Code` – 200  
- `Message` – Post deleted  
```json
{
  "statusCode": 200,
  "message": "Post deleted"
}
```

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
```json
{
  "statusCode": 200,
  "message": "Post updated",
  "post": {
    "image": {
      "url": "https://res.cloudinary.com/docogdzqh/image/upload/v1745654941/test-e-commerce/oezveybry9ewr7kazner.jpg",
      "public_id": "test-e-commerce/oezveybry9ewr7kazner"
    },
    "_id": "680c5ea8881058ed1cf8bb19",
    "title": "Post 5",
    "description": "Change Description",
    "category": "680bdc21439da83ed3c327ce",
    "status": true,
    "date": "2025-04-26T04:18:48.680Z",
    "__v": 0
  }
}
```

---

### 📌 Notes:
- Use `form-data` for image uploads.
- Ensure `category` IDs are valid and pre-created.

---

Made with ❤️ by **[Anish Kumar]** <br>  
**Base URL:** `https://test-api-pz0o.onrender.com/`

### 🌐 **Connect with Me:**
- [LinkedIn](https://www.linkedin.com/in/itzz-mr-anish/)  
- [Instagram](https://www.instagram.com/itzz.mr.anish/)  
- [Portfolio](#)