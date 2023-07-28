function App() {
  return (
    <>
      <div className="bg-gray-100">
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

        <nav className="bg-purple-500 p4">
          <ul className="flex">
            <li className="mr-6 ml-4 py-2"><a href="#" className="text-white">Trang chủ</a></li>
            <li className="mr-6 py-2"><a href="#" className="text-white">Cửa hàng</a></li>
            <li className="mr-6 py-2"><a href="#" className="text-white">Sản phẩm</a></li>
            <li className="mr-6 py-2"><a href="#" className="text-white">Khuyến mãi</a></li>
          </ul>
        </nav>

        <div className="container mx-auto p-4">
          <h1 className="text-3xl font-bold mb-4">Danh sách sản phẩm hot</h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
           
            <div className="bg-white rounded-lg shadow-md p-4 flex flex-col justify-between">
              <img src="https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/_/7/_76666_7__3-3.jpg"
                alt="Product 1" className=" mb-4 rounded-lg" />
                <h2 className="text-lg font-semibold">Tên sản phẩm 1</h2>
                <p className="text-gray-600">Giá: $100</p>
                <button className="bg-purple-600 text-white font-semibold px-4 py-2 mt-4 rounded-lg hover:bg-blue-600">Add
                  to Cart</button>

            </div>

           
            <div className="bg-white rounded-lg shadow-md p-4 flex flex-col justify-between">
              <img src="https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/_/7/_76666_7__3-3.jpg"
                alt="Product 2" className=" mb-4 rounded-lg" />
                <h2 className="text-lg font-semibold">Tên sản phẩm 2</h2>
                <p className="text-gray-600">Giá: $150</p>
                <button className="bg-purple-600 text-white font-semibold px-4 py-2 mt-4 rounded-lg hover:bg-blue-600">Add
                  to Cart</button>

            </div>

           
            <div className="bg-white rounded-lg shadow-md p-4 flex flex-col justify-between">
              <img src="https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/_/7/_76666_7__3-3.jpg"
                alt="Product 3" className=" mb-4 rounded-lg" />
                <h2 className="text-lg font-semibold">Tên sản phẩm 3</h2>
                <p className="text-gray-600">Giá: $200</p>
                <button className="bg-purple-600 text-white font-semibold px-4 py-2 mt-4 rounded-lg hover:bg-blue-600">Add
                  to Cart</button>

            </div>

            
            <div className="bg-white rounded-lg shadow-md p-4 flex flex-col justify-between">
              <img src="https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/_/7/_76666_7__3-3.jpg"
                alt="Product 3" className=" mb-4 rounded-lg" />
                <h2 className="text-lg font-semibold">Tên sản phẩm 3</h2>
                <p className="text-gray-600">Giá: $200</p>
                <button className="bg-purple-600 text-white font-semibold px-4 py-2 mt-4 rounded-lg hover:bg-blue-600">Add
                  to Cart</button>

            </div>

            
            <div className="bg-white rounded-lg shadow-md p-4 flex flex-col justify-between">
              <img src="https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/_/7/_76666_7__3-3.jpg"
                alt="Product 3" className=" mb-4 rounded-lg" />
                <h2 className="text-lg font-semibold">Tên sản phẩm 3</h2>
                <p className="text-gray-600">Giá: $200</p>
                <button className="bg-purple-600 text-white font-semibold px-4 py-2 mt-4 rounded-lg hover:bg-blue-600">Add
                  to Cart</button>

            </div>

           
            <div className="bg-white rounded-lg shadow-md p-4 flex flex-col justify-between">
              <img src="https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/_/7/_76666_7__3-3.jpg"
                alt="Product 3" className=" mb-4 rounded-lg" />
                <h2 className="text-lg font-semibold">Tên sản phẩm 3</h2>
                <p className="text-gray-600">Giá: $200</p>
                <button className="bg-purple-600 text-white font-semibold px-4 py-2 mt-4 rounded-lg hover:bg-blue-600">Add
                  to Cart</button>

            </div>

           
            <div className="bg-white rounded-lg shadow-md p-4 flex flex-col justify-between">
              <img src="https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/_/7/_76666_7__3-3.jpg"
                alt="Product 3" className=" mb-4 rounded-lg" />
                <h2 className="text-lg font-semibold">Tên sản phẩm 3</h2>
                <p className="text-gray-600">Giá: $200</p>
                <button className="bg-purple-600 text-white font-semibold px-4 py-2 mt-4 rounded-lg hover:bg-blue-600">Add
                  to Cart</button>

            </div>

          </div>

        </div>

        <footer className="bg-gray-200 py-4 text-center">
          &copy; 2023 Your Company. All rights reserved.
        </footer>
      </div>
    </>
  );
}

export default App;
