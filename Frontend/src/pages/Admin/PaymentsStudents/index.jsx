import React from "react";
import { Helmet } from "react-helmet";
import {   Heading, Button } from "../../../components";
import IMA from "../../../components/IMA";
import { useNavigate } from "react-router-dom";




export default function PaymentsStudents() {
  
  const navigate = useNavigate();
  const handlePayment2025 = () => {
    navigate("/RegistrationFee");
  };
  const handlePayment2026 = () => {
    navigate("/RegistrationFee");
  }; 
  const handlePayment2027 = () => {
    navigate("/RegistrationFee");
  };
  
  return (
    <>
    {/* Helmet is used to manage the document head */}
      <Helmet>
        <title>IMS-web</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      {/* Main container with full width and gradient background */}
      <div className="w-full pb-[13px] bg-gradient">
        <div>

          {/* IMA component with styles for flex layout */}
          <IMA className="flex md:flex-col justify-between items-start gap-5 bg-indigo-900" />
           {/* Flex container for layout */}
          <div className="flex md:flex-col justify-center items-start gap-[49px]">
            {/* Sidebar container */}
            <div className="h-[825px] w-[17%] md:w-full md:h-auto md:p-5 relative">
              <div className="flex flex-col items-center mt-[65px] ml-[41px] gap-[25px] md:ml-0">
               {/* Sidebar content can be added here */} 
              </div>
               {/* Buttons container */}
              <div className="w-full h-max left-0 bottom-0 right-0 top-0 m-auto absolute">
                <div>
                  <Button shape="square" className="w-full sm:px-5 z-[1] border-black-900 border border-solid">
                    Home
                  </Button>
                    {/* Additional buttons */}
                  <div className="h-[52px] mt-[-49px] bg-indigo-100 shadow-bs" />
                </div>
                <div className="flex flex-col mt-[-52px] py-[52px] md:py-5 bg-indigo-300">
                <Button shape="square" className="w-full sm:px-5">
                    Teachers
                  </Button>
                  <Button shape="square" className="w-full sm:px-5">
                    Student Details
                  </Button>
                  <Button shape="square" className="w-full sm:px-5">
                    Papers
                  </Button>
                  <Button shape="square" className="w-full sm:px-5">
                    TimeTable
                  </Button>
                  <Button 
                 shape="square"
                 className="mb-[408px] w-full border border-solid border-black-900 font-bold sm:px-5">
                    Change to Payments
                 </Button>
                 </div>
                </div>
              </div>
              {/* Main content container */}
              <div className="mt-8 flex items-start gap-[30px] sm:flex-col">
                <div className="mt-[109px] flex flex-col gap-[21px]">
                    <Button size="6xl" as="p" onClick={handlePayment2025}>
                        1.2025 A/L
                    </Button>
                    <Button size="6xl" as="p"onClick={handlePayment2026}>
                        2.2026 A/L
                    </Button>
                    <Button size="6xl" as="p"onClick={handlePayment2027}>
                        3.2027 A/L
                    </Button>
                </div>
                 {/* Heading for Student's Payments */}
                <Heading size="11xl" as ="h3">Student's  Payments </Heading>
              </div>
            </div>
        </div>
    </div>
</>
  );
}