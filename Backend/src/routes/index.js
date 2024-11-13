import { Router } from "express";
import studentsRouter from "./students.js";      // routes for student api's
import commonRouter from "./common.js";          // routes for common api's
import adminRouter from "./admin.js";            // routes for admin api's
import staffRouter from "./staff.js";            // routes for staff api's

const router = Router();

router.use(studentsRouter);
router.use(commonRouter);
router.use(adminRouter);
router.use(staffRouter);

export default router;