const apiEndpoint = 'http://localhost:8123/api/auth'

export const fetchProducts = async () => {
    const response = await fetch(`${apiEndpoint}/products`);
    const data = await response.json();
    return data;
};

export const fetchSingleProduct = async (id) => {
    const response = await fetch(`${apiEndpoint}/products/${id}`);
    const data = await response.json();
    return data;
};

export const fetchSingleOrder = async (id) => {
    const response = await fetch(`${apiEndpoint}/orders/${id}`);
    const data = await response.json();
    return data;
};

export const addOrder = async (order) => {
    const response = await fetch(`${apiEndpoint}/orders`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(order),
    });
    const data = await response.json();
    return data;
};




