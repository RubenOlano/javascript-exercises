const ftoc = function(faherenheit) {
  let celsius = (faherenheit - 32) * (5.0 / 9.0);

  return parseFloat(celsius.toFixed(1));
}

const ctof = function(celsius) {
  let faherenheit = (celsius * (9.0 / 5.0)) + 32;

  return parseFloat(faherenheit.toFixed(1));
}

module.exports = {
  ftoc,
  ctof
}
