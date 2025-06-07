import { IoIosArrowForward } from "react-icons/io";

const Cart = () => {
    return (
        <div className="w-full bg-white border-t border-gray-200 px-4 py-3 md:px-8 md:py-4 shadow-sm fixed bottom-0 left-0 z-50 space-y-3 md:space-y-0">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 text-center sm:text-left">
                    <h3 className="text-lg sm:text-xl font-medium text-gray-800">4 Yard Skip</h3>
                    <p className="text-gray-500 text-sm sm:text-base mt-1 sm:mt-0">
                        £<span className="text-lg sm:text-xl text-orange-600 font-bold">211</span> for 14 days hire
                    </p>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-2 space-y-2 sm:space-y-0">
                    <button className="w-full sm:w-auto px-4 py-2 text-md sm:text-md border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100 transition">
                        Back
                    </button>
                    <button className="w-full gap-0.5 sm:w-auto px-5 py-2 text-md sm:text-md bg-orange-600 text-white rounded-md hover:bg-orange-700 transition flex items-center justify-center">
                        Continue
                        <IoIosArrowForward className="mt-1" />
                    </button>
                </div>
            </div>
            <p className="mt-2 text-gray-500">Imagery and information shown throughout this website may not reflect the exact shape or size specification, colours may vary, options and/or accessories may be featured at additional cost.</p>
        </div>

    )
}

export default Cart