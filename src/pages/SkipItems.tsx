import { useEffect, useState } from "react";
import SkipCard from "../components/SkipCard"
import axios from "axios";
import Loader from "../components/Loader";
import Stepper from "../components/Stepper";
import type { SkipItem } from "../interfaces/SkipItem";

const SkipItems = () => {

    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchItems = async () => {
            try {
                const response = await axios.get("https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft");
                setItems(response.data);
                setIsLoading(false);
            } catch (error) {
                console.error("Error fetching skip items:", error);
            }
        };
        fetchItems();
    }, []);

    return (
        <div className="w-full px-4 sm:px-6 lg:px-10 text-center mt-5">
            <Stepper />

            <h2 className="text-3xl sm:text-4xl font-bold text-gray-700">
                Choose Your Skip Size
            </h2>

            <p className="mt-3 sm:mt-5 text-lg sm:text-xl text-gray-600">
                Select the skip size that best suits your needs
            </p>

            {isLoading && <Loader />}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mt-8 mb-44 md:px-15 lg:px-15 sm:px-0">
                {items.map((skip:SkipItem) => (
                    <SkipCard key={skip.id} skip={skip} />
                ))}
            </div>
        </div>


    )
}

export default SkipItems