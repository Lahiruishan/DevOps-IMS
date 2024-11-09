import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { Text, Button } from "../../../components";
import IMA from "../../../components/IMA";
import { useNavigate } from "react-router-dom";
import Calendar from "components/calender/calFunctions";

export default function StudentDashboard() {
  const navigate = useNavigate();
  const [date, setDate] = useState(new Date());
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = () => {
      const mockEvents = [
        { date: "10th Feb", time: "08:00 AM", eventName: "2025 First Theory Class" },
        { date: "15th Mar", time: "10:00 AM", eventName: "Second Lecture" },
        { date: "20th Apr", time: "12:00 PM", eventName: "Practical Lab Session" },
      ];
      setEvents(mockEvents);
    };
    fetchEvents();
  }, []);

  const handleProfile = () => {
    navigate("/RegistrationForm");
  };
  const handleLogout = () => {
    navigate("/StudentLoginPage");
  };
  const handleHome = () => {
    navigate("/StudentDashboardPage");
  };
  const handleTeachers = () => {
    navigate("/StudentTeachersDetails");
  };
  const handleStudentLearningMaterials = () => {
    navigate("/StudentLearningMaterials");
  };
  const handlePayment = () => {
    navigate("/PaymentsStudents");
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
        <IMA className="flex md:flex-col justify-between items-start p-5 bg-indigo-900" />
        
        <div className="flex md:flex-col justify-center items-start gap-8 p-5 md:p-3">
          {/* Sidebar */}
          <div className="w-[17%] md:w-full flex-shrink-0">
            <Button shape="square" className="w-full sm:px-5 border border-solid border-black-900" onClick={handleHome}>
              Home
            </Button>
            <div className="mt-4 flex flex-col gap-4 bg-indigo-300 p-3 rounded-lg shadow-md">
              <Button shape="square" className="w-full sm:px-5" onClick={handleTeachers}>
                Teachers
              </Button>
              <Button shape="square" className="w-full sm:px-5" onClick={handleStudentLearningMaterials}>
                Learning Materials
              </Button>
              <Button shape="square" className="w-full sm:px-5" onClick={handleStudentTimeTable}>
                Student TimeTable
              </Button>
              <Button shape="square" className="w-full sm:px-5" onClick={handlePayment}>
                Payments
              </Button>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1 flex flex-col gap-6">
            <div className="flex justify-between items-center flex-wrap gap-3">
              <Button size="2xl" as="h3" className="!text-blue_gray-900">
                Upcoming Events
              </Button>
              <div className="flex gap-3">
                <Button as="p" className="h-[35px] px-5 border border-black-900 bg-blue_gray-100" onClick={handleProfile}>
                  My Profile
                </Button>
                <Button as="p" className="h-[35px] px-5 border border-black-900 bg-blue_gray-100">
                  Settings
                </Button>
                <Button as="p" className="h-[35px] px-5 border border-black-900 bg-blue_gray-100" onClick={handleLogout}>
                  Logout
                </Button>
              </div>
            </div>

            <div className="flex md:flex-col gap-8">
              {/* Events List */}
              <div className="flex-1 flex flex-col gap-6">
                {events.map((event, index) => (
                  <div key={index} className="flex flex-wrap justify-between items-center p-3 bg-blue-200 rounded-lg shadow-xs gap-4">
                    <div className="flex gap-5">
                      <Text size="s" as="p">
                        {event.date}
                      </Text>
                      <Text size="s" as="p">
                        {event.time}
                      </Text>
                    </div>
                    <Text size="xs" as="p" className="text-right">
                      {event.eventName}
                    </Text>
                  </div>
                ))}
              </div>

              {/* Calendar */}
              <div className="bg-white p-4 rounded-lg shadow-md flex-shrink-0 h-[53vh]">
                <Calendar />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
