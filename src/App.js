import { BrowserRouter } from "react-router-dom";
import Navigation from "./navigation/Navigation";
import { Home } from "./screens";

function App() {
  return <Home />;
}

export default App;

/**
 *  // <BrowserRouter>
      <Navigation /> 
      <Home />
    // </BrowserRouter>
 */
