import Navbar from "@/components/navbar";
import IncidentPlayer from "@/components/IncidentPlayer";
import IncidentList from "@/components/IncidentList";
import IncidentTimeline from "@/components/IncidentTimeline";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />

      <main className="p-6 flex gap-6">
        <div className="flex-1 bg-white p-4 shadow rounded">
          <h2 className="font-semibold text-lg mb-2">Incident Player</h2>
          <IncidentPlayer />
        </div>

        <div className="w-[30%] bg-white p-4 shadow rounded overflow-y-auto">
          <h2 className="font-semibold text-lg mb-4">Unresolved Incidents</h2>
          <IncidentList />
        </div>
      </main>

      {/* Timeline under both sections */}
      <div className="px-6 mt-4">
        <IncidentTimeline />
      </div>
    </div>
  );
}
