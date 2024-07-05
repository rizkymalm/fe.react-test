import React from "react";
import DropdownSearch from "../components/DropdownSearch";

const HomePage = () => {
  return (
    <div>
      <DropdownSearch multiple={true} searchable={true} theme="light" />
    </div>
  );
};

export default HomePage;
