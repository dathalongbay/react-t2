const token = localStorage.getItem('jwtToken');
const apiEndpoint = 'http://localhost:8123/api/auth'

export const fetchProducts = async () => {
    const response = await fetch(`${apiEndpoint}/products`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    const data = await response.json();
    return data;
};

export const fetchSingleProduct = async (id) => {
    const response = await fetch(`${apiEndpoint}/products/${id}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    const data = await response.json();
    return data;
};

export const addProduct = async (product) => {
    const response = await fetch(`${apiEndpoint}/products`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(product),
    });
    const data = await response.json();
    return data;
};

export const updateProduct = async (updatedProduct) => {
    const response = await fetch(`${apiEndpoint}/products/${updatedProduct.id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(updatedProduct),
    });
    const data = await response.json();

    return data;
};

export const deleteProduct = async (productId) => {
    const response = await fetch(`${apiEndpoint}/products/${productId}`, {
        method: 'DELETE',
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    const data = await response.json();
    return data;
};
