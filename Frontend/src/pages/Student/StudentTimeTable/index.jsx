import {Helmet} from "react-helmet";
import {Button,Text,Heading} from "../../../components";
import { ReactTable } from "../../../components/ReactTable";
import {createColumnHelper} from "@tanstack/react-table";
import React from "react";
import IMA from "../../../components/IMA";

// dummy data for the timetable


const table2Data = [
    {day: "Monday",Hnumber:"H1",time:"7.00 a.m-1.00p.m", class:"Chemistry-Theory- 2024 A/L" ,teacher :"Chathuranga Dharmadasa"},
    {day: "Tuesday",Hnumber:"H2" ,time:"8.00 a.m-2.00p.m", class:"Physics-Theory- 2025 A/L",teacher :"Dilshan Chathuranga"},
    {day: "Saturday",Hnumber:"H1",time:"2.00 p.m-5.00p.m", class:"Biology-Theory- 2024 A/L" ,teacher :"Kasun Pushpakumara"},
    {day: "Sunday",Hnumber:"H2" ,time:"8.00 a.m-2.00p.m", class:"Com.Maths-Theory- 2025 A/L",teacher :" Savindu Lasantha"},

];

export default function StudentTimeTable(){
    const table2Columns = React.useMemo(() =>{
        const table2ColumnHelper = createColumnHelper();
        // Define columns for the ReactTable
        return ([
            table2ColumnHelper.accessor("day", {
                cell: (info) =>(
                    <Text as = "p" className="tracking-[0.10px]">
                        {info?.getValue?.()}
                    </Text>
                ),
                header: (info) =>(
                    <Text as="p" className="px-[35px] pb-1.5 pt-3 tracking-[0.10px] !text-white-A700 md:p-5 sm:px-5">Day</Text>
                  
                ),
                meta: {width: "155px"},
            }),



            table2ColumnHelper.accessor("Hnumber",{
                cell: (info) =>(
                            <Text as="p" className="tracking-[0.10px]">
                                {info?.getValue?.()}
                            </Text>
                            ),
                            header: (info) =>(
                    <Text as="p" className="px-[35px] pb-1.5 pt-3 tracking-[0.10px] !text-white-A700 md:p-5 sm:px-5">Hall Number</Text>
                  
                ),
                meta: {width: "145px"},
            }  ),
                            
        ,
            table2ColumnHelper.accessor("time",{
                cell:(info)=>(
                    <Text as="p" className="tracking-[0.10px]">
                        {info?.getValue?.()}
                    </Text>
                ),
                header: (info) =>(
                    <Text as="p" className="py-[9px] tracking-[0.10px] !text-white-A700 md:p-5">
                       Time
                    </Text>
                ),
                meta: {width:"155px"},
            }),


            table2ColumnHelper.accessor("class",{
                cell:(info)=>(
                    <Text as="p" className="tracking-[0.10px]">
                        {info?.getValue?.()}
                    </Text>
                ),
                header: (info) =>(
                    <Text as="p" className="py-[9px] tracking-[0.10px] !text-white-A700 md:p-5">
                        Class
                    </Text>
                ),
                meta: {width:"155px"},
            }),


            table2ColumnHelper.accessor("teacher",{
                cell:(info)=>(
                    <Text as="p" className="tracking-[0.10px]">
                        {info?.getValue?.()}
                    </Text>
                ),
                header: (info) =>(
                    <Text as="p" className="py-[9px] tracking-[0.10px] !text-white-A700 md:p-5">
                        Teacher
                    </Text>
                ),
                meta: {width:"155px"},
            }),
            
        ]);
    });
    return (
        <>
         {/* Helmet is used to manage the document head */}
        <Helmet>
        <title>IMS-web</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      {/* Main container with full width and gradient background */}
      <div className="w-full pb-[13px] bg-gradient">
      <IMA className="flex md:flex-col justify-between items-start gap-5 bg-indigo-900" />

        <div>
             {/* Placeholder for additional content */} 
            </div>
          <div className="flex md:flex-col justify-between items-start gap-5 bg-indigo-900" />
           {/* Main content container */}
          <div className="flex md:flex-col justify-center items-start gap-[49px]">
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
                    Learning Materials
                  </Button>
                  <Button shape="square" className="w-full sm:px-5">
                    Student TimeTable
                  </Button>
                  <Button
                    size="s"
                    as="h5"
                    className="flex justify-center items-center h-[52px] px-[35px] py-3 sm:px-5 bg-indigo-100 shadow-bs"
                  >
                    Website Change
                  </Button>
                  <div className="mb-[407px] h-[52px] bg-indigo-100 shadow-bs"/>
                  </div>
                  </div>
                  </div>
                   {/* Timetable and buttons container */}
            <div className="mt -[25px] flex w-[75%] flex-col items-start gap-[73px] md:w-full md:gap-[54px] sm:gap-9">
                <Heading size="lg" as ="h3" className="ml-[321px] md:ml-0">
                    Time Table
                </Heading>
                 {/* ReactTable component for displaying the timetable */}
                <ReactTable 
                size = "xs"
                bodyProps={{className: ""}}
                headerProps={{className:"bg-blue_gray-600 shadow-xs md:flex-col"}}
                rowDataProps = {{className:"md:flex-col"}}
                className="self-stretch"
                columns = {table2Columns}
                data = {table2Data}
                />
                {/* Update  button */}
               {/* <Button color = "indigo_900" size="md" shape="square" className="ml-[905px]  font-bold md:ml-0">Update</Button>  */}
                {/* Remove button */}
                {/* <Button color = "indigo_900" size="md" shape="square" className="ml-[905px]  font-bold md:ml-1">Remove</Button>  */}

            </div>
        </div>    
    </div>
 
    </>
    );
}