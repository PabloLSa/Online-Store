export default function sumQty() {
  const getLocal = JSON.parse(localStorage.getItem('cart'));
  if (getLocal) {
    const sum = getLocal.reduce((acc, { qty }) => acc + qty, 0);
    return sum;
  }
}
