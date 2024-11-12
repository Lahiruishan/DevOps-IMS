import { Router } from "express";
import { validationResult, matchedData, checkSchema } from "express-validator";
import { staffUpdateValidation, staffLoginValidation, staffBiographyValidation, staffQualificationValidation, 
    staffQualificationUpdateValidation } from "../utils/staffDetailsValidation.js";
import Models from "../db/models.js";
import { bookId } from "../utils/utils.js";
//import { isAuth } from "../utils/middleware.mjs";    // Authentication middleware

const router = Router();

// Staff login API
router.post("/staff/staff-login",checkSchema(staffLoginValidation), async (req, res) => {  // Staff login api
    const result = validationResult(req);

    if(!result.isEmpty())                                       // Checks for the validation errors
        return res.status(400).send({errors: result.array()});

    const data = matchedData(req);

    try {
        const findStaff = await Models.Staff.findOne({ where: { email: data.email }});   // Search staff with the requested api
        
        if(!findStaff)                             // Checks requested is found or not
            throw new Error("Unregistered Staff");
            
        if(findStaff.pwd !== data.pwd)             // Checks password for the login request
            throw new Error("Invalid pwd");

        req.session.isAuth = true;                   // Session variable for authorization check
        req.session.username = findStaff.username;   // Store username in session

        return res.status(200).send([findStaff, "Login Successfully"]);
        //return res.redirect("/staff/staff-dashboard");                     // Forward to staff dashboard
    } catch(err) {
        //console.log(err.message);
        return res.status(400).send(err.message);
        //return res.redirect("/staff/staff-login");    // Forward to staff login page with msg of error
    }
})

// Staff update API
router.patch("/staff/staff-profile-update", checkSchema(staffUpdateValidation), async (req, res) => {
    const result = validationResult(req);

    if(!result.isEmpty())
        return res.status(400).send({errors: result.array()});   // Validation errors
    
    const data = matchedData(req);          // grabing data posted from client side.

    try {
        const currentStaff = await Models.Staff.findOne({ where: { username: req.session.username } });

        // Checks email is already used one or not
        if(data.email && data.email !== currentStaff.email){
            const emailExist = await Models.Staff.count({ where: { email: data.email }});
            if(emailExist > 0){                                              // checks email exists more than once
                return res.status(409).send("Already-Registered-email");
                // redirect to staff update page
            }
        }
        
        // Checks username is already used one or not
        let usernameChanged = false;
        if(data.username && data.username !== currentStaff.username){
            const usernameExist = await Models.Staff.count({ where: { username: data.username }});
            if(usernameExist > 0){                                                   
                return res.status(409).send("Already-Registered-username");
                // redirect to staff update page
            }
            usernameChanged = true; // Mark that the username has changed
        }
        
        // Checks the subject is valid or not
        if(data.sub_id){
            const subExist = await Models.Subject.count({ where: { sub_id: data.sub_id }});
            if(!subExist){                          
                return res.status(404).send("Invalid-Subject");
                // res.redirect("/staff/staff-update");  // Forward to staff-update page
            }
        }

        // Updates staff profile
        const [affectedRows, [savedStaff]] = await Models.Staff.update({
            username: data.username,
            full_name: data.full_name,
            email: data.email,
            sub_id: data.sub_id,
            gender: data.gender,
            pwd: data.pwd,
            profile_pic: data.profile_pic
        },{
            where: {
                username: req.session.username
            },
            returning: true  // This will returned the updated record
        });

        // Update session username and username in the Staff_Phone table if it has changed
        if (usernameChanged) {
            req.session.username = data.username  // Update sessions username variable with new username
            await Models.Staff_Phone.update(
                { username: data.username }, // Set new username
                { where: { username: currentStaff.username } 
            });
        }
        
        // Update or Create home phone number
        if(data.phoneHome){
            const [staffHome, [createdHome]] = await Models.Staff_Phone.findOrCreate({
                where: {
                    username: data.username,
                    phoneType: "H"
                },
                defaults: { 
                    username: data.username, 
                    phone: data.phoneHome,
                    phoneType: "H" 
                }
            });
            if (!createdHome) {
                await Models.Staff_Phone.update({
                    phone: data.phoneHome
                },{
                    where: {
                        username: data.username,
                        phoneType: "H"
                    }
                });
            }
        }

        // Update or Create mobile phone number
        if(data.phoneMobile){
            const [staffMobile, [createdMobile]] = await Models.Staff_Phone.findOrCreate({
                where: {
                    username: data.username,
                    phoneType: "M"
                },
                defaults: { 
                    username: data.username, 
                    phone: data.phoneMobile,
                    phoneType: "M" 
                }
            });
            if (!createdMobile) {
                await Models.Staff_Phone.update({
                    phone: data.phoneMobile
                },{
                    where: {
                        username: data.username,
                        phoneType: "M"
                    }
                });
            }
        }

        return res.status(200).send(savedStaff);
        // res.redirect("/staff/staff-dashboard");  // Forward to staff home dashboard
    } catch(err) {
        console.log(`Error is: ${err.message}`);     // Mostly catch duplicate key error(Validation error of table)
        return res.status(400).send("Error updating profile");      
        //return res.redirect("/staff/staff-update");   // Forward to staff update page again with relevent error msg
    }
});

