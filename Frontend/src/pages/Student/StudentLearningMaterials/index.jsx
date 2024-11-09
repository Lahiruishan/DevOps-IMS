import React from "react";
import { Helmet } from "react-helmet";
import { Button } from "../../../components";
import IMA from "../../../components/IMA";
import { useNavigate } from "react-router-dom";

export default function StudentLearningMaterials() {
  const navigate = useNavigate();

  const handleHome = () => {
    navigate("/Dashboard");
  };
  const handleTeachers = () => {
    navigate("/TeachersDetails");
  };
  const handleStudentLearningMaterials = () => {
    navigate("/StudentLearningMaterials");
  };
  const handlePayment = () => {
    navigate("/Payments");
  };
  const handleStudentTimeTable = () => {
    navigate("/StudentTimeTable");
  };

  return (
    <>
      <Helmet>
        <title>IMS-web</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="w-full pb-4 bg-gradient">
        <div>
          <IMA className="flex md:flex-col justify-between items-start gap-5 bg-indigo-900 p-5" />

          <div className="flex md:flex-col justify-center items-start gap-8 p-5 md:p-3">
            {/* Sidebar */}
            <div className="h-full w-[17%] md:w-full flex-shrink-0 md:mb-4">
              <div className="flex flex-col items-center mt-16 gap-8 md:mt-8 md:ml-0">
                {/* Sidebar buttons */}
                <div className="w-full space-y-3">
                  <Button shape="square" className="w-full sm:px-5 border border-solid border-black-900" onClick={handleHome}>
                    Home
                  </Button>
                  <Button shape="square" className="w-full sm:px-5 border border-solid border-black-900" onClick={handleTeachers}>
                    Teachers
                  </Button>
                  <Button shape="square" className="w-full sm:px-5 border border-solid border-black-900" onClick={handleStudentLearningMaterials}>
                    Learning Materials
                  </Button>
                  <Button shape="square" className="w-full sm:px-5 border border-solid border-black-900" onClick={handleStudentTimeTable}>
                    Student TimeTable
                  </Button>
                  <Button shape="square" className="w-full sm:px-5 border border-solid border-black-900" onClick={handlePayment}>
                    Payments
                  </Button>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 flex flex-col gap-8 mt-8 md:w-full">
              <div className="flex flex-col gap-8 sm:gap-6 md:gap-4">
                {/* Learning Materials List */}
                <Button size="2xl" as="p" className="tracking-wide text-red-900">
                  1. Tutorials
                </Button>
                <Button size="2xl" as="p" className="tracking-wide text-red-900">
                  2. Past Papers (G.C.E A/L)
                </Button>
                <Button size="2xl" as="p" className="tracking-wide text-red-900">
                  3. Model Papers
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
