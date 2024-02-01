// src/App.js
import React, { useEffect } from "react";
import Home, { Head } from "./home";
import { Helmet } from "react-helmet";

const App = () => {
  return (
    <>
      <Helmet>
        <meta
          name="og:image"
          content={
            "https://media.istockphoto.com/id/1455965102/photo/beautiful-sunrise-bursting-through-the-eucalyptus-trees-as-it-rises-over-a-mountain-beside-a.jpg?s=1024x1024&w=is&k=20&c=wYGK__qz9i8M7NfBvkNtkfbWNoiBxDLGi64PQjOo_wY="
          }
        />
        {/* <Head></Head> */}
      </Helmet>
      <Home></Home>
    </>
  );
};

export default App;
