import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
    full_name: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 32
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: /.+\@.+\..+/
    },
    pwd: {
        type: String,
        required: true
    },
    school: {
        type: String,
        required: true
    },
    district: {
        type: String,
        required: true
    },
    stream_id: {
        type: String,
        required: true
    },
    batch_id: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true,
        minlength: 10,
        maxlength: 12
    },
    profile_pic: {
        type: String
    },
    emailParent: {
        type: String,
        match: /.+\@.+\..+/
    },
    phoneParent: {
        type: String,
        minlength: 10,
        maxlength: 12
    },
    parentName: {
        type: String,
        minlength: 5,
        maxlength: 32
    }
});

const Student = mongoose.model("Student", studentSchema);

export default Student;
