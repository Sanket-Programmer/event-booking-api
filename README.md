# Event Booking System API

A RESTful API for managing users, events, and bookings using **Node.js**, **Express**, **MongoDB**, and **JWT** authentication.

---

## Features

- **User Authentication** (Register, Login) with JWT  
- **Admin Event Management** (Add, Update, Delete events)  
- **Event Booking** (View, Book, Cancel)  
- **Role-based Access Control** (User / Admin)  
- **MongoDB Storage** for users, events, and bookings  
- **Validation & Error Handling**  

---

<p>Checkout the API here: https://event-booking-api-1bim.onrender.com</p>

<h3>Let's Get Started !!!!</h3>

<p>1. Open Postman and copy the API link. With a GET method run the link. You should see "Welcome to Event Booking API"</p>
<p>2. Follow the api endpoints provided below to test the api</p>

## API Endpoints

### **Auth Routes**
| Method | Endpoint       | Description         
|--------|---------------|--------------------|
| POST   | `/api/auth/register` | Register and get token |
| POST   | `/api/auth/login`    | Login and get token | 

---

### **Event Routes**
| Method | Endpoint         | Description             | Auth Required | Role |
|--------|-----------------|------------------------|--------------|------|
| GET    | `/api/events`   | View all events         | ✅ | Any |
| POST   | `/api/events`   | Add event               | ✅ | Admin |
| PUT    | `/api/events/:id` | Update event           | ✅ | Admin |
| DELETE | `/api/events/:id` | Delete event           | ✅ | Admin |

---

### **Booking Routes**
| Method | Endpoint              | Description             | Auth Required | Role |
|--------|----------------------|------------------------|--------------|------|
| POST   | `/api/bookings/:eventId`  | Book an event           | ✅ | User |
| DELETE | `/api/bookings/:bookingId`  | Cancel booking          | ✅ | User |

---

## Authentication

- All protected routes require a **JWT token** in the `Authorization` header:
```
Authorization: Bearer <your_token_here>
```
- Tokens are provided during login and registering a new user.

---

## Example Request: Register User
```bash
POST /api/auth/register
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "123456"
}
```

**Response:**
```json
{
  "message": "Registered Successfully !!!",
  "token": "your_jwt_token"
}
```

---

## Example Request: Login
```bash
POST /api/auth/login
Content-Type: application/json

{
  "email": "john@example.com",
  "password": "123456"
}
```

**Response:**
```json
{
  "message": "Logged In Successfully !!!",
  "token": "your_jwt_token"
}
```

---

## Notes
- By default, all users are created with the `"user"` role. To make a user an admin, update their role manually by adding `"role"` field in the json after `"password"` field while registering.
- The token has an expiration time of 3600 sec.
