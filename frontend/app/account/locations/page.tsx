import React from "react";
import SideBar  from "../components/sidebar"
import Map from "@/app/locations/components/map";
import CSS from "csstype";

const titleStyle: CSS.Properties = {
  borderRadius: "5px",
  margin: "10px",
  padding: "5px",
  marginTop: "70px"
}

export default function Account() {
  return (
    <main>
        <SideBar />
        <div></div>
        <div className="lg:max-w-lg lg:mx-auto ms-auto justify-center">
          <div className="text-center">
            <h1 className="block text-2xl font-semibold text-gray-800 border border-zinc-200 rounded" style={titleStyle}>ATM Locations </h1>
        </div>
        <div className="border-solid border-2 border-zinc-200 rounded">
        <Map />
      </div>
      </div>
    </main>
  );
}