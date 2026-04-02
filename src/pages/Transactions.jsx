import { useState } from "react";
import { transactions as data } from "../data/mockData";
import TransactionsTable from "../components/table/TransactionsTable";
import { TextField, MenuItem } from "@mui/material";

export default function Transactions() {
  const [search, setSearch] = useState("");
  const [typeFilter, setTypeFilter] = useState("");

  const filteredData = data.filter((txn) => {
    return (
      txn.category.toLowerCase().includes(search.toLowerCase()) &&
      (typeFilter ? txn.type === typeFilter : true)
    );
  });

  return (
    <div className="p-4 space-y-4">
      <h1 className="text-xl font-bold">Transactions</h1>

      {/* Filters */}
      <div className="flex gap-4">
        <TextField
          label="Search"
          size="small"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <TextField
          select
          label="Filter"
          size="small"
          value={typeFilter}
          onChange={(e) => setTypeFilter(e.target.value)}
        >
          <MenuItem value="">All</MenuItem>
          <MenuItem value="income">Income</MenuItem>
          <MenuItem value="expense">Expense</MenuItem>
        </TextField>
      </div>

      <TransactionsTable data={filteredData} />
    </div>
  );
}