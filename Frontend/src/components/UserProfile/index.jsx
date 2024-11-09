import { Heading, Text, Img } from "./..";
import React from "react";

export default function UserProfile({
    userTitle = "Combined Maths",
    userdescription1 = (
        <>
            Chathuranga Dharmadasa
            <br />
            B.Sc[Hons].Chem (University of Jaffna)
        </>
    ),
    userImage = "images/1.jpg",
    ...props
}) {
    return (
        <div {...props} className={`${props.className} h-[250px] w-full md:w-full relative`}>
            <Img 
                src={userImage}
                alt={userTitle}
                className="absolute bottom-0 left-0 right-0 top-0 m-auto h-[200px] flex-1 rounded-[20px] object-cover"
            />

            <div className="absolute left-0 right-0 top-[9px] m-auto flex-1">
                <div className="mr-3 flex flex-col gap-[186px]">
                    <div className="relative mx-2 h-[34px]">
                        <div className="absolute left-0 right-0 top-0 m-auto flex flex-1 flex-col items-start">
                            <Text 
                                size="text8xl" 
                                as="p" 
                                className="ml-1.5 !font-serif !text-black-900" // Change to font-serif here
                            >
                                {userTitle}
                            </Text>
                            <div className="relative mt-[-26px] h-[28px] w-[64%] rounded-[14px] bg-white-a700" />
                        </div>
                    </div>
                    <div className="flex flex-col items-center">
                        <Heading 
                            size="headinglg" 
                            as="p" 
                            className="leading-[18px] !font-serif !text-black-900" // Change to font-serif here
                        >
                            {userdescription1}
                        </Heading>
                    </div>
                </div>
            </div>
        </div>
    );
}
