export const randomColor = () => {
  const colors = [
    "#e1e659",
    "#fbce29",
    "#d5e046",
    "#fff100",
    "#bae1f2",
    "#AADFEF",
    "#A4D291",
    "#12BFE9",
    "#eb82ab",
    "#43BA7A",
    "#F57C45",
    "#9B79B6",
  ];
  const selectedColor = colors[Math.floor(Math.random() * colors.length)];
  return `linear-gradient(155deg, ${selectedColor} 50%, #fff 100%)`;
};

export const randomDegree = () => {
  const range = [-10, -5, 2, 5, 8, 10];
  return range[Math.floor(Math.random() * range.length)];
};
