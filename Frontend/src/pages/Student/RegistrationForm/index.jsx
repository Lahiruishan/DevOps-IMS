import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { Text, Button } from "../../../components";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db } from "API/firebase";
import { addDoc, collection, doc, query, setDoc } from "firebase/firestore";

export default function RegistrationForm() {
  const history=useNavigate();
  const handleRegFee = () => {
    navigate("/RegistrationFee");
  };
 
  async function submit(e){
      e.preventDefault();

      try{

          await axios.post("http://localhost:3001",{
              email,password
          })
          .then(res=>{
              if(res.data=="exist"){
                  alert("User already exists")
              }
              else if(res.data=="notexist"){
                  history("/home",{state:{id:email}})
              }
          })
          .catch(e=>{
              alert("wrong details")
              console.log(e);
          })

      }
      catch(e){
          console.log(e);

      }

  }
  
  const [address, setAddress] = useState('');
  const [batchId, setBatchId] = useState('');
  const [streamId, setStreamId] = useState('');
  const [fullName, setFullName] = useState('');
  const [schoolName, setSchoolName] = useState('');
  const [email, setEmail] = useState('');
  const [studentMobile, setStudentMobile] = useState('');
  const [parentName, setParentName] = useState('');
  const [parentMobile, setParentMobile] = useState('');
  const [gender, setGender] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [profilePic, setProfilePic] = useState(null);

  // Error states
  const [fullNameError, setFullNameError] = useState('');
  const [batchIdError, setBatchIdError] = useState('');
  const [mobileError, setMobileError] = useState('');
  const [genderError, setGenderError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');
  const [profilePicError, setProfilePicError] = useState('');
  const [formError, setFormError] = useState('');

  const navigate = useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault();

    // Validate full name length (5-32 characters)
    if (fullName.length < 5 || fullName.length > 32) {
      setFullNameError("Name must be between 5 and 32 characters.");
    } else {
      setFullNameError('');
    }

    // Validate batch ID (4-digit)
    if (batchId.length !== 4 || isNaN(batchId)) {
      setBatchIdError("Batch ID must be a 4-digit number.");
    } else {
      setBatchIdError('');
    }

    // Validate student and parent mobile numbers (10-12 digits)
    const phoneRegex = /^\d{10,12}$/;
    if (!phoneRegex.test(studentMobile) || !phoneRegex.test(parentMobile)) {
      setMobileError("Mobile number must be between 10 and 12 digits.");
    } else {
      setMobileError('');
    }

    // Validate gender selection
    if (!gender) {
      setGenderError("Gender is required.");
    } else {
      setGenderError('');
    }

    // Validate password (if needed, add additional checks based on backend rules)
    if (!password || password.length < 8 || password.length > 32) {
      setPasswordError("Password must be 8-32 characters.");
    } else {
      setPasswordError('');
    }

    // Confirm passwords match
    if (password !== confirmPassword) {
      setConfirmPasswordError("Passwords do not match.");
    } else {
      setConfirmPasswordError('');
    }

    // Validate profile picture (optional, <2MB)
    if (profilePic && profilePic.size > 2 * 1024 * 1024) {
      setProfilePicError("Profile picture must be under 2MB.");
    } else {
      setProfilePicError('');
    }

    // Construct data and send it to the backend
    const registrationData = {
      full_name: fullName,
      email,
      batch_id: batchId,
      stream_id: streamId,
      school: schoolName,
      gender,
      phone: studentMobile,
      pwd: password,
    };

    try {
      // const response = await axios.post("http://localhost:3001/student/student-registration", {
      //   full_name: fullName,
      //   email,
      //   batch_id: batchId,
      //   stream_id: streamId,
      //   school: schoolName,
      //   gender,
      //   phone: studentMobile,
      //   pwd: password,
      // });

      // if (response.status === 201) {
      //   alert("Registration successful");
      //   navigate("/RegistrationFee");
      // }
      createUserWithEmailAndPassword(auth,email,password).then((result)=>{
        const user = result.user;
        const uid = user.uid;
        updateProfile(user,{displayName:fullName,photoURL:''}).then(()=>{
          registerUser(uid,{...registrationData,pwd:''}).then(()=>{
            alert("Registration successful");
          })
        })
        navigate('/StudentDashboard')
      }).catch((e)=>{
        alert(e)
      })
    } catch (error) {
      console.error("Error during registration:", error.message);
      alert("Registration failed. Please try again.");
    }
  };

  const registerUser =async(uid,details)=>{
    const q = query(doc(db,'users',uid))
    try{
      await setDoc(q,details)
    }catch(e){
      console.log(e)
    }
  }

 const handleLogin = () => {
    navigate("/StudentLoginPage");
  };
  return (
    <>
      <Helmet>
        <title>IMS-web</title>
        <meta
          name="description"
          content="Web site created using create-react-app"
        />
      </Helmet>

      <div className="w-full bg-gradient pb-3 pr-[50px] md:pr-5">
        <div className="flex items-center gap-[50px] md:flex-col">
          <div className="flex w-[35%] flex-col items-center justify-center bg-indigo-900 pb-[500px] pl-10 pt-[298px] md:w-full md:p-4 md:py-4 md:pl-4">
            <Text
              size="vl"
              as="p"
              className="mb-4 ml-10 md:ml-1 !text-purple-50 !font-aclonica "
            >
              Institute <br /> Management <br /> System
            </Text>
          </div>
          <div className="flex flex-1 flex-col items-center justify-center rounded-[10px] bg-blue_gray-100 px-14 pb-[151px] pt-[68px] shadow-xs md:self-stretch md:p-5">
            <div className="flex w-[88%] flex-col items-start gap-[46px] md:w-full">
              <Text size="10xl" as="p" className="!font-actor underline">
                Fill The Register Form
              </Text>

              <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-6 px-10">
  {/* Full name field */}
  <div className="flex flex-col">
    <label htmlFor="full-name" className="text-neutral-1900 text-base font-normal">
      Full Name:
    </label>
    <input
      type="text"
      id="full-name"
      value={fullName}
      onChange={(e) => setFullName(e.target.value)}
      placeholder="Enter your Full {Student's} Name"
      className="w-full text-neutral-600 placeholder:text-neutral-600 px-4 bg-transparent outline-none"
    />
    {fullNameError && <span className="text-red-500 text-sm">{fullNameError}</span>}
  </div>

  {/* School name field */}
  <div className="flex flex-col">
    <label htmlFor="school-name" className="text-neutral-1900 text-base font-normal">
      School Name:
    </label>
    <input
      type="text"
      id="school-name"
      value={schoolName}
      onChange={(e) => setSchoolName(e.target.value)}
      placeholder="Enter your School Name"
      className="w-full text-neutral-600 placeholder:text-neutral-600 px-4 bg-transparent outline-none"
    />
  </div>

  {/* Batch ID field */}
  <div className="flex flex-col">
    <label htmlFor="batch-id" className="text-neutral-1900 text-base font-normal">
      Batch (Year):
    </label>
    <input
      type="text"
      id="batch-id"
      value={batchId}
      onChange={(e) => setBatchId(e.target.value)}
      placeholder="Enter your Batch Year(e.g. 2024)"
      className="w-full text-neutral-600 placeholder:text-neutral-600 px-4 bg-transparent outline-none"
      maxLength="4"
    />
    {batchIdError && <span className="text-red-500 text-sm">{batchIdError}</span>}
  </div>

  {/* Stream ID field */}
  <div className="flex flex-col">
    <label htmlFor="stream" className="text-neutral-1900 text-base font-normal">
      Stream:
    </label>
    <select
      id="stream"
      value={streamId}
      onChange={(e) => setStreamId(e.target.value)}
      className="w-full text-neutral-600 px-4 bg-transparent outline-none"
    >
      <option value="">Select Stream</option>
      <option value="physical">Physical Science</option>
      <option value="bio">Bio Science</option>
      <option value="arts">Arts</option>
      <option value="commerce">Commerce</option>
      <option value="technology">Technology</option>
    </select>
  </div>

  {/* Address field */}
  <div className="flex flex-col">
    <label htmlFor="address" className="text-neutral-1900 text-base font-normal">
      Address:
    </label>
    <input
      type="text"
      id="address"
      value={address}
      onChange={(e) => setAddress(e.target.value)}
      placeholder="Enter your Address"
      className="w-full text-neutral-600 placeholder:text-neutral-600 px-4 bg-transparent outline-none"
    />
  </div>

  {/* Email field */}
  <div className="flex flex-col">
    <label htmlFor="email" className="text-neutral-1900 text-base font-normal">
      Email:
    </label>
    <input
      type="email"
      id="email"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      placeholder="Enter your Email"
      className="w-full text-neutral-600 placeholder:text-neutral-600 px-4 bg-transparent outline-none"
    />
  </div>

  {/* Student Mobile field */}
  <div className="flex flex-col">
    <label htmlFor="student-mobile" className="text-neutral-1900 text-base font-normal">
      Mobile Number (Student):
    </label>
    <input
      type="text"
      id="student-mobile"
      value={studentMobile}
      onChange={(e) => setStudentMobile(e.target.value)}
      placeholder="Mobile Number (0xxxxxxxxx)"
      className="w-full text-neutral-600 placeholder:text-neutral-600 px-4 bg-transparent outline-none"
    />
    {mobileError && <span className="text-red-500 text-sm">{mobileError}</span>}
  </div>

  {/* Parent name field */}
  <div className="flex flex-col">
    <label htmlFor="parent-name" className="text-neutral-1900 text-base font-normal">
      Parent Name:
    </label>
    <input
      type="text"
      id="parent-name"
      value={parentName}
      onChange={(e) => setParentName(e.target.value)}
      placeholder="Enter your Parent's Name"
      className="w-full text-neutral-600 placeholder:text-neutral-600 px-4 bg-transparent outline-none"
    />
  </div>

  {/* Parent Mobile field */}
  <div className="flex flex-col">
    <label htmlFor="parent-mobile" className="text-neutral-1900 text-base font-normal">
      Mobile Number (Parent):
    </label>
    <input
      type="text"
      id="parent-mobile"
      value={parentMobile}
      onChange={(e) => setParentMobile(e.target.value)}
      placeholder="Mobile Number (0xxxxxxxxx)"
      className="w-full text-neutral-600 placeholder:text-neutral-600 px-4 bg-transparent outline-none"
    />
  </div>

  {/* Gender selection */}
  <div className="flex flex-col">
    <label htmlFor="gender" className="text-neutral-1900 text-base font-normal">
      Gender:
    </label>
    <select
      id="gender"
      value={gender}
      onChange={(e) => setGender(e.target.value)}
      className="w-full text-neutral-600 px-4 bg-transparent outline-none"
    >
      <option value="">Select Gender</option>
      <option value="male">Male</option>
      <option value="female">Female</option>
    </select>
    {genderError && <span className="text-red-500 text-sm">{genderError}</span>}
  </div>

  {/* Password field */}
  <div className="flex flex-col">
    <label htmlFor="password" className="text-neutral-1900 text-base font-normal">
      Password:
    </label>
    <input
      type="password"
      id="password"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      placeholder="Enter your Password"
      className="w-full text-neutral-600 placeholder:text-neutral-600 px-4 bg-transparent outline-none"
    />
    {passwordError && <span className="text-red-500 text-sm">{passwordError}</span>}
  </div>

  {/* Confirm Password field */}
  <div className="flex flex-col">
    <label htmlFor="confirm-password" className="text-neutral-1900 text-base font-normal">
      Confirm Password:
    </label>
    <input
      type="password"
      id="confirm-password"
      value={confirmPassword}
      onChange={(e) => setConfirmPassword(e.target.value)}
      placeholder="Re-enter your Password"
      className="w-full text-neutral-600 placeholder:text-neutral-600 px-4 bg-transparent outline-none"
    />
    {confirmPasswordError && (
      <span className="text-red-500 text-sm">{confirmPasswordError}</span>
    )}
  </div>

  {/* Profile picture upload */}
  <div className="flex flex-col">
    <label htmlFor="profile-pic" className="text-neutral-1900 text-base font-normal">
      Profile Picture:
    </label>
    <input
      type="file"
      id="profile-pic"
      onChange={(e) => setProfilePic(e.target.files[0])}
      accept="image/*"
      className="w-full text-neutral-600 placeholder:text-neutral-600 px-4 bg-transparent outline-none"
    />
    {profilePicError && <span className="text-red-500 text-sm">{profilePicError}</span>}
  </div>

  {/* Error message for incomplete form */}
  {formError && (
    <div className="col-span-2 text-red-500 mt-2">{formError}</div>
  )}

  {/* Submit button */}
  <Button
    type="submit"
    size="md"
    className="!bg-indigo-10 text-neutral-150 flex items-center justify-center mt-[35px] mb-[10px] col-span-2"
  >
    Submit Details
  </Button>

   {/*Feee button */}
   <Button
    type="submit"
    size="md"
    className="!bg-indigo-10 text-neutral-150 flex items-center justify-center mt-[35px] mb-[10px] col-span-2"
    onClick={handleRegFee}
  >
    Register 
  </Button>
</form>
              {/* Link to login page */}
              <div className="w-full flex items-center justify-center mt-8">
                <p className="text-neutral-500">
                  Already have an account?{" "}
                  <Button
                    type="button"
                    onClick={handleLogin}
                    className="text-indigo-900 "
                  >
                    Log in
                  </Button>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
