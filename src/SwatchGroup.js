import * as React from "react";

import ColorSwatch from "./ColorSwatch";

const SwatchGroup = ({
  groupName,
  colors,
  partName,
  setPartColor,
  togglePartLocked,
}) => {
  return (
    <>
      <div>{groupName}</div>
      {Object.entries(colors).map(([colorName, colorValue]) => (
        <ColorSwatch
          key={`${groupName}-${colorName}`}
          title={colorName}
          color={colorValue}
          partName={partName}
          setPartColor={setPartColor}
          togglePartLocked={togglePartLocked}
        />
      ))}
    </>
  );
};

export default SwatchGroup;
