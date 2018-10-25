export function truncateString(str, len) {
  const dots = str.length > len ? "..." : "";
  return str.substring(0, len) + dots;
}
