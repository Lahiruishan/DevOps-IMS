import { Heading, Text } from "../../components";
import UserProfile from "../../components/UserProfile";
import React from "react";

const tutorProfileList = [
    {
        userTitle: "Media Studies",
        userdescription1: (
            <>
                Palitha Chathuranga 
                <br />
                B.A.Media Studies.(UOJ)
            </>
        ),
        userImage: "images/1.jpg"
    },
    {
        userTitle: "Drama & Theatre Studies",
        userdescription1: (
            <>
               Chanaka Silva 
                <br />
                Drama & Theatre Studies (UOM)
            </>
        ),
        userImage: "images/1.jpg"
    },
    {
        userTitle: " Music",
        userdescription1: (
            <>
                Sunil Perera 
                <br />
                Music (UOC)
            </>
        ),
        userImage: "images/1.jpg"
    },
    {
        userTitle: "HISTORY",
        userdescription1: (
            <>
                Nimala Jayasena 
                <br />
                PhD.HISTORY (USA)
            </>
        ),
        userImage: "images/1.jpg"
    }
];

export default function OurTeachersArtSection() {
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
                            {/* Title can be added here if needed */}
                        </Heading>
                        <div className="relative h-[78px] self-stretch">
                            <div className="absolute bottom-0 left-0 right-0 top-0 m-auto h-[58px] flex-1 bg-indigo-50" />
                            <Text 
                                size="5xl" 
                                as="p" 
                                className="absolute  bottom-0 left-[3%] top-0 my-auto h-max !font-serif !text-blue-900 underline "
                            >
                               Art
                            </Text>
                        </div>
                    </div>

                    {/* Render the profiles in a 4-column layout with animations */}
                    <div className="ml-[74px] mr-[66px] flex flex-wrap justify-center gap-6 md:mx-0">
                        {tutorProfileList.map((d, index) => (
                            <div
                                key={"teachersList" + index}
                                className="mb-2 w-[24%] md:w-full cursor-pointer transition-transform duration-500 ease-out transform hover:scale-105 hover:shadow-lg hover:-translate-y-1"
                                style={{ perspective: "1000px" }} // Enhance 3D effect
                            >
                                <div className="transition-transform duration-300 transform-gpu hover:rotate-x-2 hover:rotate-y-3">
                                    <UserProfile 
                                        {...d}
                                        className="transition-all duration-500 ease-out"
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
