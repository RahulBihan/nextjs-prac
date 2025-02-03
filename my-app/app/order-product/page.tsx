"use client"
import { useRouter} from "next/navigation";
export default function OrderProduct(){
    const router = useRouter();
    const handleClick = () => {
        alert('Order');
        router.push('/');
        // use replace to reset history
        // back and forward to go and forth
    }
    return (
        <div>
            <h2> OrderProduct</h2>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleClick}>Order
            </button>
        </div>
    );
}