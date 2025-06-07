import { FaLocationDot } from "react-icons/fa6";
import { RiDeleteBin6Line } from "react-icons/ri";
import { TbTruckDelivery } from "react-icons/tb";
import { MdDateRange } from "react-icons/md";
import { MdOutlinePrivacyTip } from "react-icons/md";
import { MdOutlinePayment } from "react-icons/md";





const Stepper = () => {
    return (
        <div className="w-full max-w-4xl mx-auto py-8 mb-2">
            <div className="flex items-center justify-between relative">

                <div className="flex flex-col items-center z-10">
                    <div className="w-10 h-10 rounded-full cursor-pointer bg-orange-600 text-white flex items-center justify-center font-bold">1</div>
                    <span className="mt-2 text-md font-medium text-orange-600 flex items-center gap-1">
                        <FaLocationDot size={19} />
                        Postcode
                    </span>
                </div>

                <div className="absolute top-5 left-[10%] w-4/5 h-1 bg-gray-300 z-0">
                    <div className="h-full bg-orange-600 w-1/2"></div>
                </div>

                <div className="flex flex-col items-center z-10">
                    <div className="w-10 h-10 rounded-full bg-orange-600 cursor-pointer text-white flex items-center justify-center font-bold">2</div>
                    <span className="mt-2 text-md font-medium text-orange-600 flex items-center gap-1">
                        <RiDeleteBin6Line size={19} />
                        Waste Type
                    </span>
                </div>

                <div className="flex flex-col items-center z-10">
                    <div className="w-10 h-10 rounded-full bg-orange-600 cursor-pointer text-white flex items-center justify-center font-bold">3</div>
                    <span className="mt-2 text-md font-medium text-orange-600 flex items-center gap-1">
                        <TbTruckDelivery size={19} />
                        Select Skip
                    </span>
                </div>

                <div className="flex flex-col items-center z-10">
                    <div className="w-10 h-10 rounded-full cursor-not-allowed bg-gray-300 text-gray-600 flex items-center justify-center font-bold">4</div>
                    <span className="mt-2 text-md font-medium text-gray-600 flex items-center gap-1">
                        <MdOutlinePrivacyTip size={19} />
                        Permit Check
                    </span>
                </div>

                <div className="flex flex-col items-center z-10">
                    <div className="w-10 h-10 rounded-full bg-gray-300 cursor-not-allowed text-gray-600 flex items-center justify-center font-bold">5</div>
                    <span className="mt-2 text-md font-medium text-gray-600 flex items-center gap-1">
                        <MdDateRange size={19} />
                        Choose Date
                    </span>
                </div>

                <div className="flex flex-col items-center z-10">
                    <div className="w-10 h-10 rounded-full bg-gray-300 cursor-not-allowed text-gray-600 flex items-center justify-center font-bold">6</div>
                    <span className="mt-2 text-md font-medium text-gray-600 flex items-center gap-1">
                        <MdOutlinePayment size={19} />
                        Payment
                    </span>
                </div>

            </div>
        </div>

    )
}

export default Stepper