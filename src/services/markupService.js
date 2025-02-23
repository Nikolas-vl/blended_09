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
