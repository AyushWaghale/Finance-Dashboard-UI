import { TextField } from "@mui/material";

export default function Topbar() {
  return (
    <div className="w-full p-4 bg-white shadow flex justify-between">
      <TextField size="small" placeholder="Search..." />
      <div>Profile</div>
    </div>
  );
}