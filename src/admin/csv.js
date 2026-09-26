export const toCsv = (arr) => (arr || []).join(", ");
export const fromCsv = (str) => str.split(",").map((s) => s.trim()).filter(Boolean);
