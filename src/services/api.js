const urlCategory = 'https://api.mercadolibre.com/sites/MLB/categories';
const urlProductId = 'https://api.mercadolibre.com/items/';
const urlItemCategory = 'https://api.mercadolibre.com/sites/MLB/search?category=';

export async function getCategories() {
  const request = await fetch(urlCategory);
  const response = await request.json();
  return response;
}

export async function getProductsFromCategoryAndQuery(category, name) {
  try {
    const request = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${category}&q=${name}`);
    const response = await request.json();
    return response;
  } catch (err) {
    console.warn(err.message);
  }
}

export async function getProductById(id) {
  const request = await fetch(`${urlProductId}${id}`);
  const response = await request.json();
  return response;
}

export async function getCategoryId(id) {
  const request = await fetch(`${urlItemCategory}${id}`);
  const response = await request.json();
  return response.results;
}