// Staff profile view API
router.get("/staff/staff-profile", async (req, res) => { 
    try {
        const findStaff = await Models.Staff.findOne({ where: { username: req.session.username }});  // Load relevent table
        return res.status(200).send(findStaff);
    } catch (err) {
        //console.log(err.message);
        return res.status(400).send(err.message);
    }
})

// Staff biography view API
router.get("/staff/biography-view", async (req, res) => {
    const username = req.session.username;

    try {
        const staff = await Models.Staff.findOne({
            where: { username },
            attributes: [ 'biography' ]
        });

        if (!staff) {
            return res.status(404).send("Staff member not found");
            // Redirect to staff biography edit page
        }

        return res.status(200).json(staff);
        // Redirect to staff biograpy edit page
    } catch (err) {
        console.error("Error is:", err);
        return res.status(500).send("Error fetching biography");
        // Redirect to staff profile view page
    }
});

// Staff update biography API
router.patch("/staff/biography-update", checkSchema(staffBiographyValidation), async (req, res) => {
    const result = validationResult(req);
    if (!result.isEmpty()) {
        return res.status(400).json({ errors: result.array() });
    }

    const { biography } = matchedData(req);
    const username = req.session.username; 

    try {
        const [updatedRows, [updatedStaff]] = await Models.Staff.update(
            { biography },
            {
                where: { username },
                returning: true
            }
        );

        if (updatedRows === 0) {
            return res.status(404).send("Staff member not found"); // If staff member does not exist
        }

        return res.status(200).json(updatedStaff);
    } catch (err) {
        console.error("Error is:", err);
        return res.status(500).send("Error updating biography"); // Handle unexpected errors
    }
});

// Staff qualification add API
router.post('/staff/qualification-add', checkSchema(staffQualificationValidation), async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });  // Return validation errors
    }

    const data = matchedData(req);          // grabing data posted from client side.
    const username = req.session.username;

    try {
        // Check if the qualification already exists for this staff member
        const existingQualification = await Models.Staff_Qualification.findOne({  
            where: { username, title: data.title }
        });
        if (existingQualification) {
            return res.status(409).json({ error: "Qualification already exists" });
            // Redirect to staff update page
        }

        const savedQualification = await Models.Staff_Qualification.create({  // Add new data to Staff_Qualification table
            username,
            title: data.title,
            type: data.type,
            ...(data.institute && { institute: data.institute })  // Conditionally include institute if provided
        });

        return res.status(201).json(savedQualification);
        // Redirect to staff update page
    } catch (error) {
        console.error("Error is:", error);
        return res.status(500).send("Error adding qualification");
        // Redirect to staff update page
    }
});

// Staff qualification update API
router.patch('/staff/qualification-update', checkSchema(staffQualificationUpdateValidation), async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });  // Return validation errors
    }

    const data = matchedData(req); 
    const username = req.session.username;

    try {
        const qualification = await Models.Staff_Qualification.findOne({  // Check if the qualification exists with the current title
            where: { username, title: data.title } 
        });

        if (!qualification) {
            return res.status(404).json({ error: "Qualification not found" });
        }

        const updatedQualification = await qualification.update({
            type: data.type,  
            ...(data.institute && { institute: data.institute })  // Conditionally update institute if provided
        });

        return res.status(200).json(updatedQualification);
        // Redirect to staff update page with "Qualification Successfully Updated" msg
    } catch (err) {
        console.error("Error is:", err);
        return res.status(500).send("Error updating qualification");
        // Redirect to staff update page with "Error Updating Qualification" msg
    }
});

export default router;