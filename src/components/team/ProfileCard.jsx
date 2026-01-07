import { useState } from "react";
import { Input } from "@/components/ui/input"
import { Label  } from "@/components/ui/label"
import { BorderBeam } from "@/components/ui/border-beam";


export default function ProfileCard({ member }) {

  const [hovered, setHovered] = useState(false);

  return (
    <div
      className={`
        bg-white border-transparent rounded-2xl p-6 text-center shadow-md 
        transition-all duration-300 cursor-pointer relative
        ${hovered ? "shadow-2xl scale-[1.02] -translate-y-1" : ""}
      `}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <BorderBeam
        duration={4}
        size={300}
        reverse
        className="from-transparent via-green-500 to-transparent"
      />

      {/* Glow Effect */}
      {hovered && (
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-200/30 to-blue-500/10 blur-xl"></div>
      )}
      

      {/* Card Content */}
      <div className="relative z-10">

        <img
          src={member.photo || "/default-avatar.jpg"}
          className={`
            w-28 h-28 rounded-full mx-auto object-cover object-top border-transparent shadow 
            transition-all duration-300
            ${hovered ? "scale-110 rotate-1" : ""}
          `}
        />

        <h3 className="mt-4 text-lg font-bold text-gray-800">
          {member.name}
        </h3>

        <p className="text-blue-600 font-medium mt-1">
          {member.title}
        </p>

        <p className="text-gray-500 text-sm mt-3 leading-relaxed">
          {member.description}
        </p>

        {/* Popup Info Bubble */}
        <div
          className={`
            mt-4 text-sm text-gray-600 bg-gray-50 border rounded-xl px-4 py-2
            shadow transition-all duration-300
            ${hovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3 pointer-events-none"}
          `}
        >
          👋 Hovering over profile
        </div>
        

      </div>

    </div>
  );
}
