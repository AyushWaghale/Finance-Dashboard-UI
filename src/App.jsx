import './App.css'
import './index.css'

import Sidebar from "./components/layout/Sidebar";
import Topbar from "./components/layout/Topbar";
import SummaryCard from './components/cards/SummaryCard';
import Transactions from './pages/Transactions';

function App() {
  return (
    <div className="flex">
      
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 bg-gray-100 min-h-screen">
        
        {/* Topbar */}
        <Topbar />

        {/* Page Content */}
        <div className="p-4 space-y-6">

          {/* Dashboard Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <SummaryCard title="Balance" amount="50000" />
            <SummaryCard title="Income" amount="70000" />
            <SummaryCard title="Expenses" amount="20000" />
          </div>

          {/* Transactions Section */}
          <Transactions />

        </div>

      </div>
    </div>
  );
}

export default App;