const StorePage = () => {
    return (
        <>
            <div class="container mx-auto">
                <div class="grid grid-cols-1 gap-4">

                    <h1 className="text-3xl font-bold mb-4">Danh sách hệ thống cửa hàng trên toàn quốc</h1>

                    <div class="rounded overflow-hidden shadow-lg">
                        <img className="mx-auto" src="https://salt.tikicdn.com/cache/w700/ts/tmp/57/f0/98/13b460c561b54ec5680c209f40aaeb3f.jpg" alt="Ảnh tin tức 1" style={{ height: '150px' }} />
                        <div class="px-6 py-4">
                            <div class="font-bold text-xl mb-2 ">Cửa hàng bà triệu</div>
                            <p class="text-gray-700 text-base">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it </p>
                        </div>
                    </div>

                    <div class="rounded overflow-hidden shadow-lg">
                        <img className="mx-auto" src="https://salt.tikicdn.com/cache/w700/ts/tmp/57/f0/98/13b460c561b54ec5680c209f40aaeb3f.jpg" alt="Ảnh tin tức 1" style={{ height: '150px' }} />
                        <div class="px-6 py-4">
                            <div class="font-bold text-xl mb-2 ">Cửa hàng hồ tùng mậu</div>
                            <p class="text-gray-700 text-base">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it </p>
                        </div>
                    </div>

                  
                </div>
            </div>

        </>
    )
};

export default StorePage;