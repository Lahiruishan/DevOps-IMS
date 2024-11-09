import React from "react";
import { Helmet } from "react-helmet";
import { Button, Text, Heading,Input } from "../../../components";
import { ReactTable } from "../../../components/ReactTable";
import { createColumnHelper } from "@tanstack/react-table";
import IMA from "../../../components/IMA";

const table3Data = [
    {class:"Chemistry-Theory",day:"Saturday",rowfrom:"07.00"},
    {class:"Chemistry-Paper",day:"Sunday",rowfrom:"07.00"},
    {class:"C maths-Theory",day:"Saturday",rowfrom:"13.00"},
    {class:"Physics-Paper",day:"Wednesday",rowfrom:"13.00"},
];

export default function WebsiteChangesTimetablePage(){
    const table3Columns = React.useMemo(()=>{
        const table3ColumnHelper = createColumnHelper();
        return [
            table3ColumnHelper.accessor("class", {
                cell:(info)=>(
                    <Text size="md" as="p" className="!text-white-A700">
                        {info?.getValue?.()}
                    </Text>
                ),
                meta:{width:"412px"},
            }),
            table3ColumnHelper.accessor("day", {
                cell:(info)=>(
                    <Text size = "lg" as ="p" className="!text-white-A700">
                        {info?.getValue?.()}
                    </Text>
                ),
            header:(info)=>(
                <Heading as = "h5" className="py-[7px] pl-[15px] !text-white-A700 md:p-5">
                    Day
                </Heading>
            ),
            meta:{width:"288px"},
            }),
            table3ColumnHelper.accessor("rowfrom",{
                cell:(info)=>(
                    <div className="flex flex-1 flex-wrap items-end justify-between gap-5 md:self-stretch">
                        <Text size="xl" as="p" className="mt-1.5 !text-white-A700">
                            12.00
                        </Text>
                    </div>
                ),
            header:(info)=>(
                <div className="flex flex-1 flex-wrap items-start justify-between gap-5 md:self-stretch md:p-5">
                 <Heading size="2xl" as="h5" className="mt-0.5 !text-white-A700">From</Heading> 
                 <Heading as="h5" className="mb-1 mr-14 mt-0.5 h-[26px] w-[25px] !text-white-A700">To</Heading>  
                </div>
            ),
            meta:{width:"285px"},
            }),
        ];
    }, []);

return(
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
                   <Input 
                  color ="indigo_100"
                  size ="md"
                  shape="square"
                  name="website_changes"
                  placeholder = {`Website Changes`}
                  className="mb-[408px] border border-solid border-black-900 font-bold sm:px-5"/>
                  </div>
                  </div>
                  </div>
                <div className="mt-10 flex w-[77] flex-col items-end md:w-full">
                  <Heading size="8xl" as="h4" className="mr-[400px] md:mr-0">Time Table</Heading>
                  <ReactTable
                  size="md"
                  bodyProps = {{className:""}}
                  headerProps={{className:"bg-indigo-A700 md:flex-col rounded-[10px]"}}
                  rowDataProps={{className:"md:flex-col"}}
                  className="mt-[60px] self-stretch"
                  columns={table3Columns}
                  data={table3Data} />
                <Button 
                color ="blue_gray_100"
                size="sm"
                shape="square"
                className="mr-7 mt-[106px] min-w-[77px] font-bold md:mr-0">Update</Button>
              </div>
            </div>
        </div>
        </div>
               </>
);
}