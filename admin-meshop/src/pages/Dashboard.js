
const Dashboard = () => {
    return (
        <>
            <div className="bg-gray-100">
                <header className="bg-white shadow-md">
                </header>

                <div className="container mx-auto p-4">
                    <div className="flex justify-end mb-4">
                        <button className="bg-purple-500 text-white font-semibold px-4 py-2 rounded-lg hover:bg-purple-600">Thêm sản phẩm</button>
                    </div>

                    <div className="bg-white rounded-lg shadow-md p-4">
                        <h2 className="text-2xl font-semibold mb-4">Danh sách sản phẩm</h2>
                        <table className="w-full">
                            <thead>
                                <tr className="bg-gray-200">
                                    <th className="px-4 py-2">Tên sản phẩm</th>
                                    <th className="px-4 py-2">Hình ảnh</th>
                                    <th className="px-4 py-2">Chỉnh sửa</th>
                                    <th className="px-4 py-2">Xóa</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="px-4 py-2">Sản phẩm A</td>
                                    <td className="px-4 py-2"><img src="https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/_/7/_76666_7__3-3.jpg" alt="Product A" className="w-16 h-16 object-cover rounded-lg" /></td>
                                    <td className="px-4 py-2"><button className="bg-blue-500 text-white font-semibold px-3 py-1 rounded-lg hover:bg-blue-600">Edit</button></td>
                                    <td className="px-4 py-2"><button className="bg-red-500 text-white font-semibold px-3 py-1 rounded-lg hover:bg-red-600">Delete</button></td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-2">Sản phẩm B</td>
                                    <td className="px-4 py-2"><img src="https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/_/7/_76666_7__3-3.jpg" alt="Product B" className="w-16 h-16 object-cover rounded-lg" /></td>
                                    <td className="px-4 py-2"><button className="bg-blue-500 text-white font-semibold px-3 py-1 rounded-lg hover:bg-blue-600">Edit</button></td>
                                    <td className="px-4 py-2"><button className="bg-red-500 text-white font-semibold px-3 py-1 rounded-lg hover:bg-red-600">Delete</button></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <footer className="bg-gray-200 py-4 text-center">
                    &copy; 2023 Your Company. All rights reserved.
                </footer>
            </div>
        </>
    )
}
export default Dashboard;