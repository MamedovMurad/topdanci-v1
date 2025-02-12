export const formatPhoneNumber = (phone: string) => {
  // Remove any non-digit characters
  const cleaned = phone.replace(/\D/g, "");

  let match;

  // Handle numbers that start with '994' (country code)
  if (cleaned.startsWith("994") && cleaned.length === 12) {
    match = cleaned.match(/(\d{3})(\d{2})(\d{3})(\d{2})(\d{2})/);
    if (match) {
      return `(0${match[2]}) ${match[3]}-${match[4]}-${match[5]}`; // Add 0 before the second group
    }
  }
  // Handle numbers that start with '0' and have 9 digits
  else if (cleaned.startsWith("0") && cleaned.length === 9) {
    match = cleaned.match(/(\d{3})(\d{3})(\d{2})(\d{2})/);
    if (match) {
      return `(${match[1]}) ${match[2]}-${match[3]}-${match[4]}`;
    }
  }

  return phone; // Return original if it doesn't match any expected format
};
