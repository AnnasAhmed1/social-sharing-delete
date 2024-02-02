// App.js
import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";

const App = () => (
  <HelmetProvider canUseDOM>
    <Helmet prioritizeSeoTags>
      <title>Page Title</title>
      <meta
        property="og:image"
        content="https://media.gettyimages.com/id/184944186/photo/quaid-e-azam.jpg?s=612x612&w=0&k=20&c=7mRHDKfBWbpmiTto_w_oMm4EeboU9tEDO_JXke01P5I="
      />
    </Helmet>
    <h1>Hello World</h1>
    {/* Your other application components go here */}
  </HelmetProvider>
);

export default App;
