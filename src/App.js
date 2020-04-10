import React, { useState, useMemo } from "react";

import SkateSVG from "./skate.svg";

import options from "./options";

import styled from "styled-components";

function Layout({ children }) {
  return (
    <div className="flex flex-auto h-full items-center justify-center bg-gray-100 p-6">
      <div className="w-full h-full">{children}</div>
    </div>
  );
}

function Card({ children, className = "" }) {
  return (
    <div
      className={`flex flex-auto h-full flex-col bg-white shadow rounded-lg p-6 ${className}`}
    >
      {children}
    </div>
  );
}

function Header() {
  return (
    <div>
      <h1 className="text-3xl mb-4">Skatesona</h1>
    </div>
  );
}

function ColorSwatch({ title, color, onBootColorChange }) {
  return (
    <div
      className="p-4 mr-1 rounded inline-block"
      title={title}
      style={{
        background: color,
      }}
      onClick={() => onBootColorChange(color)}
    ></div>
  );
}

function SwatchGroup({ groupName, colors, onBootColorChange }) {
  return (
    <>
      <div>{groupName}</div>
      {Object.entries(colors).map(([colorName, colorValue]) => (
        <ColorSwatch
          key={`${groupName}-${colorName}`}
          title={colorName}
          color={colorValue}
          onBootColorChange={onBootColorChange}
        />
      ))}
    </>
  );
}

function PartPanel({ partName, group, onBootColorChange }) {
  return (
    <>
      <div>{partName}</div>
      {Object.entries(group).map(([groupName, colors]) => (
        <SwatchGroup
          key={`${partName}-${groupName}`}
          groupName={groupName}
          colors={colors}
          onBootColorChange={onBootColorChange}
        />
      ))}
    </>
  );
}

function ColorPicker({ options, onBootColorChange }) {
  return (
    <div className="p-4">
      {Object.entries(options).map(([partName, group]) => (
        <PartPanel
          key={partName}
          partName={partName}
          group={group}
          onBootColorChange={onBootColorChange}
        />
      ))}
    </div>
  );
}

function Builder() {
  const [bootColor, setBootColor] = useState("");
  const [bootColorLocked, setBootColorLocked] = useState(false);

  const [lacesColor, setLacesColor] = useState("");
  const [lacesColorLocked, setLacesColorLocked] = useState(false);

  const [wheelsColor, setWheelsColor] = useState("");
  const [wheelsColorLocked, setWheelsColorLocked] = useState(false);

  const [toestopColor, setToestopColor] = useState("");
  const [toestopColorLocked, setToestopColorLocked] = useState(false);

  const [eyeletsColor, setEyeletsColor] = useState("");
  const [eyeletsColorLocked, setEyeletsColorLocked] = useState(false);

  const [soleColor, setSoleColor] = useState("");
  const [soleColorLocked, setSoleColorLocked] = useState(false);

  const [plateColor, setPlateColor] = useState("");
  const [plateColorLocked, setPlateColorLocked] = useState(false);

  return (
    <div className="flex mb-4">
      <div className="w-1/2">
        <StyledSkate
          bootColor={bootColor}
          lacesColor={lacesColor}
          wheelsColor={wheelsColor}
          toestopColor={toestopColor}
          eyeletsColor={eyeletsColor}
          soleColor={soleColor}
          plateColor={plateColor}
        />
      </div>
      <div className="w-1/2">
        <ColorPicker options={options} onBootColorChange={setBootColor} />
      </div>
    </div>
  );
}

async function getSvgContent(svg) {
  const response = await fetch(svg);
  const svgContent = await response.text();

  return svgContent;
}

function Skate({ className }) {
  const [svgContent, setSvgContent] = useState();

  // Only load the SVG once.
  useMemo(() => {
    getSvgContent(SkateSVG).then(setSvgContent);
  }, []);

  return (
    <div
      className={className}
      dangerouslySetInnerHTML={{ __html: svgContent }}
    />
  );
}

const StyledSkate = styled(Skate)`
  .boot {
    fill: ${(props) => props.bootColor || "pink"};
  }
  .lace {
    fill: ${(props) => props.lacesColor || "violet"};
  }
  .wheel {
    fill: ${(props) => props.wheelColor || "violet"};
  }
  .toestop {
    fill: ${(props) => props.toestopColor || "violet"};
  }
  .eyelet,
  .hook {
    fill: ${(props) => props.eyeletsColor || "silver"};
  }
  .sole {
    fill: ${(props) => props.soleColor || "black"};
  }
  .plate {
    fill: ${(props) => props.plateColor || "silver"};
  }
  .bearing {
    fill: black;
  }
  .axle,
  .hardware {
    fill: gray;
  }
`;

function Footer() {
  return <div />;
}

function App() {
  return (
    <Layout>
      <Card>
        <Header />
        <hr className="py-4" />
        <Builder />
        <hr className="py-4" />
        <Footer />
      </Card>
    </Layout>
  );
}

export default App;
