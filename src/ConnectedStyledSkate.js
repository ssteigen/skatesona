import * as React from "react";
import { useMemo, useState } from "react";
import SkateSVG from "./skate.svg";
import styled from "styled-components";
import { connect } from "react-redux";

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

export default ConnectedStyledSkate;
