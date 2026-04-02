import './App.css'
import './index.css'
import Sidebar from "./components/layout/Sidebar";
import Topbar from "./components/layout/Topbar";
import SummaryCard from './components/cards/SummaryCard';

function App() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 bg-gray-100 min-h-screen">
        <Topbar />
        <div className="p-4">Dashboard Content</div>
      </div>

      <div className="p-4 grid grid-cols-1 md:grid-cols-3 gap-4">
  <SummaryCard title="Balance" amount="50000" />
  <SummaryCard title="Income" amount="70000" />
  <SummaryCard title="Expenses" amount="20000" />
</div>
    </div>
  );
}

export default App;
