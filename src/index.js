import './styles/normalize.css';
import './styles/index.css';
import { getProducts } from './requests/products';
import { createMarkup } from './services/markupService';

const list = document.querySelector('#allProducts');

async function render() {
  const data = await getProducts();
  list.insertAdjacentHTML('afterbegin', createMarkup(data.products));
  console.log(data);
}

render();
console.log('hi');
