const API_URL = "http://localhost:3000/api/products"



export const getProducts = async () => {
    const response = await  fetch(API_URL);
    return response.json();
};

export const getProductByID = async (id) => {
    const response =await fetch(`${API_URL}/${ID}`);
    return response.json();
};



export const addProduct = async (product)=> {
    const response = await fetch (API_URL,{
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(product)
    });
    return response.json();
}

export const updateProduct = async (id,product)=> {
    const response = await fetch (`${API_URL}/${ID}`,{
        method: "PUT",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(product)
    });
    return response.json();
}