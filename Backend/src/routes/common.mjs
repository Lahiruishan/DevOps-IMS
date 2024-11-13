import { Router } from "express";
import Models from "../db/models.mjs";
//import { isAuth } from "../utils/middleware.mjs";    // Authentication middleware

const router = Router();
// Log out api
router.post("/logout", (req, res) => {
    req.session.destroy((err) => {
        if(err)
            throw err;
        //return res.status(200).redirect("/");            // After logged out forward to home page
        return res.send(`Logged Out`);
    })
})

// Home page api
router.post("/", async (req, res) => { 
    try {
        const findImage = await Models.Front_Detail.findAll({   // Find all images in home page
            where: { type: 'home' },
            attributes: ['detail_id', 'file_path']
        });  

        const findStream = await Models.Stream.findAll({       // Find all streams
            attributes: ['stream_id', 'title']
        });

        const staffByStream = await Models.Staff.findAll({     // Find all staff with their respected streams
            include: [
                {
                    model: Models.Subject,
                    include: [
                        {
                            model: Models.Stream,
                            attributes: ['stream_id', 'title'],
                        }
                    ],
                    attributes: ['title'],
                }
            ],
            attributes: ['username', 'full_name', 'email'],
        });

        // Grouping the staff by streams
        const staffGroups = staffByStream.reduce((acc, staff) => {
            const subject = staff.Subject; 
            if (subject && subject.Streams && subject.Streams.length > 0) {
                subject.Streams.forEach((stream) => {         // Iterate over each stream in the Subject
                    const streamId = stream.stream_id;        // Get the stream_id
                    
                    if (!acc[streamId]) {
                        acc[streamId] = []; 
                    }
        
                    // Push the staff member's details to the corresponding stream group
                    acc[streamId].push({
                        username: staff.username,
                        full_name: staff.full_name,
                        email: staff.email,
                        subject_title: subject.title
                    });
                });
            }
            return acc; // Return the accumulator for the next iteration
        }, {});
        
        const [classCount, staffCount, studentCount] = await Promise.all([  // Find no.of Class,Staff members and Students
            Models.Class.count(),
            Models.Staff.count(),
            Models.Student.count()
        ]);

        return res.status(200).send({
            homeImages: findImage,
            streams: findStream,
            staffGroups: staffGroups,
            statistics: {
                totalClasses: classCount,
                totalStaff: staffCount,
                totalStudents: studentCount
            }
        });
    } catch (err) {
        console.error(err); // Log the entire error for better debugging
        return res.status(500).send({ error: err });
    }
});

// Staff page api
router.post("/staff", async (req, res) => { 
    try {
        const staffByStream = await Models.Staff.findAll({   // Find all staff with their respected streams
            include: [
                {
                    model: Models.Subject,
                    include: [
                        {
                            model: Models.Stream,
                            attributes: ['stream_id', 'title'],
                        }
                    ],
                    attributes: ['title'],
                }
            ],
            attributes: ['username', 'full_name', 'email'],
        });

        const staffGroups = staffByStream.reduce((acc, staff) => {    // Grouping the staff by streams and subjects
            const subject = staff.Subject; 
            const streams = subject?.Streams ?? [];

            streams.forEach((stream) => {
                const streamId = stream.stream_id; 
                const streamTitle = stream.title;

                if (!acc[streamId]) {                 // Initialize the stream group if it doesn't exist
                    acc[streamId] = {  
                        title: streamTitle,          // Store the title of the stream
                        subjects: {}                 // Prepare to group by subjects
                    };
                }

                if (!acc[streamId].subjects[subject.title]) {    // Initialize the subject group if it doesn't exist
                    acc[streamId].subjects[subject.title] = [];  // Initialize an array for the staff in this subject
                }

                acc[streamId].subjects[subject.title].push({    // Push the staff member's details to the corresponding subject group
                    username: staff.username,
                    full_name: staff.full_name,
                    email: staff.email
                });
            });
            return acc; // Return the accumulator for the next iteration
        }, {});
        
        return res.status(200).send({ staffGroups });
    } catch (err) {
        console.error("Error processing request:", err);
        return res.status(500).send({ error:err });
    }
});




export default router;