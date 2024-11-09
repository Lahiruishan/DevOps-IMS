import React from "react";
import { Helmet } from "react-helmet";
import { Text, Input, Heading, Button } from "../../../components";
import IMA from "../../../components/IMA";

export default function WebsiteChangesContactUs() {
  return (
    <>
    {/* Helmet is used to manage the document head */}
      <Helmet>
        <title>IMS-web</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
       {/* Main container with full width and gradient background */}
      <div className="flex flex-col w-full pb-[13px] bg-gradient">
         {/* IMA component with styles for flex layout */}
      <IMA className="flex md:flex-col justify-between items-start gap-5 bg-indigo-900" />
        {/* Flex container for layout */}
        <div>
          <div className="flex w-[64%] md:w-full md:p-5">
            
            <div className="flex w-full items-start justify-between gap-5 md:flex-col">
              <div className="relative h-[825px] w-[25%] md:h-auto md:w-full">
                <div className="ml-[41px] mt-[65px] flex flex-col items-center gap-[25px] md:ml-0">
                  
                </div>
                <div className="absolute w-full h-max left-0 bottom-0 right-0 top-0 m-auto">
                  <div>
                    <Button shape="square" className="w-full sm:px-5 font-bold z-[1]">
                      Home
                    </Button>
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
                  <Button shape="square" className="w-full sm:px-5">
                   Change to Payments
                  </Button>
                  </div>
                </div>
              </div>
              <div className="mt-[37px] flex w-[58%] flex-col items-center gap-[77px] md:w-full md:gap-[57px] sm:gap-[38px]">
                <Heading size="7xl" as="h4">
                  Contact Details Page
                </Heading>
                <div className="flex flex-col items-end self-stretch">
                  <div className="flex items-start justify-between gap-5 self-stretch sm:flex-col">
                    <Text size="5xl" as="p">
                      Address
                    </Text>
                    <Input shape="round" name="edittext" className="w-[73%] sm:w-full sm:px-5" />
                  </div>
                  <div className="mt-[23px] flex items-start justify-between gap-5 self-stretch sm:flex-col">
                    <Text size="5xl" as="p" className="mt-0.5">
                      Mail
                    </Text>
                    <Input shape="round" name="edittext" className="w-[73%] sm:w-full sm:px-5" />
                  </div>
                  <div className="mt-[23px] flex items-start justify-between gap-5 self-stretch sm:flex-col">
                    <Text size="5xl" as="p" className="mt-0.5">
                      Phone
                    </Text>
                    <Input shape="round" name="edittext" className="w-[73%] sm:w-full sm:px-5" />
                  </div>
                  <div className="mr-[3px] mt-[95px] flex w-[18%] justify-end md:mr-0 md:w-full">
                    <Button color="light_blue_900" shape="round" className="w-full font-bold">
                      Update
                    </Button>
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
