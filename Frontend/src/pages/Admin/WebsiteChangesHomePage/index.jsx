import React, { Suspense } from "react";
import { Helmet } from "react-helmet";
import { Text, Heading, Button } from "../../../components";
import IMA from "../../../components/IMA";

const data = [
    { advertisementCo: "Advertisement 1" },
    { advertisementCo: "Advertisement 2" },
    { advertisementCo: "Advertisement 3" },
];

export default function WebsiteChangeHomePage() {
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
              <div className="mt-[27px] flex w-[65%] flex-col items-end gap-[75px] md:w-full md:gap-14 sm:gap-[37px]">
                <Heading size="6xl" as="h4" className="mr-24 md:mr-0">Home Page</Heading>
                <div className="flex flex-col gap-[53px] self-stretch">
                  <Suspense fallback={<div>Loading feed...</div>}>
                    {data.map((d, index) => (
                      <div
                        key={"listadvertisement" + index}
                        className="flex flex-1 items-center justify-between gap-5 sm:flex-col"
                      >
                        <Text size="4xl" as="p" className="mb-[11px] self-end">
                          {d.advertisementCo}
                        </Text>
                        <div className="flex w-[64%] bg-blue_gray-100 p-3.5 sm:w-full">
                          <div className="ml-[35px] flex w-[75%] items-center justify-between gap-5 md:ml-0 md:w-full">
                            <div className="flex w-[40%] justify-center self-start">
                              <div className="flex w-full flex-col items-center">
                                <div className="h-[23px] self-stretch rounded-[10px] bg-indigo-400 shadow-xs" />
                                <Heading size="lg" as="h6" className="relative mt-[-21px] !text-white-A700">Remove</Heading>
                              </div>
                            </div>
                            <div className="flex w-[40%] justify-center">
                              <div className="flex w-full flex-col items-start">
                                <div className="h-[23px] self-stretch rounded-[10px] bg-indigo-400 shadow-xs" />
                                <Heading size="lg" as="h6" className="relative ml-3.5 mt-[-19px] !text-white-A700 md:ml-0">Upload</Heading>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </Suspense>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
