import { Card, CardContent } from "@mui/material";

export default function SummaryCard({ title, amount }) {
  return (
    <Card className="rounded-2xl shadow">
      <CardContent>
        <h2 className="text-gray-500">{title}</h2>
        <p className="text-2xl font-bold">₹{amount}</p>
      </CardContent>
    </Card>
  );
}