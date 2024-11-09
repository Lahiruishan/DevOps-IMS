import React from "react";
import { Helmet } from "react-helmet";
import { Heading, Button, Text } from "../../../components";
import IMA from "../../../components/IMA";
import { useNavigate } from 'react-router-dom';

export default function StudentTeachersDetails() {
  const navigate = useNavigate();

  const handleHome = () => {
    navigate('/StudentDashboard');
  };
  const handleTeachers = () => {
    navigate('/StudentTeachersDetails');
  };
  const handleStudentLearingMaterials = () => {
    navigate('/StudentLearningMaterials');
  };
  const handlePayment = () => {
    navigate('/PaymentsStudents');
  };
  const handleStudentTimeTable = () => {
    navigate('/StudentTimeTable');
  };

  return (
    <>
      <Helmet>
        <title>IMS-web</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex flex-col w-full pb-[13px] bg-gradient">
        <div>
          <IMA className="flex md:flex-col justify-between items-start gap-5 bg-indigo-900" />
        </div>
        <div className="flex w-[87%] md:w-full md:p-5">
          <div className="flex md:flex-col justify-between items-start w-full gap-5">
            {/* Sidebar Section */}
            <div className="h-[825px] w-[18%] md:w-full md:h-auto relative">
              <div className="flex flex-col items-center mt-[65px] ml-[41px] gap-[25px] md:ml-0">
                {/* Sidebar Content can be added here */}
              </div>
              <div className="w-full h-max left-0 bottom-0 right-0 top-0 m-auto absolute">
                <div>
                  <Button shape="square" className="w-full sm:px-5 font-bold z-[1]" onClick={handleHome}>
                    Home
                  </Button>
                  <div className="h-[52px] mt-[-49px] bg-indigo-100 shadow-bs" />
                </div>
                <div className="flex flex-col mt-[-52px] py-[52px] md:py-5 bg-indigo-300">
                  <Button shape="square" className="w-full sm:px-5" onClick={handleTeachers}>
                    Teachers
                  </Button>
                  <Button shape="square" className="w-full sm:px-5" onClick={handleStudentLearingMaterials}>
                    Learning Materials
                  </Button>
                  <Button shape="square" className="w-full sm:px-5" onClick={handleStudentTimeTable}>
                    Student TimeTable
                  </Button>
                  <Button shape="square" className="w-full sm:px-5" onClick={handlePayment}>
                    Payments
                  </Button>
                  <div className="h-[52px] mt-[-1px] mb-[409px] bg-indigo-100 shadow-bs" />
                </div>
              </div>
            </div>

            {/* Main Content Section */}
            <div className="flex flex-col items-start w-[70%] md:w-full mt-[61px] gap-[84px] md:gap-[63px] sm:gap-[42px]">
              <Heading size="lg" as="h1" className="ml-[327px] md:ml-0 !font-aclonica">
                Teachers
              </Heading>
              <div className="self-stretch">
                <div className="flex flex-col items-end gap-[31px]">
                  <div className="self-stretch">
                    <div className="flex flex-col items-start">
                      <div className="flex self-stretch bg-cyan-800 rounded-[10px]">
                        <Heading size="6xl" as="h3" className="mt-[6px] ml-[59px] md:ml-0 !text-white-A700">
                          Name
                        </Heading>
                      </div>
                      <Heading size="6xl" as="h3" className="mt-[-24px] ml-[620px] md:ml-0 !text-white-A700">
                        Subject
                      </Heading>
                    </div>
                  </div>

                  {/* Teacher Data */}
                  <div className="flex self-stretch justify-between gap-5 p-1 bg-blue_gray-500 flex-wrap rounded-[10px]">
                    <Text size="3xl" as="p" className="self-start ml-[21px] md:ml-0">
                      Chathuranga Dharmadasa
                    </Text>
                    <Text size="3xl" as="p" className="self-start mr-[469px] md:mr-0">
                      Chemistry
                    </Text>
                  </div>
                  <div className="flex self-stretch justify-between items-start gap-5 bg-blue_gray-500 flex-wrap rounded-[10px]">
                    <Text size="3xl" as="p" className="ml-[58px]">
                      Kasun Pushpakumara
                    </Text>
                    <Text size="4xl" as="p" className="mt-1.5 mr-[492px]">
                      Biology
                    </Text>
                  </div>
                  <div className="flex self-stretch justify-between gap-5 p-1 bg-blue_gray-500 flex-wrap rounded-[10px]">
                    <Text size="3xl" as="p" className="self-start ml-[57px] md:ml-0">
                      Savindu Lasantha
                    </Text>
                    <Text size="3xl" as="p" className="mr-[486px] md:mr-0">
                      C. Maths
                    </Text>
                  </div>
                  <div className="flex self-stretch justify-between items-start gap-5 bg-blue_gray-500 flex-wrap rounded-[10px]">
                    <Text size="3xl" as="p" className="mb-[11px] ml-[60px]">
                      Dilshan Chathuranga
                    </Text>
                    <Text size="3xl" as="p" className="mr-[488px]">
                      Physics
                    </Text>
                  </div>

                  {/* Back Button Section */}
                  <div className="flex justify-between w-[33%] md:w-full mr-[22px] gap-5 md:mr-0">
                    <Button color="indigo_900_01" size="xs" shape="square" className="sm:px-5 font-bold min-w-[72px]" onClick={handleHome}>
                      Back
                    </Button>
                    <div className="flex justify-center w-[26%]">
                      <div className="self-stretch h-[20px] mt-[-18px] bg-indigo-900_01 shadow-xs" />
                    </div>
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
