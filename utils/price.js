export const formatPrice = number => {
  return number.toLocaleString('es-PE', { // es-PE para español de Perú
    style: 'currency',
    currency: 'PEN', 
  });
};

