const rgb = (r, g, b) => {
  return `rgb(${r},${g},${b})`;
};

function convertColor(r, g, b) {
  const color = {};

  color.r = r;
  color.g = g;
  color.b = b;

  color.rgb = function () {
    return `rgb(${r},${g},${b})`;
  };

  color.hex = function () {
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
  };

  return color;
}
