<h1>Cricket Management Club - MERN Stack Project</h1>

<h2>Overview</h2>
<p>This is a full-stack Cricket Management Club application built using the MERN stack (MongoDB, Express.js, React, and Node.js). It allows users to manage cricket teams, players, matches, and tournaments. The frontend is built with React, and the backend is powered by Node.js and Express.js, with MongoDB as the database.</p>

<h2>Features</h2>
<ul>
  <li><strong>Team Management:</strong> Create, update, and delete cricket teams.</li>
  <li><strong>Player Management:</strong> Add, update, and remove players from teams.</li>
  <li><strong>Match Scheduling:</strong> Schedule and manage cricket matches.</li>
  <li><strong>Tournament Management:</strong> Organize and track cricket tournaments.</li>
  <li><strong>User Authentication:</strong> Register and login functionality with JWT (JSON Web Tokens).</li>
  <li><strong>Responsive Design:</strong> Built with React and styled using CSS.</li>
</ul>

<h2>Technologies Used</h2>
<ul>
  <li><strong>Frontend:</strong> React, React Router, Axios, CSS</li>
  <li><strong>Backend:</strong> Node.js, Express.js, MongoDB, Mongoose</li>
  <li><strong>Authentication:</strong> JSON Web Tokens (JWT)</li>
  <li><strong>Tools:</strong> Postman (for API testing), Git (for version control)</li>
</ul>

<h2>Prerequisites</h2>
<p>Before running the project, ensure you have the following installed:</p>
<ul>
  <li>Node.js (v16 or later)</li>
  <li>MongoDB (local or cloud-based)</li>
  <li>Git (optional)</li>
</ul>

<h2>Getting Started</h2>

<h3>1. Clone the Repository</h3>
<pre><code>git clone https://github.com/your-username/cricket-management-club.git
cd cricket-management-club</code></pre>

<h3>2. Set Up the Backend</h3>
<ol>
  <li>Navigate to the <code>backend</code> folder:
    <pre><code>cd backend</code></pre>
  </li>
  <li>Install dependencies:
    <pre><code>npm install</code></pre>
  </li>
  <li>Create a <code>.env</code> file in the <code>backend</code> folder and add the following environment variables:
    <pre><code>PORT=5000
MONGO_URI=mongodb://localhost:27017/cricketclub
JWT_SECRET=your_jwt_secret_key</code></pre>
  </li>
  <li>Start the backend server:
    <pre><code>npm start</code></pre>
    The backend will run on <code>http://localhost:5000</code>.
  </li>
</ol>

<h3>3. Set Up the Frontend</h3>
<ol>
  <li>Navigate to the <code>frontend</code> folder:
    <pre><code>cd ../frontend</code></pre>
  </li>
  <li>Install dependencies:
    <pre><code>npm install</code></pre>
  </li>
  <li>Start the React development server:
    <pre><code>npm start</code></pre>
    The frontend will run on <code>http://localhost:3000</code>.
  </li>
</ol>

<h2>Project Structure</h2>

<h3>Backend</h3>
<pre><code>backend/
├── config/            # Database and JWT configuration
├── controllers/       # Logic for handling routes
├── models/            # MongoDB models (e.g., Team, Player, Match)
├── routes/            # API routes
├── middleware/        # Authentication middleware
├── .env               # Environment variables
├── server.js          # Entry point for the backend
</code></pre>

<h3>Frontend</h3>
<pre><code>frontend/
├── public/            # Static assets
├── src/
│   ├── components/    # Reusable React components (e.g., TeamCard, PlayerCard)
│   ├── pages/         # Pages (e.g., Home, Teams, Matches, Tournaments)
│   ├── utils/         # Utility functions (e.g., API calls)
│   ├── App.js         # Main application component
│   ├── index.js       # Entry point for the frontend
├── .env               # Environment variables (if needed)
</code></pre>

<h2>API Endpoints</h2>

<h3>Authentication</h3>
<ul>
  <li><strong>Register User:</strong> <code>POST /api/auth/register</code></li>
  <li><strong>Login User:</strong> <code>POST /api/auth/login</code></li>
</ul>

<h3>Teams</h3>
<ul>
  <li><strong>Get All Teams:</strong> <code>GET /api/teams</code></li>
  <li><strong>Create a Team:</strong> <code>POST /api/teams</code></li>
  <li><strong>Update a Team:</strong> <code>PUT /api/teams/:id</code></li>
  <li><strong>Delete a Team:</strong> <code>DELETE /api/teams/:id</code></li>
</ul>

<h3>Players</h3>
<ul>
  <li><strong>Get All Players:</strong> <code>GET /api/players</code></li>
  <li><strong>Add a Player:</strong> <code>POST /api/players</code></li>
  <li><strong>Update a Player:</strong> <code>PUT /api/players/:id</code></li>
  <li><strong>Delete a Player:</strong> <code>DELETE /api/players/:id</code></li>
</ul>

<h3>Matches</h3>
<ul>
  <li><strong>Get All Matches:</strong> <code>GET /api/matches</code></li>
  <li><strong>Schedule a Match:</strong> <code>POST /api/matches</code></li>
  <li><strong>Update a Match:</strong> <code>PUT /api/matches/:id</code></li>
  <li><strong>Delete a Match:</strong> <code>DELETE /api/matches/:id</code></li>
</ul>


<h2>Contributing</h2>
<p>We welcome contributions! Please follow these steps:</p>
<ol>
  <li>Fork the repository.</li>
  <li>Create a new branch (<code>git checkout -b feature/YourFeatureName</code>).</li>
  <li>Commit your changes (<code>git commit -m 'Add some feature'</code>).</li>
  <li>Push to the branch (<code>git push origin feature/YourFeatureName</code>).</li>
  <li>Open a pull request.</li>
</ol>

<h2>License</h2>
<p>This project is licensed under the MIT License. See the <a href="LICENSE">LICENSE</a> file for details.</p>

<h2>Support</h2>
<p>If you encounter any issues or have questions, please open an issue on GitHub or contact the maintainers.</p>

<p>Happy coding! 🚀</p>
