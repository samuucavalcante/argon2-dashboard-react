import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  CartesianAxis,
} from "recharts";

type Data = {
  name: string;
  uv: number;
  pv: number;
  amt: number;
  mon: string;
};

const data: Data[] = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
    mon: "Jan",
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
    mon: "Fev",
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
    mon: "Mar",
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
    mon: "Abr",
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
    mon: "Mai",
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
    mon: "Jun",
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
    mon: "Jul",
  },
  {
    name: "Page H",
    uv: 3490,
    pv: 4300,
    amt: 2100,
    mon: "Ago",
  },
  {
    name: "Page I",
    uv: 3490,
    pv: 4300,
    amt: 2100,
    mon: "Set",
  },
  {
    name: "Page J",
    uv: 3490,
    pv: 4300,
    amt: 2100,
    mon: "Out",
  },
  {
    name: "Page J",
    uv: 3490,
    pv: 4300,
    amt: 2100,
    mon: "Nov",
  },
  {
    name: "Page K",
    uv: 3490,
    pv: 4300,
    amt: 2100,
    mon: "Dez",
  },
];

export const Graph = () => {
  return (
    <ResponsiveContainer width={"100%"} height={300}>
      <LineChart data={data}>
        <CartesianAxis x={10} strokeDasharray={"1"} />
        <XAxis dataKey={"mon"} />
        <Line type="natural" dataKey="pv" stroke="#8884d8" strokeWidth={3} />
      </LineChart>
    </ResponsiveContainer>
  );
};
