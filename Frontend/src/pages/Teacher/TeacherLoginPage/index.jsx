import React from "react";
import {Helmet} from "react-helmet";
import {  Text,Button } from "../../../components";
import { useNavigate} from 'react-router-dom';



export default function TeacherLoginPage() {
  const navigate = useNavigate();

  const handleLogin = () => {
      navigate('/Teacherdashboard'); 
  };

  const handleRegister = () => {
      navigate('/registrationForm'); 
  };
  return (
    <>
     {/* Helmet is used to manage the document head */}
    <Helmet>
      <title>IMS-web</title>
      <meta name="description" content="Web site created using create-react-app" />
    </Helmet>

     {/* Main container with full width and gradient background */}
    <div className="w-full bg-gradient pb-3 pr-[59px] md:pr-5">

      {/* Flex container for layout, with items centered and some gap between them */}
     
    <div className="flex items-center gap -[50px] md:flex-col">
    <div className="flex w-[48%] flex-col items-center justify-center bg-indigo-900 pb-[558px] pl-14 pt-[297px] md:w-full md:p-5 md:py-5 md:pl-5">
    <Text size="vl" as="p" className="mb-4 ml-96 md:ml-0 !text-purple-50 !font-aclonica">

      Institute <br/>  Management <br/>  System
   
      </Text>
    </div>
{/* Right side of the page with login form */}
<div className="flex flex-1 flex-col items-center justify-center rounded-[10px] bg-blue_gray-100 px-14 pb-[151px] pt-[68px] shadow-xs md:self-stretch md:p-5">
<div className="flex w-[88%] flex-col items-start gap-[47px] md:w-full">
  <Text size="10xl" as="p" className="! font-actor underline">
    Login To Your Account As A Teacher
  </Text>
  {/* Login form */}
  <form action="" class="px-10">
{/* Username field */}
  <div className="ml-6 flex flex-col items-start self-stretch md:ml-0">
  <label for="" class="text-neutral-1900 text-base font-normal ">User Name :</label>
  <input type="text" name="" placeholder="Enter your Email Address " id=""
  class="w-full text-neutral-600 placeholder:text-neutral-600 px-4 bg-transparent outline-none" />

  <div className="mt-4 h-[42px] self-stretch rounded-[15px] bg-blue_gray-100"/>
 
 {/* Password field */}
<div className="mt-7 flex flex-col">
<label for="" class="text-neutral-1900 text-base font-normal">Password :</label>
<input type="text" name="" placeholder="Enter your Password " id=""
   class="w-full text-neutral-600 placeholder:text-neutral-600 px-4 bg-transparent outline-none " />
                           
</div>
<div className="mt-4 h-[42px] self-stretch rounded-[15px] bg-blue_gray-100"/>

{/* Login button */}
<div className="relative mt-[50px] flex justify-center gap-4">
 <div>
   
  <a href="#" className="mt-[50px] self-center">
  <Button as="h2" onClick={handleLogin}>Login</Button>

</a>
{/* Register button */}
<a href="#" className="mt-[40px] self-center">
  <Button as="h2" onClick={handleRegister}>Register</Button>
  <label for="" class="text-neutral-1900 text-base font-normal-underline "> You can Register here.
                   </label>

</a>
</div>

  <div className="absolute bootom-0 left-0 right-0 top-0 m-auto h-[44px] w-full rounded-[15px] bg-blue_gray-100"/>
</div>

<div>

</div>
  </div>
  </form>
  </div> 
</div>
    </div>
    </div>

    </>
  );
 
};

 