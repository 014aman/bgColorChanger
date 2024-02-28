import React from "react";
import PropTypes from "prop-types";

function Colors({ colorName, color, setColor }) {
  const handleClick = () => {
    setColor(colorName.toLowerCase());
  };
  return (
    <div
      className={`w-20 text-center rounded-lg ${color}`}
      onClick={handleClick}
    >
      {colorName}
    </div>
  );
}

Colors.propTypes = {
  colorName: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  setColor: PropTypes.func.isRequired,
};

export default Colors;
