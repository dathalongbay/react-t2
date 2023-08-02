const ContactPage = () => {
    return (
        <>
            <div class="container mx-auto px-4 py-8">
                <h1 class="text-4xl font-bold mb-4">Thông tin liên hệ</h1>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                        <h2 class="text-2xl font-semibold mb-2">Địa chỉ</h2>
                        <p>123 Đường ABC, Phường XYZ, Quận ABC, Thành phố XYZ</p>
                    </div>

                    <div>
                        <h2 class="text-2xl font-semibold mb-2">Liên hệ</h2>
                        <p>Email: example@example.com</p>
                        <p>Số điện thoại: (123) 456-7890</p>
                    </div>

                </div>
            </div>

        </>
    )
};

export default ContactPage;