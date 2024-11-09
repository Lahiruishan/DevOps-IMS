import {Text} from "./..";
import React from "react";

export default function BiologicalScienceProfile({
    biologicalScienceText=(
        <>
        BIOLOGICAL 
        <br />
        SCIENCE
        </>
    ),
    studentText = "100+ Students",
    ...props
}) {
    return (
        <div 
        {...props}
        className={`${props.className} flex justify-between items-center gap-5 bg-teal-50 shadow-xs rounded-[30px]`}
        >
        <div className="ml-[34px] h-[62px] w-[26%] rounded-[20px] bg-blue_gray-400"/>
        <div className="mt-[26px] flex flex-col items-start self-end">
            <Text size="text11xl" as="p" className="text-shadow-ts !font-aclonica !text-black-900">
                {biologicalScienceText}
            </Text>
            <Text size="text5xl" as="p" className="ml-3 !font-abel !text-black-900">
                {studentText}
            </Text>
        </div>
        </div>

    );
}