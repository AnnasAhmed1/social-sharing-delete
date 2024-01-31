import logo from "./logo.svg";
import "./App.css";
import { Helmet } from "react-helmet";
function App() {
  return (
    <div className="App">
      <Helmet>
        <title>{"pageTitle"}</title>
        <meta name="description" content={"pageDescription"} />
        <meta
          property="og:image"
          content={
            "https://media.gettyimages.com/id/184944186/photo/quaid-e-azam.jpg?s=1024x1024&w=gi&k=20&c=ALjpB2eG-5uf0-UFRvtpqjgYisdHvwWlM-Z_KGqA-3w="
          }
        />
        <meta property="og:description" content="new_description" />
        {/* Add more meta tags as needed */}
      </Helmet>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
