export function generateIsoFormattedDate(date) {
  const dateObject = new Date(date);
  const isoFormattedDate = dateObject.toISOString();
  return isoFormattedDate;
}
