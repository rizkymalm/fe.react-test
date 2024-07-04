import React from "react";
import DropdownSearch from "../components/DropdownSearch";

const HomePage = () => {
  return (
    <div>
      <DropdownSearch multiple={true} searchable={true} theme="dark" />
    </div>
  );
};

export default HomePage;
