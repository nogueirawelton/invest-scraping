export function parseBigNumber(num: number) {
  if (num >= 1000000000) {
    return (num / 1000000000).toFixed(2) + "B";
  } else if (num >= 1000000) {
    return (num / 1000000).toFixed(2) + "M";
  } else {
    return num || "N/A";
  }
}
