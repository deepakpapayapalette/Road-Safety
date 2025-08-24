import { useState } from "react";

export default function LiveFleetTracking({ data }) {
  const [filters, setFilters] = useState({
    sos: false,
    overspeeding: false,
    fatigue: false,
    distracted: false,
  });

  const toggleFilter = (key) => {
    setFilters((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  // Apply filters (demo: only filters by status if checked)
  const filteredData = data.filter((row) => {
    if (filters.overspeeding && row.status !== "Over-Speeding") return false;
    if (filters.sos && row.status !== "SOS") return false;
    if (filters.fatigue && row.status !== "Fatigue") return false;
    if (filters.distracted && row.status !== "Distracted Driving") return false;
    return true;
  });

  return (
    <div className="LiveFleetTracking space">
      {/* Title + Filters */}
      <div>
        <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">Live Fleet Tracking</h2>
              <div className="flex items-center gap-4 text-sm text-gray-700">
                <label className="flex items-center font-semibold gap-1">
                  <input 
                  className="w-[20px] h-[20px]"
                    type="checkbox"
                    checked={filters.sos}
                    onChange={() => toggleFilter("sos")}
                  />
                  SOS
                </label>
                <label className="flex items-center font-semibold gap-1">
                  <input 
                  className="w-[20px] h-[20px]"
                    type="checkbox"
                    checked={filters.overspeeding}
                    onChange={() => toggleFilter("overspeeding")}
                  />
                  Over-speeding
                </label>
                <label className="flex items-center font-semibold gap-1">
                  <input 
                  className="w-[20px] h-[20px]"
                    type="checkbox"
                    checked={filters.fatigue}
                    onChange={() => toggleFilter("fatigue")}
                  />
                  Fatigue
                </label>
                <label className="flex items-center font-semibold gap-1">
                  <input 
                  className="w-[20px] h-[20px]"
                    type="checkbox"
                    checked={filters.distracted}
                    onChange={() => toggleFilter("distracted")}
                  />
                  Distracted Driving
                </label>
              </div>
            </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl border border-gray-800 p-3">
      
   
      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className=" text-white text-left">
              <th className="p-3" style={{borderRadius:'10px 0 0 0', backgroundColor:'#525fe1'}}>S.No.</th>
              <th className="p-3" style={{ backgroundColor:'#525fe1'}}>Vehicle Number</th>
              <th className="p-3" style={{ backgroundColor:'#525fe1'}}>RO/ Depot</th>
              <th className="p-3" style={{ backgroundColor:'#525fe1'}}>Route</th>
              <th className="p-3" style={{ backgroundColor:'#525fe1'}}>Current Location</th>
              <th className="p-3" style={{ backgroundColor:'#525fe1'}}>Status</th>
              <th className="p-3" style={{ backgroundColor:'#525fe1'}}>Live Feed</th>
              <th className="p-3" style={{ backgroundColor:'#525fe1'}}>Action</th>
              <th className="p-3" style={{borderRadius:'0 10px 0 0', backgroundColor:'#525fe1'}}>Driver</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((row, i) => (
              <tr
                key={i}
                className={i % 2 === 0 ? "bg-gray-100" : "bg-white"}
              >
                <td className="p-3">{i + 1}</td>
                <td className="p-3">{row.vehicleNumber}</td>
                <td className="p-3">{row.depot}</td>
                <td className="p-3">{row.route}</td>
                <td className="p-3">{row.currentLocation}</td>
                <td className="p-3 text-red-600 font-medium">{row.status}</td>
                <td className="p-3">
                  <a
                    href={row.liveFeed}
                    className="text-blue-600 underline"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Video Link
                  </a>
                </td>
                <td className="p-3">
                  <button className="bg-indigo-600 text-white px-3 py-1 rounded-lg text-xs">
                    Call Now
                  </button>
                </td>
                <td className="p-3">{row.driver}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
         </div>
    </div>
  );
}
