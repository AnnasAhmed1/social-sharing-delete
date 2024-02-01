// src/App.js
import React, { useEffect } from "react";
import Home, { Head } from "./home";
import { Helmet } from "react-helmet";

const App = () => {
  return (
    <div>
      <Helmet>
        <meta charset="utf-8" />
        <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta
          property="og:image"
          content={
            "https://media.istockphoto.com/id/1455965102/photo/beautiful-sunrise-bursting-through-the-eucalyptus-trees-as-it-rises-over-a-mountain-beside-a.jpg?s=1024x1024&w=is&k=20&c=wYGK__qz9i8M7NfBvkNtkfbWNoiBxDLGi64PQjOo_wY="
          }
        />
        <meta
          name="description"
          content="Web site created using create-react-app"
        />
        <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
        <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />

        <meta property="og:quote" content="quote" />
        <meta property="og:description" content="initial_description" />

        <meta property="og:image:alt" content="Image Alt Text" />
        <meta property="og:type" content="post" />
        <meta property="og:locale" content="en_GB" />
        <title>page2</title>
        {/* <Head></Head> */}
      </Helmet>
      <Home></Home>
    </div>
  );
};

export default App;
