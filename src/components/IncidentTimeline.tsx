'use client';

import { useRef, useState, useEffect } from 'react';

const incidentMarkers = [
  { time: 52500, label: "Unauthorized Access" }, // 14:35
  { time: 54300, label: "Suspicious Movement" }, // 15:05
];

export default function IncidentTimeline() {
  const svgRef = useRef<SVGSVGElement>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [scrubberX, setScrubberX] = useState(0); // in percentage
  const [dragging, setDragging] = useState(false);

  const totalSeconds = 86400; // 24 hours in seconds

  // Attach video reference dynamically
  useEffect(() => {
    videoRef.current = document.querySelector('video');
  }, []);

  const formatTime = (seconds: number) => {
    const h = String(Math.floor(seconds / 3600)).padStart(2, '0');
    const m = String(Math.floor((seconds % 3600) / 60)).padStart(2, '0');
    return `${h}:${m}`;
  };

  const handleMouseDown = () => setDragging(true);
  const handleMouseUp = () => setDragging(false);

  const handleMouseMove = (e: React.MouseEvent<SVGSVGElement>) => {
    if (!dragging || !svgRef.current) return;

    const rect = svgRef.current.getBoundingClientRect();
    const x = Math.min(Math.max(e.clientX - rect.left, 0), rect.width);
    const percent = (x / rect.width) * 100;
    setScrubberX(percent);

    const scrubTime = (percent / 100) * totalSeconds;
    if (videoRef.current) {
      videoRef.current.currentTime = scrubTime;
    }
  };

  return (
    <div className="mt-6 bg-white p-3 rounded shadow">
      <h2 className="font-semibold text-lg mb-2">Incident Timeline</h2>

      <svg
        ref={svgRef}
        width="100%"
        height="60"
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        className="cursor-pointer bg-gray-800 rounded"
      >
        {/* Ruler line */}
        <line
          x1="0"
          y1="30"
          x2="100%"
          y2="30"
          stroke="black"
          strokeWidth="2"
        />

        {/* Hour tick marks */}
        {[...Array(25)].map((_, hour) => {
          const x = (hour / 24) * 100;
          return (
            <g key={hour}>
              <line
                x1={`${x}%`}
                y1="20"
                x2={`${x}%`}
                y2="40"
                stroke="#ffffff"
                strokeWidth="1"
              />
              <text
                x={`${x}%`}
                y="50"
                fill="#ffffff"
                fontSize="10"
                textAnchor="middle"
              >
                {String(hour).padStart(2, '0')}:00
              </text>
            </g>
          );
        })}

        {/* Incident markers */}
        {incidentMarkers.map((incident, i) => {
          const x = (incident.time / totalSeconds) * 100;
          return (
            <circle
              key={i}
              cx={`${x}%`}
              cy="30"
              r="5"
              fill="yellow"
              stroke="black"
              strokeWidth="1"
            />
          );
        })}

        {/* Scrubber (draggable) */}
        <line
          x1={`${scrubberX}%`}
          y1="0"
          x2={`${scrubberX}%`}
          y2="60"
          stroke="red"
          strokeWidth="2"
        />
      </svg>
    </div>
  );
}
