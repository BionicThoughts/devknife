import "./App.css";
import "./styles.css";
import Sidebar from "./components/Sidebar";
import MainContent from "./components/MainContent";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="main-container h-screen w-screen flex">
        <Sidebar />
        <MainContent />
      </div>
    </BrowserRouter>
  );
}

export default App;
