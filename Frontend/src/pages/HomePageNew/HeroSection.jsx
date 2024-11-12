import {  Button, Text } from "../../components";
import React from "react";
import { useNavigate } from 'react-router-dom';

export default function HeroSection() {
  const navigate = useNavigate();

  const handleRegister = () => {
    navigate('/registrationForm');
  };

  return (
    <>
      {/* Hero Section */}
      <div className="mt-14 flex items-center px-16 md:flex-col md:px-5">
        {/* Left Side (Text and Button) */}
        <div className="flex w-[50%] justify-center md:w-full">
          <div className="flex w-full flex-col items-start gap-[30px]">
            {/* Text Section with 3D Animation */}
            <div className="relative h-[298px] self-stretch group hover:scale-105 hover:rotate-1 transition-all duration-500 ease-out">
              <div className="absolute left-1 top-0 m-auto h-[276px] w-[80%] rounded-[158px] border-[1.5px] border-solid border-blue_gray-400_01 bg-gray-50 blur-[4.00px] backdrop-opacity-[0.5]" />
              <div className="absolute bottom-[-1px] right-60 mr-auto flex flex-col items-start gap-2 md:ml-0">
                {/* 3D Text Effect */}
                <Text
                  size="10xl"
                  as="p"
                  className="mb-8 ml-16 md:ml-0 !text-purple-50 !font-aclonica group-hover:transform group-hover:perspective-500 group-hover:rotate-x-6 group-hover:rotate-y-6 transition-transform duration-500 ease-in-out"
                >
                  <span className="text-black-900">Getting&nbsp;</span>
                  <span className="text-indigo-500">Quality</span>
                  <span className="text-black-900">
                    <>
                      &nbsp;
                      <br />
                      Education Is Now
                      <br />
                      More&nbsp;
                    </>
                  </span>
                  <span className="text-indigo-500">Easy</span>
                </Text>

                {/* Subheading */}
                <Text
                  size="3xl"
                  as="p"
                  className="text-indigo-800 leading-[29px] font-aclonica group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-500 ease-in-out"
                >
                  <>
                    Provide you with the latest online learning system and
                    <br />
                    materials that help your knowledge growing.
                  </>
                </Text>
              </div>
            </div>

            {/* Button with Hover Animation */}
            <Button
              color="indigo_A400"
              size="xl"
              className="ml-[27px] min-w-[254px] rounded-[30px] font-abhayalibreextrabold font-extrabold md:ml-0 hover:scale-110 hover:shadow-lg hover:translate-y-[-5px] transition-all duration-300 ease-in-out"
              onClick={handleRegister}
            >
              Register Here
            </Button>
          </div>
        </div>

        {/* Right Side (Background Shapes and Placeholder for Image) */}
        <div className="flex flex-1 items-center justify-end md:self-stretch sm:flex-col">
          <div className="h-[32px] w-[30px] rounded-[50%] bg-indigo-200 shadow-xs transform hover:scale-125 transition-transform duration-500 ease-out" />
          <div className="flex w-[84%] justify-end sm:w-full">
            <div className="flex w-full flex-col items-start">
              <div className="relative h-[398px] self-stretch group hover:scale-105 hover:rotate-1 transition-transform duration-500 ease-out">
                <div className="absolute right-[12%] top-[25px] m-auto h-[288px] w-[64%] rounded-[154px] bg-indigo-50 blur-[4.00px] backdrop-opacity-[0.5] group-hover:rotate-x-3 group-hover:rotate-y-3 transition-transform duration-500 ease-in-out" />
                <div className="absolute bottom-0 left-[13%] m-auto h-[226px] w-[52%] rounded-[124px] border border-solid border-indigo-a400 bg-indigo-a400 blur-[4.00px] backdrop-opacity-[0.5] group-hover:rotate-x-3 group-hover:rotate-y-3 transition-transform duration-500 ease-in-out" />
              </div>
              <div className="mr-[132px] h-[24px] w-[24px] rotate-[7deg] self-end rounded-[12px] bg-blue_gray-600 shadow-xs md:mr-0 group hover:scale-125 transition-transform duration-500 ease-out" />
              <div className="ml-[26px] mt-6 h-[32px] w-[32px] rotate-[38deg] rounded-[16px] bg-blue_gray-200 shadow-xs md:ml-0 group hover:scale-125 transition-transform duration-500 ease-out" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
