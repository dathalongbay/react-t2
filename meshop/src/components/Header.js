import { Link } from "react-router-dom";
const Header = () => {
    return (
        <>
            <header className="bg-white shadow-md">
                <div className="container mx-auto p-4 flex items-center justify-between">
                    <div className="text-2xl font-bold">EShop</div>
                    <div className="flex items-center space-x-2">
        
                        <Link to='/cart' className="bg-purple-500 text-white font-semibold px-4 py-2 rounded-lg hover:bg-purple-600">Xem giỏ hàng (3)</Link>
                    
                    </div>
                </div>
            </header>
        </>
    )
};

export default Header;