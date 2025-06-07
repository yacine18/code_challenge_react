import React, { useState } from "react"
import Image from "./Image"
import { FaArrowRight } from "react-icons/fa6";
import Badge from "./Badge";
import { IoWarningOutline } from "react-icons/io5";
import type { SkipItem } from "../interfaces/SkipItem";



const SkipCard = ({item}:SkipItem) => {
    const [isSelected, setIsSelected] = useState(false)
    console.log(item)
    return (
        <>
            <a onClick={() => setIsSelected(!isSelected)} className={`${isSelected && "border-orange-600"} w-full max-w-sm border border-gray-200 rounded-lg shadow-lg mt-5 mx-auto`}>
                <div className="relative">
                    <Image className="cursor-pointer w-full" src="src/assets/skip.jpg" alt="skip" loading="lazy" />
                    {
                        !item.allowed_on_road &&
                        <>
                            <div className="bg-black/90 backdrop-blur-sm px-3 mt-2 mx-2 py-1 rounded-lg w-[60%] flex items-center gap-2">
                                <IoWarningOutline size={18} className="text-yellow-500" />
                                <Badge className="font-normal text-yellow-500 text-xs md:text-sm lg:text-sm">Not Allowed On The Road</Badge>
                            </div>

                        </>
                    }
                </div>
                <div className="px-5 pb-5 mt-4">
                    <a href="/" className="text-start">
                        <h5 className="text-2xl text-start font-semibold tracking-tight text-orange-600">{item.size} Yard Skip</h5>
                        <div className="flex items-center">
                            <p className="mt-2 text-lg text-gray-500">{item.hire_period_days} day hire period</p>
                            <p className="mt-2 text-lg ml-auto text-gray-500">{item.size} Yards</p>
                        </div>
                    </a>
                    <div className="flex items-center justify-between mt-10">
                        <span className="text-3xl font-semibold text-orange-600">£{item.price_before_vat}</span>
                        <button onClick={() => setIsSelected(!isSelected)} className={`${isSelected && "dark:bg-orange-600 dark:hover:bg-orange-700"} text-white cursor-pointer flex flex-row focus:ring-4 rounded-md text-[1.1rem] px-5 py-2.5 text-center dark:bg-gray-600 dark:hover:bg-gray-800`}>
                            <div className="flex flex-wrap">
                                {
                                    isSelected ? "Selected" : <>
                                        <p>Select This Skip</p><FaArrowRight className="mt-1.5 mx-2" />
                                    </>

                                }
                            </div>
                        </button>
                    </div>
                </div>
            </a>
        </>
    )
}

export default SkipCard