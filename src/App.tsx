import "./App.css";
import "./styles.css";
import Sidebar from "./components/Sidebar";
import MainContent from "./components/MainContent";

function App() {
  return (
    <div className="main-container h-screen w-screen flex">
      <Sidebar />
      <MainContent />
    </div>
  );
}

export default App;
