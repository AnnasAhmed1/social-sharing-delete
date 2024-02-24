// App.js
import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
const openApp = () => {
  const appPackageName = "com.whatsapp";
  // Attempt to open the app
  window.location.href = `intent://${appPackageName}/#Intent;package=${appPackageName};scheme=http;end;`;

  // Redirect to Play Store if the app is not installed
  setTimeout(() => {
    window.open(
      `https://play.google.com/store/apps/details?id=${appPackageName}`,
      "_blank"
    );
  }, 3000); // Redirect after 3 seconds, adjust as needed
};
const App = () => (
  <HelmetProvider canUseDOM>
    <Helmet title="new page" async prioritizeSeoTags>
      <title>Page Title</title>
      <meta
        property="og:image"
        content="https://media.gettyimages.com/id/184944186/photo/quaid-e-azam.jpg?s=612x612&w=0&k=20&c=7mRHDKfBWbpmiTto_w_oMm4EeboU9tEDO_JXke01P5I="
      />
    </Helmet>
    <h1>Hello World</h1>
    <button onClick={openApp}>link</button>

    {/* Your other application components go here */}
  </HelmetProvider>
);

export default App;
