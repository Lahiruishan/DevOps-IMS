import React from "react";
import { Helmet } from "react-helmet";
import { Input, Text, Heading, Button } from "../../../components";
import IMA from "../../../components/IMA";

export default function PaymentsTeachers() {
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
                  <div className="h-[52px] mt-[-49px] bg-indigo-100 shadow-bs" />
                </div>
                {/* Additional buttons */}
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
                    size="s"
                    as="h5"
                    className="flex justify-center items-center h-[52px] px-[35px] py-3 sm:px-5 bg-indigo-100 shadow-bs"
                  >
                    Payments
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
                  {/* Buttons for different years can be added here */} 
                </div>
                 {/* Heading for Teacher's Payments */}
                <Heading size="19xl" as ="h2">Teacher's  Payments </Heading>
                </div>
                 {/* Form container */}
              <div className="mt-[23px] flex flex-col items-end 5 self-stretch">
                <div className="flex items-center justify-between gap-5 self-stretch sm:flex-col">
                <Text size="5xl" as="p" className="mt-0.5">Name:</Text>
                <Input shape="round" name="edittext1" className="w-[73%] sm:w-full sm:px-5"/>
                <div className="h-[37px] w-75%] rounded-[5px] bg-gray-50"/>
              </div>

              <div className="mt-[23px] flex flex-col items-end self-stretch">
                <div className="flex items-center justify-between gap-5 self-stretch sm:flex-col">
                <Text size="5xl" as="p" className="mt-0.5">Subject:</Text>
                <Input shape="round" name="edittext1" className="w-[73%] sm:w-full sm:px-5"/>
                </div>

                <div className="mt-[23px] flex items-start justify-between gap-5 self-stretch sm:flex-col">
                <Text size="5xl" as="p" className="mt-[3px]">Month:</Text>
                <Input shape="round" name="edittext2" className="w-[73%] sm:w-full sm:px-5"/>
                <div className="h-[37px] w-73%] rounded-[5px] bg-gray-50"/>
                </div>

                <div className="mt-[23px] flex items-center justify-between gap-5 self-stretch sm:flex-col">
                <Text size="5xl" as="p" className="mt-0.5">Amount:</Text>
                <Input shape="round" name="edittext3" className="w-[73%] sm:w-full sm:px-5"/>
                </div>

                <div className="mt-[65px] flex w-[13%] justify-end md:w-full">
                    <div className="flex w-full flex-col items-center">
                        <div className="h-[32px] self-stretch rounded-[5px] bg-light_blue-900"/>
                        <Button as="h2">Pay </Button>

                    </div>
                </div>
              </div>
            </div>
        </div>
    </div>
</div>  
</>
  );
}