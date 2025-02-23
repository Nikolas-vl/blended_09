export function createMarkup(products) {
  const markup = products
    .map(({ title, description, category, price, thumbnail }) => {
      return `<li>
        <h3>${title}</h3>
        <p>${description}</p>
        <p>${category}</p>
        <p>${price}</p>
        <img src="${thumbnail}" alt="${description}">
      </li>`;
    })
    .join('');
  return markup;
}

// ! ===================== 2 task

export function createProductById({
  id,
  title,
  description,
  category,
  price,
  thumbnail,
}) {
  return `<li>
        <h3>${title}</h3>
        <p>${id}</p>
        <p>${description}</p>
        <p>${category}</p>
        <p>${price}</p>
        <img src="${thumbnail}" alt="${description}">
      </li>`;
}

// ! ===================== 3 task

export function createNewProduct({ title, description, price }) {
  return `<li>
        <h3>${title}</h3>
        <p>${price}</p>
        <p>${description}</p>
      </li>`;
}

// ! ===================== 4 task
