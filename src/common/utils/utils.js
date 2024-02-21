export function formatPriceToZAR(price) {
  // Format price to ZAR currency
  const formatter = new Intl.NumberFormat("en-ZA", {
    style: "currency",
    currency: "ZAR",
  });

  // Return formatted price
  return formatter.format(price);
}
