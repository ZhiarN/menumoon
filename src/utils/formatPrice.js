import { config } from "./config.js";
export function formatPrice(amount) {
  const formattedPrice = `${String(amount) + config.currencySymbol}`;
  return formattedPrice;
}
