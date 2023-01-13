// localGetitem = () => JSON.parse(localStorage.getItem('cart'));

export default function localSet(product) {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];

  cart.push(product);
  localStorage.setItem('cart', JSON.stringify(cart));
}
