const urlCategory = 'https://api.mercadolibre.com/sites/MLB/categories';
// const urlItemName = 'https://api.mercadolibre.com/sites/MLB/search?q=';
// const urlItemCategory = 'https://api.mercadolibre.com/sites/MLB/search?category=';

export async function getCategories() {
  const request = await fetch(urlCategory);
  const response = await request.json();
  return response;
}

export async function getProductsFromCategoryAndQuery(category, name) {
  try {
    const request = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${category}_ID&q=${name}`);
    const response = await request.json();
    return response;
  } catch (err) {
    console.warn(err.message);
  }
}

getProductsFromCategoryAndQuery();

export async function getProductById() {
  // Esta implementação específica não é avaliada, mas pode ajudar você 🙂
  // Atenção: essa função não deverá ser chamada na tela do carrinho de compras.
}
