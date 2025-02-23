import './styles/normalize.css';
import './styles/index.css';
import { getProducts, getProductById } from './requests/products';
import { createMarkup, createProductById } from './services/markupService';

const list = document.querySelector('#allProducts');

async function render() {
  const data = await getProducts();
  list.insertAdjacentHTML('afterbegin', createMarkup(data.products));
  console.log(data);
}

// render();

// ! 2 task

const formInput = document.querySelector('#singleProductForm');
const elem = document.querySelector('#singleProduct');

formInput.addEventListener('submit', async e => {
  e.preventDefault();
  const id = e.target.elements.id.value.trim();
  const data = await getProductById(id);
  elem.insertAdjacentHTML('afterbegin', createProductById(data));
});
