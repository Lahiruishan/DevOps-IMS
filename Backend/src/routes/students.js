import { Router } from "express";
import { validationResult, matchedData, checkSchema } from "express-validator";
import { studentRegistrationValidation, studentLoginValidation, studentUpdateValidation } from '../utils/studentDetailsValidation.js';
import { isAuth } from "../utils/studentMiddleware.js";    // Authentication middleware
import { registrationNo, extractRegNo } from "../utils/utils.mjs";    
import { Op } from 'sequelize';
import Models from "../db/models.js";


const router = Router();

// Student registration api
/*router.post("/student/student-registration", checkSchema(studentRegistrationValidation), async (req, res) => {
    const result = validationResult(req);

    if(!result.isEmpty())
        return res.status(400).send({errors: result.array()});   // Validation errors
    
    const data = matchedData(req);          // grabing data posted from client side.

    try {
        const emailExist = await Models.Student.count({where: { email: data.email }});
        if(emailExist){
            return res.status(409).json({error: "Already-Registered-email"});
            // redirect to student registration page
        }

        const batchExist = await Models.Batch.count({   // Find given batch is exists in Batches table
            where: {
              batch_id: data.batch_id
            }
        });
        if(!batchExist){                                                   // checks the batch is exists
            return res.status(403).json({error: "Invalid Batch"});               // if not exists 
            // redirect to student registration page
        }

        const streamExist = await Models.Stream.count({  // Find given stream is exists in Streams table
            where: { 
                stream_id: data.stream_id 
            }
        });
        if(!streamExist){                                                // checks the stream is exists
            return res.status(403).send({error: "Invalid Stream"});               // if not exists 
            // redirect to student registration page
        }

        // const modelCount = await Models.Student.count({
        //     where: {
        //         batch_id: data.batch_id,
        //         stream_id: data.stream_id
        //     }
        // });

        const lastStudent = await Models.Student.findOne({  // Fetch the highest registration number in the given batch and stream
            where: {
                batch_id: data.batch_id,
                stream_id: data.stream_id
            },
            order: [['reg_no', 'DESC']]  // Sort by registration number in descending order
        });
        console.log(`Last number: ${lastStudent.reg_no}`);
        // Extract the last number and increment it
        let newRegNo;
        if (lastStudent.reg_no) {
            const lastRegNo = extractRegNo(lastStudent.reg_no, data.batch_id, data.stream_id);
            console.log(`Last number: ${lastRegNo}`);
            newRegNo = registrationNo(data.stream_id, data.batch_id, lastRegNo);  // Increment the last number
        } else {
            newRegNo = registrationNo(data.stream_id, data.batch_id, 0);  // If no students exist, start from 0001
        }
        console.log(`Registration number: ${newRegNo}`);
        // data.reg_no = registrationNo(data.stream_id, data.batch_id, modelCount);  // Assigning registration number 
          
        const savedStudent = await Models.Student.create({       // Insert into Students table
            reg_no: newRegNo,
            full_name: data.full_name,
            email: data.email,
            batch_id: data.batch_id,
            stream_id: data.stream_id,
            district: data.district,
            school: data.school,
            gender: data.gender,
            phone: data.phone,
            pwd: data.pwd,
            profile_pic: data.profile_pic
        });
        
        const savedParent = await Models.Parent.create({
            reg_no: newRegNo,
            email: data.emailParent,
            phone: data.phoneParent,
            parent_name: data.parentName
        });

        // Use email function to send email with reg_no 

        return res.status(201).json(savedStudent);
        // res.redirect("/student/student-login");  // Forward to login page
    } catch(err) {
        console.error("Error is:", err.errors);     // Mostly catch duplicate key error(Validation error of table)
        return res.status(500).json({ error: "Error registering student" });    
        //return res.redirect("/student/student_registration");   // Forward to registration page again with relevent error message
    }
})*/
router.post("/student/student-registration", checkSchema(studentRegistrationValidation), async (req, res) => {
    const result = validationResult(req);

    if (!result.isEmpty())
        return res.status(400).send({ errors: result.array() });  // Validation errors
    
    const data = matchedData(req);  // Grab data from request

    try {
        const emailExist = await Models.Student.count({ where: { email: data.email } });
        if (emailExist) {
            return res.status(409).json({ error: "Already-Registered-email" });
        }

        const batchExist = await Models.Batch.count({ where: { batch_id: data.batch_id } });
        if (!batchExist) {
            return res.status(403).json({ error: "Invalid Batch" });
        }

        const streamExist = await Models.Stream.count({ where: { stream_id: data.stream_id } });
        if (!streamExist) {
            return res.status(403).json({ error: "Invalid Stream" });
        }

        const lastStudent = await Models.Student.findOne({
            where: { batch_id: data.batch_id, stream_id: data.stream_id },
            order: [['reg_no', 'DESC']]
        });

        let newRegNo;
        if (lastStudent && lastStudent.reg_no) {
            const lastRegNo = extractRegNo(lastStudent.reg_no, data.batch_id, data.stream_id);
            newRegNo = registrationNo(data.stream_id, data.batch_id, lastRegNo);
        } else {
            newRegNo = registrationNo(data.stream_id, data.batch_id, 0);
        }

        const savedStudent = await Models.Student.create({
            reg_no: newRegNo,
            full_name: data.full_name,
            email: data.email,
            batch_id: data.batch_id,
            stream_id: data.stream_id,
           // district: data.district,
            school: data.school,
            gender: data.gender,
            phone: data.phone,
            pwd: data.pwd,
            profile_pic: data.profile_pic
        });

        const savedParent = await Models.Parent.create({
            reg_no: newRegNo,
            email: data.emailParent,
            phone: data.phoneParent,
            parent_name: data.parentName
        });

        // Send email to the student (use Nodemailer or any email service)
        // sendEmail(savedStudent.email, newRegNo); 

        return res.status(201).json(savedStudent);
    } catch (err) {
        console.error("Error occurred during student registration:", err);
        return res.status(500).json({ error: "Error registering student" });
    }
});


