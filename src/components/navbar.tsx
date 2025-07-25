'use client';
import { FaTachometerAlt, FaCamera, FaMapMarkerAlt, FaVideo, FaUsers } from 'react-icons/fa';

export default function Navbar() {
  return (
    <header className="w-full bg-[#0f1f4b] text-white flex items-center justify-between px-8 py-4 shadow-md">
      <div className="text-2xl font-bold">SecureSight</div>

      <nav className="flex gap-8 items-center text-white text-base font-medium">
        <NavItem icon={<FaTachometerAlt />} label="Dashboard" />
        <NavItem icon={<FaCamera />} label="Cameras" />
        <NavItem icon={<FaMapMarkerAlt />} label="Scenes" />
        <NavItem icon={<FaVideo />} label="Incidents" />
        <NavItem icon={<FaUsers />} label="Users" />
      </nav>
    </header>
  );
}

function NavItem({ icon, label }: { icon: JSX.Element; label: string }) {
  return (
    <div className="flex items-center gap-2 hover:text-yellow-400 cursor-pointer transition">
      {icon}
      <span>{label}</span>
    </div>
  );
}
