const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const PORT = 5000;

// In-memory "database" — data resets every time the server restarts.
const users = [
  { id: 1, name: "Demo User", email: "demo@example.com", mobile: "", password: "demo123", avatar: "" }
];
let nextId = 2;

function findUserByEmail(email) {
  return users.find(user => user.email === email);
}

function tokenForUser(user) {
  return `mock-token-${user.id}`;
}

function userIdFromToken(authHeader) {
  const match = /^mock-token-(\d+)$/.exec(authHeader || "");
  return match ? Number(match[1]) : null;
}

app.post("/api/users/register", (req, res) => {
  const { name, email, mobile, password } = req.body || {};

  if (!email || !password) {
    return res.status(400).json({ email: "Email and password are required" });
  }
  if (findUserByEmail(email)) {
    return res.status(409).json({ email: "Email is already registered" });
  }

  const user = { id: nextId++, name, email, mobile, password, avatar: "" };
  users.push(user);

  console.log(`[register] ${email}`);
  res.status(201).json({ name: user.name, email: user.email, avatar: user.avatar });
});

app.post("/api/users/login", (req, res) => {
  const { email, password } = req.body || {};
  const user = findUserByEmail(email);

  if (!user || user.password !== password) {
    return res.status(401).json({ password: "Invalid email or password" });
  }

  console.log(`[login] ${email}`);
  res.json({ token: tokenForUser(user) });
});

app.get("/api/users/current", (req, res) => {
  const userId = userIdFromToken(req.headers.authorization);
  const user = users.find(u => u.id === userId);

  if (!user) {
    return res.status(401).json({ message: "Not authenticated" });
  }

  res.json({ name: user.name, email: user.email });
});

app.get("/api/users/test", (req, res) => {
  res.json({ msg: "Hello from the mock backend!" });
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Mock backend listening on http://0.0.0.0:${PORT}`);
  console.log(`Try it: http://localhost:${PORT}/api/users/test`);
});
