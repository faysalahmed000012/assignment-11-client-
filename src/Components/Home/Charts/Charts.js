import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const Charts = () => {
  const [chart, setChart] = useState([]);
  useEffect(() => {
    axios
      .get("https://boiling-springs-23607.herokuapp.com/chart")
      .then((response) => setChart(response.data));
  }, []);

  return (
    <>
      <h3 className="text-xl text-center text-purple-600 font-semibold my-6">
        {" "}
        Sells last 6 months
      </h3>
      <div style={{ width: "100%", height: "400px" }} className="my-3">
        <ResponsiveContainer>
          <AreaChart
            data={chart}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="money"
              stroke="#8884d8"
              fill="#8884d8"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </>
  );
};

export default Charts;
