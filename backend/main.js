const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;
const cors = require("cors");

const USERS = [];
let USERID = 0;

const problems = [
  {
    problemId: "1",
    title: "401. Bitwise AND of Numbers Range",
    difficulty: "Medium",
    acceptance: "42%",
    description:
      "Given two integers left and right that represent the range [left, right], return the bitwise AND of all numbers in this range, inclusive.",
    exampleIn: "left = 5, right = 7",
    exampleOut: "4",
  },
  {
    problemId: "2",
    title: "205. Add two numbers",
    difficulty: "Medium",
    acceptance: "41%",
    description:
      "Given two numbers, add them and return them in integer range. use MOD=1e9+7",
    exampleIn: "a = 100 , b = 200",
    exampleOut: "300",
  },
  {
    problemId: "3",
    title: "202. Happy Number",
    difficulty: "Easy",
    acceptance: "54.9%",
    description: "Write an algorithm to determine if a number n is happy.",
    exampleIn: "n = 19",
    exampleOut: "true",
  },
  {
    problemId: "4",
    title: "203. Remove Linked List Elements",
    difficulty: "Hard",
    acceptance: "42%",
    description: "Given number k , removed kth element",
    exampleIn: "list: 1->2->3 , k=2",
    exampleOut: "1->3",
  },
  {
    problemId: "5",
    title: "201. Bitwise AND of Numbers Range",
    difficulty: "Medium",
    acceptance: "42%",
    description:
      "Given two integers left and right that represent the range [left, right], return the bitwise AND of all numbers in this range, inclusive.",
    exampleIn: "left = 5, right = 7",
    exampleOut: "4",
  },
  {
    problemId: "6",
    title: "205. Add two numbers",
    difficulty: "Medium",
    acceptance: "41%",
    description:
      "Given two numbers, add them and return them in integer range. use MOD=1e9+7",
    exampleIn: "a = 100 , b = 200",
    exampleOut: "300",
  },
  {
    problemId: "7",
    title: "202. Happy Number",
    difficulty: "Easy",
    acceptance: "54.9%",
    description: "Write an algorithm to determine if a number n is happy.",
    exampleIn: "n = 19",
    exampleOut: "true",
  },
  {
    problemId: "8",
    title: "203. Remove Linked List Elements",
    difficulty: "Hard",
    acceptance: "42%",
    description: "Given number k , removed kth element",
    exampleIn: "list: 1->2->3 , k=2",
    exampleOut: "1->3",
  },
];

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get("/", (req, res) => {
  res.send("Welcome to the first backend route");
});

app.get("/problems", (req, res) => {
  const filteredProblems = problems.map((prob) => ({
    problemId: prob.problemId,
    title: prob.title,
    difficulty: prob.difficulty,
    acceptance: prob.acceptance,
  }));

  res.status(200).json({
    problems: filteredProblems,
  });
});

app.get("/filterproblems", (req, res) => {
  const { difficulty } = req.query;
  const filteredProblems = problems.filter(
    (prob) => prob.difficulty === difficulty
  );
  res.status(200).json({
    problems: filteredProblems,
  });
});

app.get("/problems/:id", (req, res) => {
  const id = req.params.id;
  const problem = problems.find((prob) => prob.problemId === id);
  if (!problem) {
    return res.status(411).json({});
  }
  res.json({
    problem,
  });
});

app.post("/signup", (req, res) => {
  const { email, password } = req.body;
  console.log(req.body);
  const user = USERS.find((u) => u.email === email);
  if (user) {
    return res
      .status(403)
      .json({ message: "User already exists", array: USERS });
  }
  USERS.push({
    userId: USERID++,
    email: email,
    password: password,
  });

  res
    .status(200)
    .json({ message: "User registered successfully", array: USERS });
});

app.listen(port, () => {
  console.log(`The app is running on the port ${port}`);
});
