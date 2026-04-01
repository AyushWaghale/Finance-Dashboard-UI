import { Home, Receipt, Insights } from "@mui/icons-material";

export default function Sidebar() {
  return (
    <div className="w-64 h-screen bg-white shadow-md p-4">
      <h1 className="text-xl font-bold mb-6">Finance</h1>

      <div className="space-y-4">
        <div className="flex items-center gap-2 cursor-pointer">
          <Home /> Dashboard
        </div>
        <div className="flex items-center gap-2 cursor-pointer">
          <Receipt /> Transactions
        </div>
        <div className="flex items-center gap-2 cursor-pointer">
          <Insights /> Insights
        </div>
      </div>
    </div>
  );
}