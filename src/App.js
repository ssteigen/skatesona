import * as React from "react";

import options from "./options";

import Header from "./Header";
import Footer from "./Footer";
import Card from "./Card";

import Builder from "./Builder";

function App() {
  return (
    <div className="flex flex-col h-screen bg-base-300">
      <Header className="bg-neutral text-neutral-content" />
      <div className="flex-auto">
        <Card className="flex-auto">
          <Builder options={options} />
        </Card>
      </div>
      <Footer className="bg-neutral text-neutral-content" />
    </div>
  );
}

export default App;
