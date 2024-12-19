import React from "react";
import { useRoutes } from "react-router-dom";
 //import Home from "./pages/Home";

// Admin
import AdminDashboard from "./pages/Admin/AdminDashboard";
import WebsiteChanges from "./pages/Admin/WebsiteChange"
import Payments from "./pages/Admin/Payments"; 
import PaymentsStudents from "./pages/Admin/PaymentsStudents";
import PaymentsTeachers from "./pages/Admin/PaymentsTeachers";
import StudentDetails from "./pages/Admin/StudentDetails";
import TeachersDetails from "./pages/Admin/TeachersChange";
import WebsiteChange from "./pages/Admin/WebsiteChange";
import WebsiteChangesHomePage from "./pages/Admin/WebsiteChangesHomePage";
import WebsiteChangesContactUs from "./pages/Admin/WebsiteChangesContactUs";
import WebsiteChangesTeachersPage from "./pages/Admin/WebsiteChangesTeachersPage";
import WebsiteChangesTeachersPersonalPage from "./pages/Admin/WebsiteChangesTeachersPersonalPage";
import WebsiteChangesTimetablePage from "./pages/Admin/WebsiteChangesTimetablePage";

//Student
import StudentDashboard from "./pages/Student/StudentDashboard";
import StudentTimeTable from "./pages/Student/StudentTimeTable";
import StudentTeachersDetails from "./pages/Student/StudentTeachersDetails";
import RegistrationFee from "./pages/Student/StudentRegistrationFee";
import RegistrationForm from "./pages/Student/RegistrationForm";
import StudentLearningMaterials from "./pages/Student/StudentLearningMaterials";
import StudentLoginPage from "pages/Student/StudentLoginPage";


//Teacher
import TeacherLoginPage from "./pages/Teacher/TeacherLoginPage";
import TeacherDashboard from "./pages/Teacher/TeacherDashboard";
import TeacherStudentDetails from "pages/Teacher/TeacherStudentsDetails";
import TeacherTimeTable from "./pages/Teacher/TeacherTimeTable";


import HomePageNewPage from "./pages/HomePageNew/index";

import Teacher from "./pages/HomePageNew/Homepages/Teacher/Teacher";
import TimeTable from "./pages/HomePageNew/Homepages/TimeTable/TimeTable";
import Blog from "./pages/HomePageNew/Homepages/Blog/Blog.jsx";
import MiniVideos from "./pages/HomePageNew/Homepages/MiniVideos/MiniVideos.jsx";


const ProjectRoutes = () => {
  let element = useRoutes([
    { path: "/",
     element: < HomePageNewPage/> }
     ,
     {
      path: "HomePageNewPage",
     element:<HomePageNewPage />,
     }
     ,
     {
      path: "StudentLoginPage",
     element:<StudentLoginPage />,
     }
     ,
     {
      path: "TeacherLoginPage",
     element:<TeacherLoginPage />,
     },
     {
      path: "RegistrationForm",
     element:<RegistrationForm />,
     },
     {
      path: "RegistrationFee",
     element:<RegistrationFee />,
     },

    {
      path: "StudentDashboard",
      element: <StudentDashboard />,
    },
    {
      path: "TeacherDashboard",
      element: <TeacherDashboard />,
    },
    {
      path: "WebsiteChanges",
      element: <WebsiteChanges />,
    }
    ,
    {
      path: "Payments",
      element: <Payments />,
    },
    {
      path: "PaymentsStudents",
      element: <PaymentsStudents />,
    },
    {
      path: "PaymentsTeachers",
      element: <PaymentsTeachers />,
    },
    {
      path: "StudentDetails",
      element:<StudentDetails/>,
    },
    {
      path:"StudentTimeTable",
      element:<StudentTimeTable />
    },
    {
      path:"StudentLearningMaterials",
      element:<StudentLearningMaterials/>
    }
    ,
    {
      path:"TeachersDetails",
      element:<TeachersDetails/>
    },
    {
      path:"StudentTeachersDetails",
      element:<StudentTeachersDetails/>
    },
    {
      path:"WebsiteChange",
      element:<WebsiteChange/>
    },
    {
      path:"WebsiteChangesHomePage",
      element:<WebsiteChangesHomePage/>
    },
    {
      path:"WebsiteChangesContactUs",
      element:<WebsiteChangesContactUs/>
    },
    {
      path:"WebsiteChangesTeachersPage",
      element:<WebsiteChangesTeachersPage/>
    },
    {
      path:"WebsiteChangesTeachersPersonalPage",
      element:<WebsiteChangesTeachersPersonalPage/>
    },
    {
      path:"WebsiteChangesTimetablePage",
      element:<WebsiteChangesTimetablePage/>
    }
    ,
    {
      path:"TeacherStudentDetails",
      element:<TeacherStudentDetails/>
    }
    ,
    {
      path:"AdminDashboard",
      element:<AdminDashboard/>
    }
    ,
    { 
      path:"TeacherTimeTable",
      element:<TeacherTimeTable/>

    }
    ,
    {path:"Teacher",element:<Teacher/>}  // -- Here im declaring routes in the navigation bar --
    ,
    {path:"Blog",element:<Blog/>}             // -- Navigation bar -> blog --
    ,
    {path:"TimeTable",element:<TimeTable/>}  // -- Navigation bar -> TT --
    ,
    {path:"MiniVideos",element:<MiniVideos/>} // -- Navigation bar -> MV --

  ]);

  return element;
};

export default ProjectRoutes;
