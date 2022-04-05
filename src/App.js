import "./App.css";
import Navbar from "components/Navbar";
import Landing from "pages/Landing";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Host from "pages/Host";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/host/homes" element={<Host />} />
          <Route
            path="/"
            element={
              <>
                <Navbar />
                <Landing />
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
