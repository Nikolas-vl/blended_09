import apiInstance from '../services/api';

export async function getProducts() {
  try {
    const data = await apiInstance.get('/products');
    return data.data;
  } catch (error) {
    console.log(error);
  }
}
