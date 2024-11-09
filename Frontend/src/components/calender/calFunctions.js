import dayjs from "dayjs";
import React, { useState } from "react";
import { generateDate, months } from "./calender";
import cn from "./cn";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";

export default function Calendar() {
	const days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
	const currentDate = dayjs();
	const [today, setToday] = useState(currentDate);
	const [selectDate, setSelectDate] = useState(currentDate);
	return (
		<div className="flex gap-2 sm:divide-x justify-center sm:w-1/2 mx-auto  h-screen items-center sm:flex-row flex-col">
			<div className="w-70 h-70 ">
				<div className="flex justify-between items-center">
					<h1 className="select-none font-semibold">
						{months[today.month()]}, {today.year()}
					</h1>
					<div className="flex gap-10 items-center ">
						<GrFormPrevious
							className="w-5 h-5 cursor-pointer hover:scale-105 transition-all"
							onClick={() => {
								setToday(today.month(today.month() - 1));
							}}
						/>
						<h1
							className=" cursor-pointer hover:scale-105 transition-all"
							onClick={() => {
								setToday(currentDate);
							}}
						>
							Today
						</h1>
						<GrFormNext
							className="w-5 h-5 cursor-pointer hover:scale-105 transition-all"
							onClick={() => {
								setToday(today.month(today.month() + 1));
							}}
						/>
					</div>
				</div>
				<div className="grid grid-cols-7 ">
					{days.map((day, index) => {
						return (
							<h1
								key={index}
								 className="text-sm text-center h-10 w-8 grid place-content-center text-black select-none"
							>
								{day}
							</h1>
						);
					})}
				</div>

				<div className=" grid grid-cols-7 ">
					{generateDate(today.month(), today.year()).map(
						({ date, currentMonth, today }, index) => {
							return (
								<div
									key={index}
									className="p-2 text-center h-10 grid place-content-center text-sm border-t"
								>
									<h1
    className="h-7 w-7 rounded-full grid place-content-center transition-all cursor-pointer select-none"
    style={{
        backgroundColor: selectDate.toDate().toDateString() === date.toDate().toDateString()
            ? "black"   // Black background for the selected date
            : today
            ? "blue"    // Blue background for today's date
            : currentMonth
            ? "white"   // White background for current month dates
            : "transparent", // Transparent background for non-current-month dates
        color: selectDate.toDate().toDateString() === date.toDate().toDateString() || today
            ? "white" // White text for selected or today
            : currentMonth
            ? "black"  // Black text for current month dates
            : "gray",  // Gray text for non-current-month dates
    }}
    onMouseEnter={(e) => {
        e.target.style.backgroundColor = "black";
        e.target.style.color = "white";
    }}
    onMouseLeave={(e) => {
        e.target.style.backgroundColor = selectDate.toDate().toDateString() === date.toDate().toDateString()
            ? "black"
            : today
            ? "blue"
            : currentMonth
            ? "white"
            : "transparent"; // Revert to transparent for non-current-month dates
        e.target.style.color = selectDate.toDate().toDateString() === date.toDate().toDateString() || today
            ? "white"
            : currentMonth
            ? "black"
            : "gray"; // Revert to gray text for non-current-month dates
    }}
    onClick={() => {
        setSelectDate(date);
    }}
>
    {date.date()}
</h1>

								</div>
							);
						}
					)}
				</div>
			</div>
			<div className="h-96 w-80 sm:px-5">
				<h1 className=" font-semibold">
					Schedule for {selectDate.toDate().toDateString()}
				</h1>
				<p className="text-gray-200">No meetings for today.</p>
			</div>
		</div>
	);
}
