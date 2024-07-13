export const formatPrice = input => {
  const number = parseFloat(input);
  if (isNaN(number)) {
    console.error('Invalid input:', input);
    return 'Invalid number';
  }

  return number.toLocaleString('es-PE', { 
    style: 'currency',
    currency: 'PEN', 
  });
};
