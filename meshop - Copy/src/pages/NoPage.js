import { Link } from "react-router-dom";
const NoPage = () => {
    return (<>
        <h1 className="text-3xl font-bold mb-4">Trang 404</h1>
        <div className="mt-4">   
            <Link to="/" class="bg-purple-500 text-white font-semibold px-4 py-2 rounded-lg hover:bg-purple-600">Quay lại trang chủ</Link>
        </div>
    </>)
};

export default NoPage;