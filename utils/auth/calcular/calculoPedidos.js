const calculateTotal = (cantproduct, price) => {
  return cantproduct * price;
}

const calculateIva = (total) => {
  const iva = 0.16;
  return total * iva;
}

module.exports = {calculateIva, calculateTotal}
