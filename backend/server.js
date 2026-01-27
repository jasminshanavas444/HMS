const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const patients = [
  { id: 1, name: "Anu", age: 30, gender: "Female", disease: "Fever" },
  { id: 2, name: "Rahul", age: 45, gender: "Male", disease: "Diabetes" }
];

const doctors = [
  { name: "Dr. Smith", department: "Cardiology", time: "10AM - 1PM" },
  { name: "Dr. Meera", department: "Neurology", time: "2PM - 5PM" }
];

app.get("/patients", (req, res) => {
  res.json(patients);
});

app.get("/doctors", (req, res) => {
  res.json(doctors);
});

app.listen(8080, () => {
  console.log("Backend running on port 8080");
});
