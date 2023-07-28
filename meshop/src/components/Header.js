const Header = () => {
    return (
        <>
            <header className="bg-white shadow-md">
                <div className="container mx-auto p-4 flex items-center justify-between">
                    <div className="text-2xl font-bold">EShop</div>
                    <div className="flex items-center space-x-2">
                        <span className="text-gray-600">Items in cart: 3</span>
                        <button className="bg-purple-500 text-white font-semibold px-4 py-2 rounded-lg hover:bg-purple-600">View
                            Cart</button>
                    </div>
                </div>
            </header>
        </>
    )
};

export default Header;