// components/IncidentList.tsx
const incidents = [
  {
    id: 1,
    title: "Unauthorized Access",
    camera: "Shop Floor Camera A",
    time: "14:35 – 14:37 on 7-Jul-2025",
    image: "/img/unauthorized.jpg", 
  },
  {
    id: 2,
    title: "Suspicious Movement",
    camera: "Warehouse Camera B",
    time: "15:05 – 15:10 on 7-Jul-2025",
    image: "/img/gun-threat.jpg",
  },
];


export default function IncidentList() {
  return (
    <div className="space-y-4">
      {incidents.map((incident) => (
        <div
          key={incident.id}
          className="bg-[#2d437e] p-3 rounded shadow text-white flex gap-4 items-start"
        >
          {/* Left: Image */}
          <img
            src={incident.image}
            alt={incident.title}
            className="w-24 h-24 object-cover rounded"
          />

          {/* Right: Details */}
          <div className="flex-1">
            <p className="font-semibold text-sm">{incident.title}</p>
            <p className="text-xs">Camera: {incident.camera}</p>
            <p className="text-xs">Time: {incident.time}</p>
            <button className="mt-2 px-3 py-1 text-xs bg-yellow-500 text-black rounded hover:bg-yellow-600">
              Resolve
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
