import {Img} from "..";
import React from "react";

export default function Header2({props}){
    return(
        <header {...props} className={`${props.className} flex justify-end items-end p-1.5 bg-indigo-900_01`}>
            <div className="mr-[120px] mt-[11px] flex w-[71%] justify-end md:w-full">
                <div className="flex w-full items-start justify-between gap-5 md:flex-col">
                    <div className="relative mt-[9px] h-[38px] w-[61%] md:h-auto md:w-full">
                        <Img src="images/img_learning_management.svg" alt = "learning" className="h-[35px] w-full"/>
                        <Img 
                        //src = images/img_learning_management_black_900.svg"// should care about this I think There is an error
                        alt="learning"
                        className = "absolute bottom-0 left-0 right-0 top-0 m-auto h-[38px] w-full"/>
                        </div>
                        <div className="flex w-[29%] items-start justify-between gap-5 md:w-full">
                            <div className="relative h-[62px] w-[2%] md:h-auto">
                                <Img src="images/img_elipse_1.svg" alt="image" className="h-[62px] w-full"/>
                                <Img src="images/img_name.svg" alt="name" className="absolute left-0 right-0 top-[19.04px] m-auto h-[17px]"/>

                            </div>
                            <Img src="images/img_user.svg" alt ="user" className="mt-3.5 h-[25px] w-[61%]" />
                    </div>
                </div>
            </div>
        </header> 
    );
}