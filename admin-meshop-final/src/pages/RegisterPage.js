import requireAuth from "../hook/requireAuth";
const RegisterPage = () => {
    return (
        <>
            <div className="bg-gray-100">
                <div className="container mx-auto p-4">
                    <div className="bg-white rounded-lg shadow-md p-8 max-w-md mx-auto">
                        <h1 className="text-3xl font-semibold mb-6 text-center">Đăng ký</h1>
                        <form>
                            <div className="mb-4">
                                <label for="username" className="block text-gray-700 font-semibold mb-2">Tên đăng nhập</label>
                                <input type="text" id="username" name="username" className="w-full border border-gray-400 rounded-lg px-4 py-2 focus:outline-none focus:border-purple-500" required />
                            </div>

                            <div className="mb-4">
                                <label for="email" className="block text-gray-700 font-semibold mb-2">Email</label>
                                <input type="email" id="email" name="email" className="w-full border border-gray-400 rounded-lg px-4 py-2 focus:outline-none focus:border-purple-500" required />
                            </div>

                            <div className="mb-4">
                                <label for="password" className="block text-gray-700 font-semibold mb-2">Mật khẩu</label>
                                <input type="password" id="password" name="password" className="w-full border border-gray-400 rounded-lg px-4 py-2 focus:outline-none focus:border-purple-500" required />
                            </div>

                            <div className="mb-4">
                                <label for="confirmPassword" className="block text-gray-700 font-semibold mb-2">Nhập lại mật khẩu</label>
                                <input type="password" id="confirmPassword" name="confirmPassword" className="w-full border border-gray-400 rounded-lg px-4 py-2 focus:outline-none focus:border-purple-500" required />
                            </div>

                            <button type="submit" className="bg-purple-500 text-white font-semibold px-6 py-3 rounded-lg w-full hover:bg-purple-600">Đăng ký</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
export default requireAuth(RegisterPage);