import './App.css'
import './index.css'
import Sidebar from "./components/layout/Sidebar";
import Topbar from "./components/layout/Topbar";

function App() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 bg-gray-100 min-h-screen">
        <Topbar />
        <div className="p-4">Dashboard Content</div>
      </div>
    </div>
  );
}

export default App;
