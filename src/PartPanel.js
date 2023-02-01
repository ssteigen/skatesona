import * as React from "react";

import SwatchGroup from "./SwatchGroup";

const PartPanel = ({ partName, group, setPartColor, togglePartLocked }) => {
  return (
    <>
      <div className="">
        {Object.entries(group).map(([groupName, colors]) => (
          <SwatchGroup
            key={`${partName}-${groupName}`}
            groupName={groupName}
            colors={colors}
            partName={partName}
            setPartColor={setPartColor}
            togglePartLocked={togglePartLocked}
          />
        ))}
      </div>
    </>
  );
};

export default PartPanel;
