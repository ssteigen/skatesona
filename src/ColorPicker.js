import * as React from "react";

import { useState } from "react";

import PartPanel from "./PartPanel";

const ColorPicker = ({ options, setPartColor, togglePartLocked }) => {
  const [activeTab, setActiveTab] = useState("Boot");

  const partNames = Object.keys(options);

  return (
    <>
      <div className="tabs">
        {partNames.map((partName) => (
          <a
            key={partName}
            className={`tab tab-lifted ${
              partName === activeTab && "tab-active"
            }`}
            onClick={() => setActiveTab(partName)}
          >
            {partName}
          </a>
        ))}
      </div>

      <PartPanel
        key={activeTab}
        partName={activeTab}
        group={options[activeTab]}
        setPartColor={setPartColor}
        togglePartLocked={togglePartLocked}
      />
    </>
  );
};

export default ColorPicker;
