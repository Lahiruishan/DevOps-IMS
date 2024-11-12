import { Router } from "express";
import { validationResult, matchedData, checkSchema } from "express-validator";
import { batchValidation, streamValidation, subjectValidation, classValidation, adminValidation } from "../utils/adminDetailsValidation.mjs";
import { staffValidation } from "../utils/staffDetailsValidation.mjs";
import Models from "../db/models.js";
//import { isAuth } from "../utils/middleware.mjs";    // Authentication middleware

const router = Router();

// New batch registering api
router.post("/admin/batch-registration", checkSchema(batchValidation), async (req, res) => {
    const result = validationResult(req);

    if(!result.isEmpty()) {
        return res.status(400).send({errors: result.array()});   // Validation errors - Redirect to add new batch page
        // return res.redirect("/admin/add-batch");                  // redirect to add new batch page
    }
    const data = matchedData(req);          // grabing data posted from client side.
    
    const parseBatch = parseInt(data.batch_id);

    if(isNaN(parseBatch)) {
        return res.status(400).send("Bad request. Invalid batch");   // If batch is not numeric it gives parseBatch == NaN
        // return res.redirect("/admin/add-batch");                  // redirect to add new batch page
    }

    //const batch = await Batch.create({ batch_id: data.batch_id });
        //.then((batch) => res.status(201).send(batch))         // redirect(admin/add-new)
        //.catch((err) => res.status(400).send(err.message));   // redirect(admin/add-batch)

    try {
        const isExist = await Models.Batch.count({   // Find given batch is exists in Batches table
            where: {
              batch_id: data.batch_id
            }
          });
        if(isExist){                                                   // checks the batch is exists
            return res.status(409).send("Already Registered");         // if exists 
            // redirect(adming/add-batch)
        }

        const batch = await Models.Batch.create({ batch_id: data.batch_id }); // Add new batch to batches table
        res.status(201).send(batch); // redirect(admin/add-new)
    } catch (err) {
        res.status(400).send(err.message); // redirect(admin/add-batch)
    }
})

// New Stream registering api
router.post("/admin/stream-registration", checkSchema(streamValidation), async (req, res) => {
    const result = validationResult(req);

    if(!result.isEmpty()) {
        return res.status(400).send({errors: result.array()});   // Validation errors - Redirect to add new stream page
        // return res.redirect("/admin/add-stream");              // redirect to add new stream page
    }
    const data = matchedData(req);                               // grabing data posted from client side.

    const stream = data.stream_id;
    const title = data.title;

    try {
        const streamExist = await Models.Stream.count({          // Find given stream is exists in Streams table
            where: {
              stream_id: stream
            }
          });
        if(streamExist){                                         // checks the stream is exists
            return res.status(409).send("Already-Registered");   // if exists 
            // redirect(adming/add-stream)
        }

        const savedStream = await Models.Stream.create({ stream_id: stream, title: title }); // Add new stream to streams table
        res.status(201).send(savedStream); // redirect(admin/add-new)
    } catch (err) {
        res.status(400).send(err.message); // redirect(admin/add-stream)
    }
})

// New Subject registering api
router.post("/admin/sub-registration", checkSchema(subjectValidation), async (req, res) => {
    const result = validationResult(req);

    if(!result.isEmpty()) {
        return res.status(400).send({errors: result.array()});   // Validation errors - Redirect to add new subject page
        // return res.redirect("/admin/add-subject");            // redirect to add new subject page
    }
    const data = matchedData(req);                               // grabing data posted from client side.

    const sub = data.sub_id;
    const title = data.title;
    const streamArray = data.stream_id;

    try {
        const subExist = await Models.Subject.count({          // Find given subject is exists in Subjects table
            where: {
              sub_id: sub
            }
        });
        if(subExist){                                            // checks the subject is exists
            return res.status(409).send("Already-Registered");   // if exists 
            // redirect(admin/add-sub)
        }

        // Prepare data to insert
        const subStreams = streamArray.map(stream => ({
            sub_id: sub,
            stream_id: stream
        }));

        const savedSubject = await Models.Subject.create({ sub_id: sub, title: title }); // Add new stream to Subjects table
        const savedSubStream = await Models.Stream_Subject.bulkCreate(subStreams);       // Add data to Stream_Subject table
        res.status(201).send(savedSubject); // redirect(admin/add-new)
    } catch (err) {
        res.status(400).send(err.message); // redirect(admin/add-sub)
    }
});

