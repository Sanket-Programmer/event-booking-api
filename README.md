<h2>Event Booking API</h2>
<p>A RESTful API built with Express.js, MongoDB, and JWT that allows:</p>
<ul>
   <li>Users to register, log in, and book events.</li>
   <li>Admins to manage events.</li>
   <li>Secure authentication and authorization using JSON Web Tokens (JWT).</li>
</ul>

<p>Checkout the API here: </p>

<h3>Let's Get Started !!!!</h3>

<p>1. Clone the repository from github install all the dependencies by using npm install</p>
<p>2. Create a .env file in the root directory and add MONGO_URI=mongodb://localhost:27017/eventbooking & JWT_SECRET=your_jwt_secret. Replace your_jwt_secret with a secure random string.</p>
<p>3. Open the terminal and start the server using node index.js. Server runs on https://localhost:3000</p>

<h3>API Endpoints</h3>
<p>Auth Routes</p>
<ul>
   <li>POST - /api/auth/register - Register a new user and get token</li>
   <li>POST - /api/auth/login - Login and get token</li>
</ul>

<p>Event Routes (Requires Authorization: Bearer <token> )</p>
<ul>
   <li>GET - /api/events - list all events - for all users</li>
   <li>POST - /api/events - create new event - admin only</li>
   <li>PUT - /api/events/:id - update an event - admin only</li>
   <li>POST - /api/events/:id - delete an event - admin only</li>
</ul>

<p>Bookings Routes (Requires Authorization: Bearer <token> )</p>
<ul>
   <li>GET - /api/bookings - get user bookings</li>
   <li>POST - /api/bookings/:eventId - book an event</li>
   <li>DELETE - /api/bookings/:bookingId - cancel a booking</li>
</ul>

<h3>Testing</h3>
<p>Use Postman or any other REST client</p>
<ul>
   <li>Register or log in to get a JWT token.</li>
   <li>Include it in Authorization headers</li>
   <li>Test Event and Booking routes as user or admin.<li>
</ul>

<p>Note: By default, all users are created with the user role. To make a user an admin, update their role manually by adding role field in the json while registering.</p>