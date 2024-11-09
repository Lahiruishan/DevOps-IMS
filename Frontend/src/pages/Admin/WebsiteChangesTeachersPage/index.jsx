import React, { Suspense } from "react";
import { Helmet } from "react-helmet";
import { Text, Heading, Button } from "../../../components";
import IMA from "../../../components/IMA";

export default function WebsiteChangesTeachersPage() {
  return (
    <>
      <Helmet>
        <title>IMS-web</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex flex-col w-full pb-[13px] bg-gradient">
      <IMA className="flex md:flex-col justify-between items-start gap-5 bg-indigo-900" />
      
        <div className="flex w-[70%] md:w-full md:p-5">
          <div className="flex w-full items-start justify-between gap-5 md:flex-col">
            <div className="relative h-[825px] w-[28%] md:h-auto md:w-full">
              <div className="ml-[41px] mt-[65px] flex flex-col items-center gap-[25px] md:ml-0">
               </div>
              <div className="absolute w-full h-max left-0 bottom-0 right-0 top-0 m-auto">
                <div>
                  <Button shape="square" className="w-full sm:px-5 font-bold z-[1]">Home</Button>
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
                  Website Change
                  </Button> </div>
              </div>
            </div>
            <div className="ml-[104px] mt-[85px] flex flex-col items-start gap-[19px] md:ml-0 md:w-full">
              <div className="flex flex-col items-start gap-[39px] self-start">
                <Heading size="4xl" as="h5" className="underline">Teacher 1</Heading>
                <Text size="5xl" as="p">Name</Text>
                <Text size="5xl" as="p">Qualifications</Text>
                <Text size="5xl" as="p" className="mt-[19px]">Tel No</Text>
                <Text size="5xl" as="p" className="mt-[18px]">Email</Text>
              </div>
              <div className="flex flex-col items-start gap-[39px] self-start mt-[73px]">
                <Heading size="4xl" as="h5" className="underline">Teacher 2</Heading>
                <Text size="5xl" as="p">Name</Text>
                <Text size="5xl" as="p">Qualifications</Text>
                <Text size="5xl" as="p" className="mt-[19px]">Tel No</Text>
                <Text size="5xl" as="p" className="mt-[18px]">Email</Text>
              </div>
            </div>
            <div className="ml-[77px] mt-[27px] flex flex-1 flex-col items-end gap-[92px] md:ml-0 md:gap-[69px] md:self-stretch sm:gap-[46px]">
              <Heading size="6xl" as="h4" className="mr-[117px] md:mr-0">Teachers Page</Heading>
              <div className="flex flex-col items-end self-stretch">
                <div className="flex flex-col gap-[141px] self-stretch">
                  <Suspense fallback={<div>Loading feed...</div>}>
                    {[...Array(2)].map((_, index) => (
                      <div key={"listprice" + index} className="flex flex-col gap-[17px]">
                        <Heading size="lg" as="h6" className="flex items-center justify-center rounded-[5px] bg-gray-50 px-[35px] py-[3px] sm:px-5">XXXX</Heading>
                        <Heading size="lg" as="h6" className="flex items-center justify-center rounded-[5px] bg-gray-50 px-[35px] py-[3px] sm:px-5">XXXX</Heading>
                        <Heading size="lg" as="h6" className="flex items-center justify-center rounded-[5px] bg-gray-50 px-[35px] py-[3px] sm:px-5">XXXX</Heading>
                      </div>
                    ))}
                  </Suspense>
                </div>
                <Button color="blue_gray_100" size="sm" shape="square" className="mt-16 min-w-[77px] font-bold">Update</Button>
                <Heading size="md" as="h6" className="text-shadow-ts mt-6 flex items-center justify-center bg-blue_gray-100 py-0.5 pl-[21px] pr-[7px] sm:pl-5">Add A New Teacher</Heading>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
