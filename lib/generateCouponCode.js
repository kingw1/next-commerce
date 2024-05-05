export const generateCouponCode = (title, expireDate) => {
  const formattedTitle = title.toUpperCase().replace(/\s+/g, "");
  const formattedExpiryDate = expireDate.split("-").reverse().join("");

  const couponCode = `${formattedTitle}-${formattedExpiryDate}`;

  return couponCode;
};
