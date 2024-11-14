import { Router } from "express";
import { checkSchema, validationResult, matchedData } from "express-validator";
import { studentRegistrationValidation } from '../utils/studentDetailsValidation.js';
import Student from '../models/Student.js';

const router = Router();

router.post("/Student/RegistrationForm", checkSchema(studentRegistrationValidation), async (req, res) => {
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

        // Create and save the new student with all fields
        const newStudent = new Student({
            full_name: data.full_name,
            email: data.email,
            batch_id: data.batch_id,
            stream_id: data.stream_id,
            school: data.school,
            gender: data.gender,
            phone: data.phone,
            pwd: data.pwd, // Ensure password is securely hashed if needed
        });

        await newStudent.save();

        return res.status(201).json(newStudent);
    } catch (err) {
        console.error("Error during student registration:", err);
        return res.status(500).json({ error: "Error registering student" });
    }
});

export default router;
