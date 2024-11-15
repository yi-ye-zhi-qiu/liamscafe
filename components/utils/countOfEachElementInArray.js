export default function countOfEachElementInArray ( cart ) {
  // Cart is a non-unique array of string elements (productIds):
  // ["P000000", "P000000", "P000001"]
  // Map cart item (productId) to amount in cart, entries resemble:
  // P000000 -> 2, P000001 -> 1
  const map = cart.reduce(
    (arr, e) => arr.set(e, (arr.get(e) || 0) + 1),
    new Map(),
  );
  return map
}