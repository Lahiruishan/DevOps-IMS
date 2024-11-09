import { Heading, Text } from "../../components";
import UserProfile from "../../components/UserProfile";
import React from "react";

const tutorProfileList = [
    {
        userTitle: "Combined Maths",
        userdescription1: (
            <>
                Dilshan Chathuranga 
                <br />
                B.Sc.Phy.(UOJ)
            </>
        ),
        userImage: "images/1.jpg"
    },
    {
        userTitle: "Physics",
        userdescription1: (
            <>
                Amara Silva 
                <br />
                M.Sc.Physics (UOM)
            </>
        ),
        userImage: "images/1.jpg"
    },
    {
        userTitle: "Chemistry",
        userdescription1: (
            <>
                Nimal Perera 
                <br />
                B.Sc.Chem (UOC)
            </>
        ),
        userImage: "images/1.jpg"
    },
    {
        userTitle: "Biology",
        userdescription1: (
            <>
                Sunil Jayasena 
                <br />
                PhD.Biology (USA)
            </>
        ),
        userImage: "images/1.jpg"
    }
];

export default function OurTeachersScienceSection() {
    return (
        <>
            <div className="mt-[134px] px-7 sm:px-5">
                <div className="flex flex-col gap-[34px]">
                    <div className="ml-11 flex flex-col items-start gap-[42px] md:ml-0">
                        <Heading 
                            size="xl" 
                            as="h6" 
                            className="ml-[466px] !font-serif !text-indigo-700 md:ml-0 underline"
                        >
                            Our Teachers
                        </Heading>
                        <div className="relative h-[78px] self-stretch">
                            <div className="absolute bottom-0 left-0 right-0 top-0 m-auto h-[58px] flex-1 bg-indigo-50" />
                            <Text 
                                size="5xl" 
                                as="p" 
                                className="absolute bottom-0 left-[3%] top-0 my-auto h-max !font-serif !text-blue-900 underline"
                            >
                                SCIENCE
                            </Text>
                        </div>
                    </div>

                    {/* Render the profiles in a 4-column layout with 3D hover effect */}
                    <div className="ml-[74px] mr-[66px] flex flex-wrap justify-center gap-6 md:mx-0 font-serif">
                        {tutorProfileList.map((d, index) => (
                            <div
                                key={"teachersList" + index}
                                className="mb-2 w-[24%] md:w-full cursor-pointer transition-all duration-500 ease-out transform hover:scale-105 hover:shadow-2xl hover:rotate-1 hover:translate-y-[-5px]"
                                style={{ perspective: "1000px" }} // To enhance 3D effect
                            >
                                {/* Inner card animation */}
                                <div className="transition-transform duration-300 transform-gpu hover:rotate-y-6 hover:rotate-x-2 hover:scale-105">
                                    <UserProfile 
                                        {...d}
                                        className="transition-all duration-500 ease-out font-serif" // Ensure font-serif applies here
                                        titleClassName="font-serif" // Add className for title
                                        descriptionClassName="font-serif" // Add className for description
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}
