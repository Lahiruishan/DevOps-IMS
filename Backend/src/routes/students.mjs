import { Router } from "express";
<<<<<<< Updated upstream:Backend/src/routes/students.js
import { checkSchema, validationResult, matchedData } from "express-validator";
import { studentRegistrationValidation } from '../utils/studentDetailsValidation.js';
import Student from '../models/Student.js';
=======
import { validationResult, matchedData, checkSchema } from "express-validator";
import { studentRegistrationValidation, studentLoginValidation, studentUpdateValidation } from '../utils/studentDetailsValidation.js';
import { isAuth } from "../utils/studentMiddleware.js";    // Authentication middleware
import { registrationNo, extractRegNo } from "../utils/utils.mjs";    
import { Op } from 'sequelize';
import Models from "../db/models.mjs";

>>>>>>> Stashed changes:Backend/src/routes/students.mjs

const router = Router();

router.post("/student/student-registration", checkSchema(studentRegistrationValidation), async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const data = matchedData(req);

    try {
        // Check if email is already registered
        const emailExists = await Student.findOne({ email: data.email });
        if (emailExists) {
            return res.status(409).json({ error: "Already-Registered-email" });
        }

        // Create and save the new student
        const newStudent = new Student(data);
        await newStudent.save();

        return res.status(201).json(newStudent);
    } catch (err) {
        console.error("Error during student registration:", err);
        return res.status(500).json({ error: "Error registering student" });
    }
});

export default router;
