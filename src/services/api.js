const urlCategory = 'https://api.mercadolibre.com/sites/MLB/categories';
const urlItemName = 'https://api.mercadolibre.com/sites/MLB/search?q=';

// const urlItemCategory = 'https://api.mercadolibre.com/sites/MLB/search?category=';

export async function getCategories() {
  const request = await fetch(urlCategory);
  const response = await request.json();
  return response;
}

export async function getProductsFromCategoryAndQuery(id, category) {
  try {
    const requestCat = await (await fetch(`${urlItemName}${category}`)).json();
    const requestId = await (await fetch(`${urlItemName}${id}`)).json();
    return Promise.any([requestCat, requestId]).then((data) => data);
  } catch (err) {
    console.warn(err.message);
  }
}

getProductsFromCategoryAndQuery();

export async function getProductById() {
  // Esta implementação específica não é avaliada, mas pode ajudar você 🙂
  // Atenção: essa função não deverá ser chamada na tela do carrinho de compras.
}
