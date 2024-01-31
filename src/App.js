import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Page1 from "./page1";
import Page2 from "./page2";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Page1 />,
  },
  {
    path: "/page2",
    element: <Page2 />,
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