// New Class registering api
router.post("/admin/class-registration", checkSchema(classValidation), async (req, res) => {
    const result = validationResult(req);

    if(!result.isEmpty()) {
        return res.status(400).send({errors: result.array()});   // Validation errors - Redirect to add new-class page
        // return res.redirect("/admin/add-class");              // redirect to add new-class page
    }
    const data = matchedData(req);                               // grabing data posted from client side.

    const batchArray = data.batch_id;

    try {
        const classExist = await Models.Class.count({          // Find given class is exists in Class table
            where: {
              title: data.title
            }
        });
        if(classExist){                                                // Checks the class is exists
            return res.status(409).send("Already-Registered-Class");   // If exists 
            // redirect(admin/add-class)
        }

        const savedClass = await Models.Class.create({ 
            sub_id: data.sub_id, 
            title: data.title,
            batch_id: batchArray,
            staff_id: data.staff_id,
            type: data.type,
            fee: data.fee,
            location: data.location,
            day: data.day,
            time: data.time
        }); // Add new class to Class table
        
        res.status(201).send(savedClass); // redirect(admin/add-new)
    } catch (err) {
        res.status(400).send(err.message); // redirect(admin/add-class)
    }
});

// New Staff registration api
router.post("/admin/staff-registration", checkSchema(staffValidation), async (req, res) => {
    const result = validationResult(req);

    if(!result.isEmpty())
        return res.status(400).send({errors: result.array()});   // Validation errors
    
    const data = matchedData(req);          // grabing data posted from client side.

    try {
        const emailExist = await Models.Staff.count({  // Find given email is exists in staff table
            where: {
                email: data.email
            }
        });
        if(emailExist){
            return res.status(409).send("Already-Registered-email");
            // redirect to staff registration page
        }

        const usernameExist = await Models.Staff.count({   // Find given username is exists in staff table
            where: {
              username: data.username
            }
        });
        if(usernameExist){                                                   // checks the username is exists
            return res.status(403).send("Already-Registered-username");               // if not exists 
            // redirect to staff registration page
        }

        const subExist = await Models.Subject.count({  // Find given subject is exists in Subject table
            where: { 
                sub_id: data.sub_id 
            }
        });
        if(!subExist){                                                // Checks the subject is exists
            return res.status(403).send("Invalid-Subject");               // If not exists 
            // redirect to staff registration page
        }
          
        const savedStaff = await Models.Staff.create({       // Insert into Staff table
            username: data.username,
            full_name: data.full_name,
            email: data.email,
            sub_id: data.sub_id,
            gender: data.gender
        });

        // Send email to the staff member with username and generic pwd="1234"

        return res.status(201).send(savedStaff);
        // res.redirect("/admin/add-new"); // Forward to add-new page
    } catch(err) {
        console.log(`Error is: ${err.message}`);     // Mostly catch duplicate key error(Validation error of table)
        return res.sendStatus(400);      
        //return res.redirect("/admin/staff-registration");   // Forward to registration page again with the msg of already registered email
    }
});

// New Admin registration api
router.post("/admin/admin-registration", checkSchema(adminValidation), async (req, res) => {
    const result = validationResult(req);

    if(!result.isEmpty())
        return res.status(400).send({errors: result.array()});   // Validation errors
    
    const data = matchedData(req);          // grabing data posted from client side.

    try {
        const emailExist = await Models.Admin.count({  // Find given email is exists in admin table
            where: {
                email: data.email
            }
        });
        if(emailExist){
            return res.status(409).send("Already-Registered-email");
            // redirect to admin registration page
        }

        const usernameExist = await Models.Admin.count({   // Find given username is exists in admin table
            where: {
              username: data.username
            }
        });
        if(usernameExist){                                                   // checks the username is exists
            return res.status(403).send("Already-Registered-username");               // if not exists 
            // redirect to staff registration page
        }

          
        const savedAdmin = await Models.Admin.create({       // Insert into Admin table
            username: data.username,
            full_name: data.full_name,
            email: data.email,
            gender: data.gender
        });

        // Send email to new admin with username and generic pwd="1234"

        return res.status(201).send(savedAdmin);
        // res.redirect("/admin/add-new"); // Forward to add-new page
    } catch(err) {
        console.log(`Error is: ${err.message}`);     // Mostly catch duplicate key error(Validation error of table)
        return res.sendStatus(400);      
        //return res.redirect("/admin/admin-registration");   // Forward to registration page again with the msg of already registered email
    }
});


export default router;