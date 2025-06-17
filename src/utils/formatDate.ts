export function formatDate(dateString: string) {
  // dateString esperado: "2025-06-28T00:00:00+00:00"
  const datePart = dateString.substring(0, 10); // "2025-06-28"
  const [year, month, day] = datePart.split("-");
  return `${month}/${day}/${year}`;
}
