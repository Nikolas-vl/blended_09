import apiInstance from '../services/api';

export async function getProducts() {
  try {
    const data = await apiInstance.get('/products');
    return data.data;
  } catch (error) {
    console.log(error);
  }
}

export async function getProductById(id) {
  try {
    const data = await apiInstance.get(`/products/${id}`);
    return data.data;
  } catch (error) {
    console.log(error);
  }
}
