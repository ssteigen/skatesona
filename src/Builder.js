import * as React from "react";
import { useState } from "react";
import ColorPicker from "./ColorPicker";

import ConnectedStyledSkate from "./ConnectedStyledSkate";

const Builder = ({ options }) => {
  const [bootColor, setBootColor] = useState("");
  const [bootLocked, setBootLocked] = useState(false);

  const [lacesColor, setLacesColor] = useState("");
  const [lacesLocked, setLacesLocked] = useState(false);

  const [wheelsColor, setWheelsColor] = useState("");
  const [wheelsLocked, setWheelsLocked] = useState(false);

  const [toestopColor, setToestopColor] = useState("");
  const [toestopLocked, setToestopLocked] = useState(false);

  const [eyeletsColor, setEyeletsColor] = useState("");
  const [eyeletsLocked, setEyeletsLocked] = useState(false);

  const [soleColor, setSoleColor] = useState("");
  const [soleLocked, setSoleLocked] = useState(false);

  const [plateColor, setPlateColor] = useState("");
  const [plateLocked, setPlateLocked] = useState(false);

  const setPartColor = (partName, partColor) => {
    switch (partName) {
      case "boot":
        setBootColor(partColor);
        break;
      case "laces":
        setLacesColor(partColor);
        break;
      case "wheels":
        setWheelsColor(partColor);
        break;
      case "toestop":
        setToestopColor(partColor);
        break;
      case "eyelets":
        setEyeletsColor(partColor);
        break;
      case "sole":
        setSoleColor(partColor);
        break;
      case "plate":
        setPlateColor(partColor);
        break;
      default:
        return;
    }
  };

  const togglePartLocked = (partName) => {
    switch (partName) {
      case "boot":
        setBootLocked(!bootLocked);
        break;
      case "laces":
        setLacesLocked(!lacesLocked);
        break;
      case "wheels":
        setWheelsLocked(!wheelsLocked);
        break;
      case "toestop":
        setToestopLocked(!toestopLocked);
        break;
      case "eyelets":
        setEyeletsLocked(!eyeletsLocked);
        break;
      case "sole":
        setSoleLocked(!soleLocked);
        break;
      case "plate":
        setPlateLocked(!plateLocked);
        break;
      default:
        return;
    }
  };

  return (
    <div className="flex mb-4">
      <div className="w-1/2">
        <ConnectedStyledSkate
          bootColor
          lacesColor
          wheelsColor
          toestopColor
          eyeletsColor
          soleColor
          plateColor
        />
      </div>
      <div className="divider divider-horizontal" />
      <div className="w-1/2">
        <ColorPicker
          options={options}
          setPartColor={setPartColor}
          togglePartLocked={togglePartLocked}
        />
      </div>
    </div>
  );
};

export default Builder;
