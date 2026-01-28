const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());

// Memory storage
let doctors = [];
let patients = [];

// Routes
app.post("/addDoctor", (req, res) => {
    doctors.push(req.body);
    res.send("Doctor added");
});

app.get("/doctors", (req, res) => {
    res.json(doctors);
});

app.post("/addPatient", (req, res) => {
    patients.push(req.body);
    res.send("Patient added");
});

app.get("/patients", (req, res) => {
    res.json(patients);
});

app.listen(3000, () => console.log("Backend running on http://localhost:3000"));
