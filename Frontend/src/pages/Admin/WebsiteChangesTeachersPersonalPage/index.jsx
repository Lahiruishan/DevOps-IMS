import React from "react";
import { Helmet } from "react-helmet";
import { Button, Text, Heading } from "../../../components";
import { ReactTable } from "../../../components/ReactTable";
import { createColumnHelper } from "@tanstack/react-table";
import IMA from "../../../components/IMA";

const table4Data = [
  { class: "Chemistry-Theory-2024 A/L", day: "Saturday", rowfrom: "07.00" },
  { class: "Chemistry-Theory-2024 A/L", day: "Saturday", rowfrom: "07.00" },
  { class: "Chemistry-Theory-2024 A/L", day: "Saturday", rowfrom: "07.00" },
  { class: "Chemistry-Theory-2024 A/L", day: "Saturday", rowfrom: "07.00" },
];

export default function WebsiteChangesTeachersPersonalPage() {
  const table4Columns = React.useMemo(() => {
    const table4ColumnHelper = createColumnHelper();
    return [
      table4ColumnHelper.accessor("class", {
        cell: (info) => (
          <Text size="md" as="p" className="!text-white-A700">
            {info?.getValue?.()}
          </Text>
        ),
        header: (info) => (
          <Heading as="h5" className="py-[3px] pl-[35px] !text-white-A700 sm:pl-5">
            Class
          </Heading>
        ),
        meta: { width: "347px" },
      }),
      table4ColumnHelper.accessor("day", {
        cell: (info) => (
          <Text size="lg" as="p" className="!text-white-A700">
            {info?.getValue?.()}
          </Text>
        ),
        header: (info) => (
          <Heading as="h5" className="pl-[11px] pt-1.5 !text-white-A700">
            Day
          </Heading>
        ),
        meta: { width: "243px" },
      }),
      table4ColumnHelper.accessor("rowfrom", {
        cell: (info) => (
          <div className="flex flex-1 flex-wrap items-end justify-between gap-5 md:self-stretch">
            <Text size="xl" as="p" className="mt-1.5 !text-white-A700">
              {info?.getValue?.()}
            </Text>
            <Text size="xl" as="p" className="mr-[25px] !text-white-A700">
              12.00
            </Text>
          </div>
        ),
        header: (info) => (
          <div className="flex flex-1 flex-wrap items-end justify-between gap-5 md:self-stretch">
            <Heading size="2xl" as="h5" className="!text-white-A700">
              From
            </Heading>
            <Heading as="h5" className="mr-[45px] h-[26px] w-[25px] self-end !text-white-A700">
              To
            </Heading>
          </div>
        ),
        meta: { width: "240px" },
      }),
    ];
  }, []);

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
                <div>
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
                    TimeTable
                  </Button>                </div>
              </div>
            </div>
            <div className="flex flex-1 flex-col items-center md:self-stretch md:p-5">
              <div className="flex w-[94%] items-center gap-[21px] md:w-full md:flex-col">
                <div className="h-[238px] w-[25%] rounded-[5px] bg-blue_gray-100 shadow-xs" />
                <div className="flex flex-1 flex-col items-start gap-[7px] md:self-stretch">
                  <Heading as="h5" className="ml-[329px] md:ml-0">TimeTable</Heading>
                  <ReactTable
                    size="xs"
                    bodyProps={{ className: "" }}
                    headerProps={{ className: "md:flex-col" }}
                    rowDataProps={{ className: "md:flex-col" }}
                    className="self-stretch"
                    columns={table4Columns}
                    data={table4Data}
                  />
                </div>
              </div>
              <div className="relative mt-[49px] h-[52px] self-stretch">
                <div className="absolute bottom-[0.00px] right-[0.00px] m-auto flex-[76%] justify-end rounded-[10px] bg-indigo-A200 p-1">
                  <Heading size="xl" as="h6" className="mr-[380px] md:mr-0">Results</Heading>
                </div>
                <Heading size="md" as="h6" className="absolute left-[0.00px] top-[0.00px] m-auto w-[25%] leading-[19px]">
                  <>
                    {/* ---backend -dummy data---- */}
                    Thamiraherath Jayasinghe
                    <br />
                    BSc.Chem.(U.O.C) .C.Chem(i)
                  </>
                </Heading>
              </div>
              <div className="mt-[11px] flex items-start justify-center gap-[50px] self-stretch md:flex-col">
                <Heading size="s" as="p" className="mt-[9px] w-[20%] leading-[18px] md:w-full">
                  <span className="text-lg text-black-900">
                    <>
                      Contact
                      <br />
                      Tel: 033 00 000 00
                      <br />
                      Email: xxxx@gmail.com
                    </>
                  </span>
                </Heading>
                <div className="flex flex-1 gap-[35px] md:flex-col md:self-stretch">
                  <div className="flex w-full flex-col gap-[17px]">
                    <div className="flex flex-col items-center gap-0.5">
                      <Heading size="xs" as="p">2022 A/L</Heading>
                      <Button color="indigo_400_01" size="xl" className="w-full rounded-[15px] font-bold sm:px-5">
                        Student Name
                      </Button>
                    </div>
                    <div className="flex justify-between gap-5 rounded-[15px] bg-gray-300 p-[9px]">
                      <div className="ml-[52px] flex self-start md:ml-0">
                        <Text size="xs" as="p">XXXX</Text>
                        <Text size="xs" as="p" className="relative mt-[-17px]">XXXX</Text>
                      </div>
                    </div>
                    <div className="mr-[39px] flex flex-col self-start md:mr-0">
                      <div className="flex flex-col">
                        <Text size="xs" as="p">A</Text>
                        <Text size="xs" as="p" className="relative mt-[-17px]">A</Text>
                      </div>
                    </div>
                    <div className="flex flex-wrap justify-between gap-5 rounded-[15px] bg-gray-300_01 p-[9px]">
                      <Text size="xs" as="p" className="ml-[52px] self-start md:ml-0">XXX</Text>
                      <Text size="xs" as="p" className="mr-[39px] self-start md:mr-0">B</Text>
                    </div>
                  </div>
                  <div className="flex w-full flex-col gap-[17px]">
                    <div className="flex flex-col items-center gap-0.5">
                      <Heading size="xs" as="p">2021 A/L</Heading>
                      <Button color="indigo_400_02" size="xl" className="w-full rounded-[15px] font-bold sm:px-5">
                        Student Name
                      </Button>
                    </div>
                    <div className="flex justify-between gap-5 rounded-[15px] bg-gray-300_01 p-[9px]">
                      <div className="ml-[52px] flex self-start md:ml-0">
                        <div className="flex flex-col">
                          <Text size="xs" as="p">XXXX</Text>
                          <Text size="xs" as="p" className="relative mt-[-17px]">XXXX</Text>
                        </div>
                      </div>
                      <div className="mr-[38px] flex flex-col self-start md:mr-0">
                        <div className="flex flex-col">
                          <Text size="xs" as="p">A</Text>
                          <Text size="xs" as="p" className="relative mt-[-17px]">A</Text>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-wrap justify-between gap-5 rounded-[15px] bg-gray-300_01 p-[9px]">
                      <Text size="xs" as="p" className="ml-[52px] self-start md:ml-0">XXXX</Text>
                      <Text size="xs" as="p" className="mr-[38px] self-start md:mr-0">B</Text>
                    </div>
                  </div>
                  <div className="flex w-full flex-col gap-[17px]">
                    <div className="flex flex-col items-center gap-0.5">
                      <Heading size="xs" as="p">2021 A/L</Heading>
                      <Button color="indigo_400_02" size="xl" className="w-full rounded-[15px] font-bold sm:px-5">
                        Student Name
                      </Button>
                    </div>
                    <div className="flex justify-between gap-5 rounded-[15px] bg-gray-300_01 p-[9px]">
                      <div className="ml-[52px] flex self-start md:ml-0">
                        <div className="flex flex-col">
                          <Text size="xs" as="p">XXXX</Text>
                          <Text size="xs" as="p" className="relative mt-[-17px]">XXXX</Text>
                        </div>
                      </div>
                      <div className="mr-[38px] flex flex-col self-start md:mr-0">
                        <div className="flex flex-col">
                          <Text size="xs" as="p">A</Text>
                          <Text size="xs" as="p" className="relative mt-[-17px]">A</Text>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-wrap justify-between gap-5 rounded-[15px] bg-gray-300_01 p-[9px]">
                      <Text size="xs" as="p" className="ml-[52px] self-start md:ml-0">XXXX</Text>
                      <Text size="xs" as="p" className="mr-[38px] self-start md:mr-0">B</Text>
                    </div>
                  </div>
                </div>
              </div>
              <Button shape="square" className="mt-[68px] min-w-[71px] self-end font-bold">Edit</Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
