export function formatCurrency(value) {
  return new Intl.NumberFormat("en", {
    style: "currency",
    currency: "USD",
  }).format(value);
}

export function shuffleArray(arr) {
  return arr.sort(() => Math.random() - 0.5).sort(() => Math.random() - 0.5);
}
