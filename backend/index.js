import express from "express";
import { PORT,mongodbURL } from "./config.js";
import mongoose from "mongoose";
import { Employee } from "./models/employeeModel.js";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    console.log("Starting the self service portal");
    res.send("Hello World!");
});

app.post('/employee', async (request, response) => {
    try {
        if (!request.body.name || !request.body.email || !request.body.password || !request.body.age || !request.body.hourlyPay) {
            return response.status(400).send({ message: "Please provide all required fields" });
        }
        
        const newEmployee = {
            name: request.body.name,
            email: request.body.email,
            age: request.body.age,
            hourlyPay: request.body.hourlyPay
        };

        const result = await Employee.create(newEmployee);
        return response.status(201).send(result);
    } catch (error) {
        return response.status(500).send({ error: error.message });
    }
});


app.get('/employee', async (request, response) => {
    try {
        const employees = await Employee.find({});
        return response.send({
            data: employees.length,
            employees: employees


        });
    } catch (error) {
        return response.status(500).send({ error: error.message });
    }
});




mongoose.connect(mongodbURL)
    .then(() => {
        console.log("Connected to MongoDB!");
        app.listen(PORT, () => {
            console.log(`Server is running on http://localhost:${PORT}`);
        });
    })
    .catch((error) => {
        console.log("Error:", error);
    });
