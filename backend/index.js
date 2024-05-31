import express from "express";
import { PORT, mongodbURL } from "./config.js";
import mongoose from "mongoose";
import { Employee } from "./models/employeeModel.js";
import cors from "cors";
import axios from "axios";

const app = express();

// Middleware to handle CORS and JSON requests
app.use(cors());
app.use(express.json());

// Basic route to test server is running
app.get("/", (req, res) => {
    console.log("Starting the self service portal");
    res.send("Hello World!");
});

// Route to create a new employee
app.post('/employee', async (req, res) => {
    try {
        const { name, email, password, age, hourlyPay, storeNumber, position} = req.body;
        if (!name || !email || !password || !position) {
            return res.status(400).send({ message: "Please provide all required fields" });
        }

        const newEmployee = {
            name,
            email,
            password, // Assuming you need to store the password as well
            age,
            hourlyPay,
            storeNumber,
            position
        };

        const result = await Employee.create(newEmployee);
        return res.status(201).send(result);
    } catch (error) {
        return res.status(500).send({ error: error.message });
    }
});

// Route to get all employees
app.get('/employee', async (req, res) => {
    try {
        const employees = await Employee.find({});
        return res.send({
            data: employees.length,
            employees
        });
    } catch (error) {
        return res.status(500).send({ error: error.message });
    }
});

// Route to handle login
app.post('/login', async (req, res) => {
    try {
      const { email, password } = req.body;
      const employee = await Employee.findOne({ email });
      if (!employee || employee.password !== password) {
        return res.status(404).send({ message: "Invalid email or password" });
      }
      // Assuming employee has 'name', 'email', and other fields
      return res.status(200).send({ 
        message: "Login successful", 
        status: "exist", 
        user: employee
      });
    } catch (error) {
      return res.status(500).send({ error: error.message });
    }
  });
  
  

// Connect to MongoDB and start the server
mongoose.connect(mongodbURL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("Connected to MongoDB!");
        app.listen(PORT, () => {
            console.log(`Server is running on http://localhost:${PORT}`);
        });
    })
    .catch((error) => {
        console.log("Error:", error);
    });
