import { FaLocationDot } from "react-icons/fa6";
import { RiDeleteBin6Line } from "react-icons/ri";
import { TbTruckDelivery } from "react-icons/tb";
import { MdDateRange } from "react-icons/md";
import { MdOutlinePrivacyTip } from "react-icons/md";
import { MdOutlinePayment } from "react-icons/md";

const steps = [
    { step: 1, icon: <FaLocationDot size={18} />, label: "Postcode", active: true },
    { step: 2, icon: <RiDeleteBin6Line size={18} />, label: "Waste Type", active: true },
    { step: 3, icon: <TbTruckDelivery size={18} />, label: "Select Skip", active: true },
    { step: 4, icon: <MdOutlinePrivacyTip size={18} />, label: "Permit Check", active: false },
    { step: 5, icon: <MdDateRange size={18} />, label: "Choose Date", active: false },
    { step: 6, icon: <MdOutlinePayment size={18} />, label: "Payment", active: false }
]
const Stepper = () => {
    return (
        <div className="w-full px-4 py-6 overflow-x-auto">
            <div className="relative flex items-center justify-between min-w-[600px] md:min-w-0">

                {/* Progress Line */}
                <div className="absolute top-5 left-0 right-0 h-1 bg-gray-200 z-0">
                    <div className="h-full bg-orange-600 w-1/2 transition-all duration-300"></div>
                </div>

                {steps.map(({ step, icon, label, active }) => (
                    <div
                        key={step}
                        className="flex flex-col items-center text-center flex-shrink-0 w-24 z-10"
                    >
                        <div
                            className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold 
            ${active ? "bg-orange-600 text-white" : "bg-gray-300 text-gray-600"} 
            transition-colors duration-200`}
                        >
                            {step}
                        </div>
                        <div
                            className={`mt-2 text-xs md:text-sm font-medium flex flex-col items-center
            ${active ? "text-orange-600" : "text-gray-500"} 
            transition-colors duration-200`}
                        >
                            <span className="text-lg">{icon}</span>
                            <span className="mt-1">{label}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>

    )
}

export default Stepper