import { useEffect, useState } from "react";
import Cart from "../components/Cart"
import SkipCard from "../components/SkipCard"
import axios from "axios";
import Loader from "../components/Loader";
import Stepper from "../components/Stepper";

const SkipItems = () => {

    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchItems = async () => {
            try {
                const response = await axios.get('https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft'); // Replace with your API endpoint
                setItems(response.data);
                setIsLoading(false);
            } catch (error) {
                console.error("Error fetching skip items:", error);
            }
        };
        fetchItems();
    }, []);

    return (
        <div className="text-center mt-5 mb-24">
            <Stepper />
            <h2 className="text-4xl font-bold text-gray-700">Choose Your Skip Size</h2>
            <p className="mt-5 text-xl text-gray-600">Select the skip size that best suits your needs</p>
            {
                isLoading && <Loader />
            }
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-2 mt-8">
                {items.map((item: any) => (
                    <SkipCard key={item.id} item={item} />
                ))}
            </div>
            <Cart />
            <div className="bottom-0 fixed">
            </div>
        </div>
    )
}

export default SkipItems