
const AddProductPage = () => {
    return (<>
        <div className="bg-gray-100">
            <div className="container mx-auto p-4">
                <div className="bg-white rounded-lg shadow-md p-8 max-w-md mx-auto">
                    <h1 className="text-3xl font-semibold mb-6 text-center">Thêm sản phẩm</h1>
                    <form>
                        <div className="mb-4">
                            <label for="productName" className="block text-gray-700 font-semibold mb-2">Tên sản phẩm</label>
                            <input type="text" id="productName" name="productName" className="w-full border border-gray-400 rounded-lg px-4 py-2 focus:outline-none focus:border-purple-500" required />
                        </div>

                        <div className="mb-4">
                            <label for="productPrice" className="block text-gray-700 font-semibold mb-2">Giá sản phẩm</label>
                            <input type="number" id="productPrice" name="productPrice" className="w-full border border-gray-400 rounded-lg px-4 py-2 focus:outline-none focus:border-purple-500" required />
                        </div>

                        <div className="mb-4">
                            <label for="productImage" className="block text-gray-700 font-semibold mb-2">Đường dẫn sản phẩm</label>
                            <input type="text" id="productImage" name="productImage" className="w-full border border-gray-400 rounded-lg px-4 py-2 focus:outline-none focus:border-purple-500" required />
                        </div>

                        <div className="mb-4">
                            <label for="productDescription" className="block text-gray-700 font-semibold mb-2">Mô tả sản phẩm</label>
                            <textarea id="productDescription" name="productDescription" rows="4" className="w-full border border-gray-400 rounded-lg px-4 py-2 focus:outline-none focus:border-purple-500" required></textarea>
                        </div>

                        <button type="submit" className="bg-purple-500 text-white font-semibold px-6 py-3 rounded-lg w-full hover:bg-purple-600">Thêm sản phẩm</button>
                    </form>
                </div>
            </div>
        </div>
    </>)
}

export default AddProductPage;