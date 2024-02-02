import React from "react";
import HelmetMetaData from "./helmet";
import { Helmet } from "react-helmet";

const Page2 = () => {
  return (
    <div>
      <Helmet>
        <title>My Title</title>
        <meta
          property="og:image"
          content="https://media.gettyimages.com/id/184944186/photo/quaid-e-azam.jpg?s=612x612&w=0&k=20&c=7mRHDKfBWbpmiTto_w_oMm4EeboU9tEDO_JXke01P5I="
        />
      </Helmet>
      Page2
    </div>
  );
};

export default Page2;
