import {Helmet} from "react-helmet";
import {Button, Text, Heading} from "../../../components";
import { ReactTable } from "../../../components/ReactTable";
import {createColumnHelper} from "@tanstack/react-table";
import React, { useState, useEffect } from "react";
import IMA from "../../../components/IMA"; 

// Dummy API call simulation
const fetchTimetable = async () => {
    return [
        { id: 1, day: "Monday", Hnumber: "H1", time: "7.00 a.m-1.00p.m", class: "Chemistry-Theory- 2024 A/L", teacher: "Chathuranga Dharmadasa" },
        { id: 2, day: "Tuesday", Hnumber: "H2", time: "8.00 a.m-2.00p.m", class: "Physics-Theory- 2025 A/L", teacher: "Dilshan Chathuranga" },
    ];
};

export default function TeacherTimeTable() {
    const [timetableData, setTimetableData] = useState([]); // Store timetable data
    const [newEntry, setNewEntry] = useState({ day: '', Hnumber: '', time: '', class: '', teacher: '' }); // Store new row data
    const [userRole, setUserRole] = useState("teacher"); // For role-based view (assuming role is fetched from auth)

    // Fetch the timetable data on component mount
    useEffect(() => {
        fetchTimetable().then(data => setTimetableData(data));
    }, []);

    // Handle adding a new timetable entry
    const handleAdd = () => {
        setTimetableData([...timetableData, { ...newEntry, id: timetableData.length + 1 }]);
        setNewEntry({ day: '', Hnumber: '', time: '', class: '', teacher: '' }); // Reset form
    };

    // Handle removing a timetable entry
    const handleRemove = (id) => {
        setTimetableData(timetableData.filter((entry) => entry.id !== id));
    };

    // Handle updating an existing timetable entry
    const handleUpdate = (id, field, value) => {
        const updatedData = timetableData.map(entry => entry.id === id ? { ...entry, [field]: value } : entry);
        setTimetableData(updatedData);
    };

    // Handle saving data (simulate API call)
    const handleSave = () => {
        console.log("Saving timetable data:", timetableData);  // Simulate API call
    };

    const table2Columns = React.useMemo(() => {
        const table2ColumnHelper = createColumnHelper();
        return [
            table2ColumnHelper.accessor("day", {
                cell: (info) => <Text>{info.getValue()}</Text>,
                header: () => <Text>Day</Text>,
            }),
            table2ColumnHelper.accessor("Hnumber", {
                cell: (info) => <Text>{info.getValue()}</Text>,
                header: () => <Text>Hall Number</Text>,
            }),
            table2ColumnHelper.accessor("time", {
                cell: (info) => <Text>{info.getValue()}</Text>,
                header: () => <Text>Time</Text>,
            }),
            table2ColumnHelper.accessor("class", {
                cell: (info) => <Text>{info.getValue()}</Text>,
                header: () => <Text>Class</Text>,
            }),
            table2ColumnHelper.accessor("teacher", {
                cell: (info) => <Text>{info.getValue()}</Text>,
                header: () => <Text>Teacher</Text>,
            }),
            table2ColumnHelper.accessor("id", {
                cell: (info) => (
                    userRole === "teacher" && (
                        <div>
                            {/* Remove button */}
                            <Button onClick={() => handleRemove(info.getValue())} size="sm">
                                Remove
                            </Button>
                        </div>
                    )
                ),
                header: () => <Text>Actions</Text>,
            }),
        ];
    });

    return (
        <>
            <Helmet>
                <title>IMS-web</title>
                <meta name="description" content="Web site created using create-react-app" />
            </Helmet>
            <div className="w-full pb-[13px] bg-gradient">
                <IMA className="flex md:flex-col justify-between items-start gap-5 bg-indigo-900" />
                <div className="flex md:flex-col justify-center items-start gap-[49px]">
                    <div className="h-[825px] w-[17%] md:w-full md:h-auto md:p-5 relative">
                        <div className="w-full h-max left-0 bottom-0 right-0 top-0 m-auto absolute">
                            <Button shape="square" className="w-full sm:px-5 z-[1] border-black-900 border border-solid">Home</Button>
                            <Button shape="square" className="w-full sm:px-5">Teachers</Button>
                            <Button shape="square" className="w-full sm:px-5">Student Details</Button>
                            <Button shape="square" className="w-full sm:px-5">Learning Materials</Button>
                            <Button shape="square" className="w-full sm:px-5">Student TimeTable</Button>
                        </div>
                    </div>
                    <div className="mt-[25px] flex w-[75%] flex-col items-start gap-[73px] md:w-full md:gap-[54px] sm:gap-9">
                        <Heading size="lg" as="h3" className="ml-[321px] md:ml-0">Time Table</Heading>

                        {/* Display the React Table */}
                        <ReactTable
                            size="xs"
                            bodyProps={{ className: "" }}
                            headerProps={{ className: "bg-blue_gray-600 shadow-xs md:flex-col" }}
                            rowDataProps={{ className: "md:flex-col" }}
                            className="self-stretch"
                            columns={table2Columns}
                            data={timetableData}
                        />

                        {/* Form to add new timetable entry (only for teachers) */}
                        {userRole === "teacher" && (
                            <div className="w-full mt-5">
                                <Heading size="sm" as="h5">Add New Timetable Entry</Heading>
                                <div className="grid grid-cols-5 gap-4">
                                    <input
                                        type="text"
                                        placeholder="Day"
                                        value={newEntry.day}
                                        onChange={(e) => setNewEntry({ ...newEntry, day: e.target.value })}
                                        className="border border-gray-400 p-2"
                                    />
                                    <input
                                        type="text"
                                        placeholder="Hall Number"
                                        value={newEntry.Hnumber}
                                        onChange={(e) => setNewEntry({ ...newEntry, Hnumber: e.target.value })}
                                        className="border border-gray-400 p-2"
                                    />
                                    <input
                                        type="text"
                                        placeholder="Time"
                                        value={newEntry.time}
                                        onChange={(e) => setNewEntry({ ...newEntry, time: e.target.value })}
                                        className="border border-gray-400 p-2"
                                    />
                                    <input
                                        type="text"
                                        placeholder="Class"
                                        value={newEntry.class}
                                        onChange={(e) => setNewEntry({ ...newEntry, class: e.target.value })}
                                        className="border border-gray-400 p-2"
                                    />
                                    <input
                                        type="text"
                                        placeholder="Teacher"
                                        value={newEntry.teacher}
                                        onChange={(e) => setNewEntry({ ...newEntry, teacher: e.target.value })}
                                        className="border border-gray-400 p-2"
                                    />
                                </div>

                                {/* Add, Save, and Update buttons */}
                                <div className="mt-4">
                                    <Button onClick={handleAdd} className="mr-2">Add</Button>
                                    <Button onClick={handleSave} className="mr-2">Save</Button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}
