import './styles/normalize.css';
import './styles/index.css';
import {
  getProducts,
  getProductById,
  postProduct,
  deleteProductById,
} from './requests/products';
import {
  createMarkup,
  createProductById,
  createNewProduct,
} from './services/markupService';

const list = document.querySelector('#allProducts');
const btn = document.querySelector('#moreBtn');

let page = 1;

btn.addEventListener('click', async e => {
  const data = await getProducts(page);
  console.log(data);

  list.insertAdjacentHTML('beforeend', createMarkup(data.products));
  if (data.total < data.skip + data.limit) {
    btn.style.display = 'none';
  }
  page += 1;
});

// ! ===================== 2 task

const formInput = document.querySelector('#singleProductForm');
const elem = document.querySelector('#singleProduct');

formInput.addEventListener('submit', async e => {
  e.preventDefault();
  const id = e.target.elements.id.value.trim();
  const data = await getProductById(id);
  elem.insertAdjacentHTML('afterbegin', createProductById(data));
});

// ! ===================== 3 task

const formNewProduct = document.querySelector('#newProduct');
const newProductContainer = document.querySelector('#newProductSection');

formNewProduct.addEventListener('submit', async e => {
  e.preventDefault();
  const title = e.target.elements.title.value.trim();
  const description = e.target.elements.description.value.trim();
  const price = e.target.elements.price.value.trim();

  const product = {
    title,
    description,
    price,
  };

  try {
    const productObj = await postProduct(product);
    newProductContainer.insertAdjacentHTML(
      'afterbegin',
      createNewProduct(productObj)
    );
    console.log(productObj);
  } catch (error) {
    newProductContainer.insertAdjacentHTML('afterbegin', error.message);
  }
});
// ! ===================== 4 task

const formDeletedProduct = document.querySelector('#deletionProductForm');

formDeletedProduct.addEventListener('submit', async e => {
  e.preventDefault();
  const id = e.target.elements.deletionId.value.trim();
  try {
    const data = await deleteProductById(id);
    console.log(data);
    alert('SUCCESS ');
  } catch (error) {
    alert(`ERROR ${error.message}`);
  }
});
