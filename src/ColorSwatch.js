import * as React from "react";

const ColorSwatch = ({
  title,
  color,
  partName,
  setPartColor,
  togglePartLocked,
}) => {
  return (
    <div class="tooltip" data-tip={title}>
      <div
        className="p-4 mr-1 rounded inline-block"
        title={title}
        style={{
          background: color,
        }}
        onClick={() => setPartColor({ partName, color })}
      />
    </div>
  );
};

export default ColorSwatch;
