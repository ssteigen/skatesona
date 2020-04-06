import React, { useState } from "react";

import SkateSVG from "./skate.svg";

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
      <h1 className="text-3xl font-bold">Skatesona</h1>
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
    <div class="flex mb-4">
      <div class="w-1/2">
        <Skate
          bootColor={bootColor}
          lacesColor={lacesColor}
          wheelsColor={wheelsColor}
          toestopColor={toestopColor}
          eyeletsColor={eyeletsColor}
          soleColor={soleColor}
          plateColor={plateColor}
        />
      </div>
      <div class="w-1/2">Testing</div>
    </div>
  );
}

function SkateWrapper() {}

function Skate({
  bootColor,
  lacesColor,
  wheelsColor,
  toestopColor,
  eyeletsColor,
  soleColor,
  plateColor,
}) {
  return <img src={SkateSVG} className="skate" />;
}

function Footer() {
  return <div />;
}

function App() {
  return (
    <Layout>
      <Card>
        <Header />
        <Builder />
        <Footer />
      </Card>
    </Layout>
  );
}

export default App;
