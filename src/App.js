import React, { useState, useMemo } from "react";

import SkateSVG from "./skate.svg";

import options from "./options";

import styled from "styled-components";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";

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

function PartPanel({ partName, group, onBootColorChange, onBootColorLock }) {
  return (
    <>
      <div className="bg-gray-300 rounded p-2">
        {Object.entries(group).map(([groupName, colors]) => (
          <SwatchGroup
            key={`${partName}-${groupName}`}
            groupName={groupName}
            colors={colors}
            onBootColorChange={onBootColorChange}
          />
        ))}
      </div>
    </>
  );
}

function ColorPicker({ options, onBootColorChange }) {
  const [activeTab, setActiveTab] = useState("Boot");

  const partNames = Object.keys(options);

  return (
    <div className="bg-gray-200">
      {partNames.map((partName) => (
        <div
          key={partName}
          className="py-2 px-4 bg-gray-400 rounded inline-block"
          onClick={() => setActiveTab(partName)}
        >
          {partName}
        </div>
      ))}

      <PartPanel
        key={activeTab}
        partName={activeTab}
        group={options[activeTab]}
        onBootColorChange={onBootColorChange}
      />
    </div>
  );
}

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(this.setBootColor, dispatch);

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
        <ConnectedStyledSkate />
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
    fill: ${(props) => props.bootColor};
  }
  .lace {
    fill: ${(props) => props.lacesColor};
  }
  .wheel {
    fill: ${(props) => props.wheelsColor};
  }
  .toestop {
    fill: ${(props) => props.toestopColor};
  }
  .eyelet,
  .hook {
    fill: ${(props) => props.eyeletsColor};
  }
  .sole {
    fill: ${(props) => props.soleColor};
  }
  .plate {
    fill: ${(props) => props.plateColor};
  }
  .bearing {
    fill: black;
  }
  .axle,
  .hardware {
    fill: gray;
  }
`;

const mapStateToProps = (state) => state;

const ConnectedStyledSkate = connect(mapStateToProps, null)(StyledSkate);

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
