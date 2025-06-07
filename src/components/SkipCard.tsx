import { useState } from "react"
import Image from "./Image"
import { FaArrowRight } from "react-icons/fa6";
import Badge from "./Badge";
import { IoWarningOutline } from "react-icons/io5";
import Cart from "./Cart";
import type { SkipItem } from "../interfaces/SkipItem";



const SkipCard = ({ skip }: { skip: SkipItem }) => {
    const [isSelected, setIsSelected] = useState(false)
    console.log(skip)
    return (
        <>
            <div
                onClick={() => setIsSelected(!isSelected)}
                className={`cursor-pointer w-full max-w-sm mx-auto mt-5 mb-20 border rounded-lg shadow-lg transition-colors duration-300 ${isSelected ? "border-orange-600" : "border-gray-200"
                    }`}
            >       <div className="relative">
                    <Image
                        className="w-full rounded-t-lg object-cover"
                        src="src/assets/skip.jpg"
                        alt="skip"
                        loading="lazy"
                    />

                    {!skip.allowed_on_road && (
                        <div className="absolute top-3 left-3 bg-black/80 backdrop-blur-sm px-3 py-1 rounded-lg flex items-center gap-2 w-fit max-w-[80%]">
                            <IoWarningOutline size={18} className="text-yellow-500" />
                            <Badge className="text-yellow-500 text-xs md:text-sm">Not Allowed On The Road</Badge>
                        </div>
                    )}
                </div>
                <div className="px-5 py-5 space-y-4">
                    <div>
                        <h5 className="text-xl text-start font-semibold text-orange-600">
                            {skip.size} Yard Skip
                        </h5>
                        <div className="flex items-center justify-between text-sm text-gray-500 mt-1">
                            <span>{skip.hire_period_days} days hire period</span>
                            <span>{skip.size} Yards</span>
                        </div>
                    </div>

                    <div className="flex items-center justify-between">
                        <span className="text-2xl font-bold text-orange-600">
                            £{skip.price_before_vat}
                        </span>
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                setIsSelected(!isSelected);
                            }}
                            className={`flex items-center cursor-pointer gap-2 px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${isSelected
                                ? "bg-orange-600 hover:bg-orange-700"
                                : "bg-gray-700 hover:bg-gray-800"
                                } text-white`}
                        >
                            {isSelected ? (
                                "Selected"
                            ) : (
                                <>
                                    Select This Skip <FaArrowRight className="mt-[1px]" />
                                </>
                            )}
                        </button>
                    </div>
                </div>
            </div>
            <div className="bottom-0 fixed">
                <Cart />
            </div>
        </>

    )
}

export default SkipCard