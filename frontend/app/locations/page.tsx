import Header from "../components/header";
import Footer from "../components/footer";
import Map from "./components/map";
import CSS from "csstype";
import React from "react";

const titleStyle: CSS.Properties = {
  borderRadius: "5px",
  margin: "10px",
  padding: "5px",
}

export default function Locations() {
  return (
    <main>
      <Header />
      <div className="lg:max-w-lg lg:mx-auto ms-auto justify-center">
          <div className="text-center">
            <h1 className="block text-2xl font-semibold text-gray-800 border border-zinc-200 rounded" style={titleStyle}>ATM Locations </h1>
        </div>
        <div className="border-solid border-2 border-zinc-200 rounded">
        <Map />
      </div>
      </div>
      <Footer />
    </main>
  );
}