import Navbar from "./Components/Navbar";
import { GlobalStyles } from "./Components/Styles/Global";
import Routes from "./Pages/Routes";


function App() {
  return (
  <>
    <GlobalStyles />
      <div className="App">
        <Navbar />
        <Routes />
      </div>
  </>
  );
}

export default App;
