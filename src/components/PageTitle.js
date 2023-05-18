import React from "react";
import { Helmet } from "react-helmet-async";

const PageTitle = ({ title }) => {
  return (
    <Helmet>
      {/* <title>{title} - GONERA DESIGN by Jacek Gonera</title> */}
      <title>GONERA DESIGN by Jacek Gonera</title>
    </Helmet>
  );
};

export default PageTitle;
