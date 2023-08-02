import requireAuth from "../hook/requireAuth";

import ProductForm from "../components/ProductForm";

const AddProductPage = () => {
    return (<>
       <ProductForm id={0} product={null} />
    </>)
}

export default requireAuth(AddProductPage);