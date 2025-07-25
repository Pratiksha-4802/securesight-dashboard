// components/IncidentPlayer.tsx
export default function IncidentPlayer() {
  return (
    <div className="bg-black w-full h-[400px] rounded shadow-lg flex items-center justify-center">
      <video controls className="w-full h-full object-contain rounded">
        <source src="../sample.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
