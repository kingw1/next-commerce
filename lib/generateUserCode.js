export const generateUserCode = (prefix, name) => {
  const formattedName = name.toUpperCase().replace(/\s+/g, "");
  const userCode = `${prefix}-${formattedName}`;

  return userCode;
};
