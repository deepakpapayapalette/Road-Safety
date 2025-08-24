import React from "react";
import { PieChart, Pie, Cell } from "recharts";

const DriveSafeRating2 = ({ rank, lastYearRank }) => {
  const COLORS = ["#22c55e", "#facc15", "#ef4444"]; // green, yellow, red
  const totalRanks = 20; // scale
  const percentage = rank / totalRanks;

  const data = [
    { value: percentage * 100 },
    { value: (1 - percentage) * 100 },
  ];

  const change = lastYearRank - rank;
  const changePercent = ((change / lastYearRank) * 100).toFixed(1);

  return (
    <div className=" ">
      <h2 className="text-lg font-semibold text-gray-900 ">
        Drive Safe Rating
      </h2>

      {/* Gauge Chart */}
      <div className="flex justify-center -mt-2">
        <PieChart width={220} height={140}>
          <Pie
            dataKey="value"
            startAngle={180}
            endAngle={0}
            data={[
              { value: 5, fill: COLORS[0] },
              { value: 10, fill: COLORS[1] },
              { value: 15, fill: COLORS[2] },
              { value: 30, fill: "#e5e7eb" }, // empty part
            ]}
            cx="50%"
            cy="100%"
            innerRadius={60}
            outerRadius={80}
            stroke="none"
          >
            {data.map((entry, index) => (
               
              <Cell key={`cell-${index}`} fill={entry.fill} />
            ))}
          </Pie>
        </PieChart>
      </div>

      {/* Rank */}
      <p className="text-center text-2xl font-semibold text-[#8ea500] -mt-8">
        Rank {rank}
      </p>

      {/* Change Section */}
      <p className="text-center text-sm text-gray-600 mt-2">
        Changes from last year{" "}
        <span className="font-bold text-indigo-600">
          {change > 0 ? "+" : ""}
          {changePercent}%
        </span>
      </p>
      <p className="text-center text-xs text-gray-400 mb-0">
        Last year ranking {lastYearRank}
      </p>
    </div>
  );
};

export default DriveSafeRating2;
