import React from "react";
import { Heading } from "components";

const scienceSubjectsList = [
    {
        biologicalText: (
            <>
                BIOLOGICAL 
                <br />
                SCIENCE
            </>
        ),
        studentsText: "100 + Students",   
    },
    {
        biologicalText: (
            <>
                PHYSICAL 
                <br />
                SCIENCE
            </>
        ),
        studentsText: "100+ Students",
    },
    {
        biologicalText: (
            <>
                ART &   
                <br />
                COMMERCE
            </>
        ),
        studentsText: "100+ Students",
    },
];

export default function ExploreCoursesSection() {
    return (
        <>
            {/* Explore courses section */}
            <div className="mt-[150px] flex-col items-center gap-[78px] px-16 md:gap-[64px] md:px-6 sm:gap-10">
                <Heading size="headingxl" as="h4" className="!font-aclonica !text-indigo-a700">
                    Explore Courses by Category.
                </Heading>
                <div className="flex w-[96%] flex-col items-end md:w-full">
                    <div className="flex gap-11 self-stretch md:flex-col">
                        {scienceSubjectsList.map((d, index) => (
                            <div 
                                key={"courseList" + index} 
                                className="relative w-[32%] md:w-full transition-transform duration-300 transform hover:scale-105 hover:shadow-lg hover:-translate-y-1 cursor-pointer"
                                style={{ perspective: "1000px" }} // Perspective for 3D effect
                            >
                                <div className="transition-transform duration-300 transform-gpu hover:rotate-x-1 hover:rotate-y-1">
                                    <div className="bg-indigo-200 p-4 rounded-lg shadow-md flex flex-col items-center justify-center h-full">
                                        <div className="text-xl font-bold text-indigo-700">
                                            {d.biologicalText}
                                        </div>
                                        <div className="mt-2 text-md text-gray-600">
                                            {d.studentsText}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}
