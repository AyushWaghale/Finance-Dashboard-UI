import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

const data = [
  { name: "Jan", balance: 4000 },
  { name: "Feb", balance: 6000 },
];

export default function Chart() {
  return (
    <LineChart width={500} height={300} data={data}>
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Line type="monotone" dataKey="balance" stroke="#8884d8" />
    </LineChart>
  );
}