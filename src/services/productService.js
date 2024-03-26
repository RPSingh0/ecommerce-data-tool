import axios from "axios";

const URL = 'http://127.0.0.1:3000/api/v1/product';

export async function getAllProductService() {
    let {status, data} = await axios.get(`${URL}/all`);

    if (status !== 200) {
        throw new Error('Data not found...');
    }

    return data;
}

export async function createProductService({name, description, price, parentCategory, subCategory}) {

    let {status, data} = await axios.post(`${URL}/create`, {
        name: name,
        description: description,
        price: price,
        parentCategory: parentCategory,
        subCategory: subCategory
    });

    if (status !== 201) {
        throw new Error('Failed to create data...');
    }

    return data;
}

export async function deleteProductService({id}) {
    let {status, data} = await axios.delete(`${URL}/delete/${id}`);

    if (status !== 200) {
        throw new Error('Failed to delete...')
    }

    return data;
}