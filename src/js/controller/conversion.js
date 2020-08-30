const Conversion = () => {
  const onloadConversion = (val) => `${val} °C`;

  const celsiusToFahrenheit = (val, sym) => {
    const F = (val * 9) / 5 + (32);
    const convert = parseFloat(F.toFixed(2));
    const f = convert.toString();
    return `${f} °${sym}`;
  };

  const fahrenheitToCelsius = (val, sym) => {
    const C = ((val - 32) * 5) / 9;
    const convert = parseFloat(C.toFixed(2));
    const c = convert.toString();
    return `${c} °${sym}`;
  };

  return { onloadConversion, celsiusToFahrenheit, fahrenheitToCelsius };
};

// eslint-disable-next-line import/prefer-default-export
export { Conversion };