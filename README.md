<h2>Event Booking API</h2>
<p>A RESTful API built with Express.js, MongoDB, and JWT that allows:</p>
<ul>
   <li>Users to register, log in, and book events.</li>
   <li>Admins to manage events.</li>
   <li>Secure authentication and authorization using JSON Web Tokens (JWT).</li>
</ul>

<p>Checkout the API here: https://event-booking-api-1bim.onrender.com </p>

<h3>Let's Get Started !!!!</h3>

<p>1. Open Postman and copy the API link. With a GET method run the link. You should see "Welcome to Event Booking API"</p>
<p>2. Follow the api routes provided below to test the api</p>

<h3>API Endpoints</h3>
<p>Auth Routes</p>
<ul>
   <li>POST - /api/auth/register - Register a new user and get token</li>
   <li>POST - /api/auth/login - Login and get token</li>
</ul>

<p>Event Routes (Requires Authorization: Bearer [token] )</p>
<ul>
   <li>GET - /api/events - list all events - for all users</li>
   <li>POST - /api/events - create new event - admin only</li>
   <li>PUT - /api/events/:id - update an event - admin only</li>
   <li>POST - /api/events/:id - delete an event - admin only</li>
</ul>

<p>Bookings Routes (Requires Authorization: Bearer [token] )</p>
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
   <li>Test Event and Booking routes as user or admin.</li>
</ul>

<h3>Registration & Login</h3>

<p>1. To register as a new user provide the information like name, email, password in json format. After successfull registration you will get a token. Use that token to access all the protected routes. The token has an expiration time of 3600 sec. After expiration you have to login.</p>

<p>2. To login provide email, password in json format. After successful login you will get a token. Use that token to access all the protected routes.</p>

<p>Note: By default, all users are created with the user role. To make a user an admin, update their role manually by adding "role" field in the json after "password" field while registering.</p>