// Student login api
router.post("/student/student-login",checkSchema(studentLoginValidation), async (req, res) => {
    const result = validationResult(req);

    if(!result.isEmpty())                                       // Checks for the validation errors
        return res.status(400).send({errors: result.array()});

    const data = matchedData(req);

    try {
        const findStudent = await Models.Student.findOne({ where: { email: data.email }});   // Search student with the requested api
        
        if(!findStudent)                             // Checks requested is found or not
            throw new Error("Unregistered Student");
            
        if(findStudent.pwd !== data.pwd)             // Checks password for the login request
            throw new Error("Invalid pwd");

        req.session.isAuth = true;                   // Session variable for authorization check
        req.session.reg_no = findStudent.reg_no;     // Store registration number in session

        return res.status(200).send([findStudent, "Login Successfully"]);
        //return res.redirect("/student/student_dashboard");                     // Forward to student dashboard
    } catch(err) {
        //console.log(err.message);
        return res.status(400).send(err.message);
        //return res.redirect("/student/student_login");                     // Forward to same student login page with msg of error
    }
})

// Student profile view api
router.post("/student/student-profile", isAuth, async (req, res) => {    // Student profile request
    try {
        const findStudent = await Models.Student.findOne({ where: { reg_no: req.session.reg_no }});  // Load relevent table
        return res.status(200).send(findStudent);
    } catch (err) {
        //console.log(err.message);
        return res.status(400).send(err.message);
    }
})

// Update student details api
router.patch("/student/student-profile-update", isAuth, checkSchema(studentUpdateValidation), async (req, res) => {
    const result = validationResult(req);

    if(!result.isEmpty())
        return res.status(400).send({errors: result.array()});   // Validation errors
    
    const data = matchedData(req);          // grabing data posted from client side.

    try {
        if(data.email){
            // const emailExist = await Models.Student.count({ where: { email: data.email }});
            // if(emailExist > 1){
            //     return res.status(409).send("Already-Registered-email");
            //     // redirect to student profile update page
            // }
            const emailExist = await Models.Student.count({ 
                where: { 
                    email: data.email, 
                    reg_no: { [Op.ne]: req.session.reg_no }  // Exclude current student's reg_no
                } 
            });
            if (emailExist > 0) {
                return res.status(409).send("Already-Registered-email");
            }
        }

        if(data.batch_id){
            const batchExist = await Models.Batch.count({ where: { batch_id: data.batch_id }});
            if(!batchExist){                                                   // checks the batch is exists
                return res.status(404).send("Invalid-Batch");                  // if not exists 
                // redirect to student profile update page
            }
        }
        
        if(data.stream_id){
            const streamExist = await Models.Stream.count({ where: { stream_id: data.stream_id }});
            if(!streamExist){                                                // checks the stream is exists
                return res.status(404).send("Invalid-Stream");               // if not exists 
                // redirect to student profile update page
            }
        }
         
        // Update student details
        const [affectedRows, savedStudent] = await Models.Student.update({
            full_name: data.full_name,
            email: data.email,
            //district: data.district,
            school: data.school,
            gender: data.gender,
            phone: data.phone,
            pwd: data.pwd,
            profile_pic: data.profile_pic
        },{
            where: {
                reg_no: req.session.reg_no
            },
            returning: true  // This will returned the updated record
        });
        
        // Update parents details
        await Models.Parent.update({
            email: data.emailParent,
            phone: data.phoneParent,
            parent_name: data.parentName
        },{
            where: {
                reg_no: req.session.reg_no
            }
        });

        return res.status(201).send(savedStudent);
        // redirect student profile page
    } catch(err) {
        console.log(`Error is: ${err.message}`);     // Mostly catch duplicate key error(Validation error of table)
        return res.status(500).send({error: err.message});      
        //return res.redirect("/student/student_profile_update");   // Forward to student profile update again with the msg of already registered email
    }
})

// New student registration page 
router.post("/student/new-student-registration", async (req, res) => {    // Load Streams and Batches
    try {
        const findStream = await Models.Stream.findAll({   // Load streams
            attributes: ['stream_id', 'title']
        });  
        const findBatch = await Models.Batch.findAll({attributes: ['batch_id']});    // Load batches
        return res.status(200).send({
            streams: findStream,
            batches: findBatch
        });
    } catch (err) {
        //console.log(err.message);
        return res.status(400).send(err.message);
    }
})


export default router;