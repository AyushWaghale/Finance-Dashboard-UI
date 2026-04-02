import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";

export default function TransactionsTable({ data }) {
  return (
    <div className="bg-white rounded-2xl shadow p-4">
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Category</TableCell>
            <TableCell>Amount</TableCell>
            <TableCell>Type</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {data.length === 0 ? (
            <TableRow>
              <TableCell colSpan={4} align="center">
                No transactions found
              </TableCell>
            </TableRow>
          ) : (
            data.map((txn) => (
              <TableRow key={txn.id}>
                <TableCell>{txn.date}</TableCell>
                <TableCell>{txn.category}</TableCell>
                <TableCell>₹{txn.amount}</TableCell>
                <TableCell
                  className={
                    txn.type === "income"
                      ? "text-green-600"
                      : "text-red-600"
                  }
                >
                  {txn.type}
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </div>
  );
}