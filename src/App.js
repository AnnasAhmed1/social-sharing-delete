// src/App.js
import React, { useEffect } from "react";

const App = () => {
  useEffect(() => {
    // Update og:image meta tag dynamically
    const ogImageTag = document.querySelector('meta[property="og:image"]');
    console.log(ogImageTag, "image_tag");
    if (ogImageTag) {
      ogImageTag.content =
        "https://media.gettyimages.com/id/184944186/photo/quaid-e-azam.jpg?s=612x612&w=0&k=20&c=7mRHDKfBWbpmiTto_w_oMm4EeboU9tEDO_JXke01P5I=";
    }
    const ogDescTag = document.querySelector('meta[property="og:description"]');
    console.log(ogDescTag, "desc_tag");
    if (ogDescTag) {
      ogDescTag.content = "Mazaar e quiad";
    }
  }, []);

  return (
    <div>
      {/* Your component content */}
      <h1>Hello, React!</h1>
    </div>
  );
};

export default App;
