const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

app.use(bodyParser.json());

let users = [
  {
    _id: "23f72h3f8dh18d1",
    name: { firstName: "David", lastName: "Cohen" },
    address: { city: "Tel Aviv", street: "Hashalom", number: 15 },
    email: "admin@admin.com",
    password: "Abc123!",
    type: "trainer",
    phone: "052-2638965",
  },
  {
    _id: "asd23iurehj38d9k",
    name: { firstName: "Yosi", lastName: "Levi" },
    address: { city: "Ramat gan", street: "shamo", number: 2 },
    email: "admin1@admin.com",
    password: "Abc123!",
    type: "trainee",
    phone: "052-5269857",
  },
].map((user) => ({
  ...user,
  password: bcrypt.hashSync(user.password, 8),
}));

let exercises = [
  {
    _id: "1",
    trainer: "23f72h3f8dh18d1",
    trainee: "asd23iurehj38d9k",
    date: "12.07.2023",
    time: "15:00",
    notes: ["text text tex", "my textttt", "another text"],
    isLiked: false,
  },
  {
    _id: "2",
    trainer: "23f72h3f8dh18d1",
    trainee: "asd23iurehj38d9k",
    date: "17.07.2023",
    time: "15:00",
    notes: ["text t2222", "my 18518", "another text123"],
    isLiked: false,
  },
];

// USERS
app.get("/users", (req, res) => {
  res.json(users);
});

app.post("/users", (req, res) => {
  const newUser = {
    ...req.body,
    password: bcrypt.hashSync(req.body.password, 8),
  };
  users.push(newUser);
  res.json(newUser);
});

app.patch("/users/:id", (req, res) => {
  const id = req.params.id;
  let user = users.find((user) => user._id === id);
  if (user) {
    Object.assign(user, req.body);
    res.json(user);
  } else {
    res.sendStatus(404);
  }
});

app.delete("/users/:id", (req, res) => {
  const id = req.params.id;
  const index = users.findIndex((user) => user._id === id);
  if (index > -1) {
    users.splice(index, 1);
    res.sendStatus(200);
  } else {
    res.sendStatus(404);
  }
});

// LOGIN
app.post("/login", (req, res) => {
  const { email, password } = req.body;
  const user = users.find((user) => user.email === email);
  if (!user) return res.status(404).send("No user found.");
  const passwordIsValid = bcrypt.compareSync(password, user.password);
  if (!passwordIsValid)
    return res.status(401).send({ auth: false, token: null });
  const token = jwt.sign(
    { id: user._id, type: user.type, firstName: user.firstName },
    "supersecret",
    { expiresIn: 86400 }
  ); // expires in 24 hours
  res.status(200).send({ auth: true, token });
});

// EXERCISES
app.get("/exercises", (req, res) => {
  res.json(exercises);
});

app.post("/exercises", (req, res) => {
  const newExercise = req.body;
  exercises.push(newExercise);
  res.json(newExercise);
});

app.patch("/exercises/:id", (req, res) => {
  const id = req.params.id;
  let exercise = exercises.find((exercise) => exercise._id === id);
  if (exercise) {
    exercise.isLiked = !exercise.isLiked;
    res.json(exercise);
  } else {
    res.sendStatus(404);
  }
});

app.delete("/exercises/:id", (req, res) => {
  const id = req.params.id;
  const index = exercises.findIndex((exercise) => exercise._id === id);
  if (index > -1) {
    exercises.splice(index, 1);
    res.sendStatus(200);
  } else {
    res.sendStatus(404);
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
