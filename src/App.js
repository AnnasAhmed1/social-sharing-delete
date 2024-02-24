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
const checkWhatsApp = () => {
  const userAgent = navigator.userAgent || navigator.vendor || window.opera;

  // Check if the user is using a mobile device
  if (/android/i.test(userAgent) || /iPad|iPhone|iPod/.test(userAgent)) {
    // Check if WhatsApp is supported by the browser
    if (/WhatsApp/.test(userAgent)) {
      alert("WhatsApp is installed on your device!");
    } else {
      alert("WhatsApp is not installed on your device.");
      // You can also prompt the user to open WhatsApp using a deep link
      // window.location.href = 'whatsapp://';
    }
  } else {
    alert("This feature is available only on mobile devices.");
  }
};

const App = () => (
  <div>
    <h1>Hello World</h1>
    <button onClick={openApp}>link</button>
    <button onClick={checkWhatsApp}>link</button>
  </div>
);

export default App;
