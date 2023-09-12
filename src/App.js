import { BrowserRouter } from "react-router-dom";
import Navigation from "./navigation/Navigation";
import { Home } from "./screens";

function App() {
  return (
    <BrowserRouter>
      {/* <Navigation /> */}
      <Home />
    </BrowserRouter>
  );
}

export default App;
