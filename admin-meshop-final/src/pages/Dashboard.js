import requireAuth from "../hook/requireAuth";
import ProductList from "../components/ProductList";

const Dashboard = () => {

    return (
        <>
            <ProductList />
        </>
    )
}
export default requireAuth(Dashboard);