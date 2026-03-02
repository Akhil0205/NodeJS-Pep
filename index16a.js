import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const app = express();
app.use(express.json());

app.listen(8080, () => {
  console.log("Server started");
});

const users = [];
const SECRET = "mysecretkey";


// ================= SIGNUP =================
app.post("/signup", async (req, res) => {
  const body = req.body;

  if (!body.email || !body.password) {
    return res.status(400).json({ message: "Email and Password required" });
  }

  // check duplicate
  if (users.find(u => u.email === body.email)) {
    return res.status(400).json({ message: "User already exists" });
  }

  const hashPassword = await bcrypt.hash(String(body.password), 10);
  body.password = hashPassword;

  users.push(body);

  res.json({ message: "User created", users });
});


// ================= LOGIN =================
app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const found = users.find((user) => user.email === email);

  if (!found)
    return res.status(401).json({ message: "User not found" });

  const chkPassword = await bcrypt.compare(String(password), found.password);

  if (!chkPassword)
    return res.status(401).json({ message: "Invalid Password" });

  // create token
  const token = jwt.sign(
    { email: found.email },
    SECRET,
    { expiresIn: "1h" }
  );

  res.json({
    message: "Login success",
    token: token
  });
});


// ================= AUTH MIDDLEWARE =================
const auth = (req, res, next) => {
  const header = req.headers.authorization;

  if (!header)
    return res.status(401).json({ message: "No token provided" });

  const token = header.split(" ")[1];

  try {
    const verified = jwt.verify(token, SECRET);
    req.user = verified;
    next();
  } catch {
    res.status(403).json({ message: "Invalid token" });
  }
};


// ================= PROTECTED ROUTE =================
app.get("/", auth, (req, res) => {
  res.send(`Hello ${req.user.email} 🎉`);
});


// ================= DEBUG ROUTE =================
app.get("/users", (req, res) => {
  res.json(users);
});