import apiInstance from '../services/api';

// ! ===================== 1 task

// export async function getProducts() {
//   try {
//     const data = await apiInstance.get(`/products/`);
//     return data.data;
//   } catch (error) {
//     console.log(error);
//   }
// }

export async function getProducts(page) {
  try {
    const data = await apiInstance.get(`/products/`, {
      params: { limit: 100, skip: (page - 1) * 100 },
    });
    return data.data;
  } catch (error) {
    console.log(error);
  }
}

// ! ===================== 2 task

export async function getProductById(id) {
  try {
    const data = await apiInstance.get(`/products/${id}`);
    return data.data;
  } catch (error) {
    console.log(error);
  }
}

// ! ===================== 3 task

export async function postProduct(product) {
  try {
    const data = await apiInstance.post(`/products/add`, product);
    return data.data;
  } catch (error) {}
}

// ! ===================== 4 task

export async function deleteProductById(id) {
  try {
    const data = await apiInstance.delete(`/products/${id}`);
    return data.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
}
