import React from "react";

function Colors({ colorName, color, setColor }) {
  const handleClick = () => {
    setColor((colorName.toLowerCase()));
  };
  return (
    <div className={`w-20 text-center rounded-lg ${color}`} onClick={handleClick}>{colorName}</div>
  );
}
export default Colors;
