import React from "react";
import { Helmet } from "react-helmet";
import {  Heading, Button, } from "../../../components";
import IMA from "../../../components/IMA";

export default function WebsiteChange() {
  return (
    <>
      <Helmet>
        <title>IMS-web</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex flex-col w-full pb-[13px] bg-gradient">
      <IMA className="flex md:flex-col justify-between items-start gap-5 bg-indigo-900" />
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
              <div className="mt-[27px] flex w-[64%] flex-col items-start gap-[57px] md:w-full sm:gap-7">
                <Heading size="6xl" as="h4" className="self-end">
                  Make Changes in Official Website
                </Heading>
                <div className="flex w-[47%] flex-col gap-[35px] md:w-full">

                  {/* backend part */}
                  <Button color="blue_gray_500" size="2xl" shape="round" className="w-full sm:px-5">
                    Home page
                  </Button>
                  <Button color="blue_gray_500" size="2xl" shape="round" className="w-full sm:px-5">
                    Teachers page
                  </Button>
                  <Button color="blue_gray_500" size="2xl" shape="round" className="w-full sm:px-5">
                    Time Table
                  </Button>
                  <Button color="blue_gray_500" size="2xl" shape="round" className="w-full sm:px-5">
                    Contact Us Page
                  </Button>
                  <Button color="blue_gray_500" size="2xl" shape="round" className="w-full sm:px-5">
                    Teachers Personal Page
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
