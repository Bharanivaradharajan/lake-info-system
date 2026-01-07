export default function BorderBeam({
  size = 250,
  duration = 10,
  delay = 0,
  borderWidth = 2
}) {
  return (
    <div
      className="pointer-events-none absolute inset-0 rounded-xl"
      style={{
        maskImage:
          "radial-gradient(transparent 60%, black), linear-gradient(#000,#000)",
        WebkitMask:
          "radial-gradient(transparent 60%, black), linear-gradient(#000,#000)",
        maskComposite: "exclude",
        WebkitMaskComposite: "xor"
      }}
    >
      <div
        className="absolute inset-0 rounded-xl"
        style={{
          borderWidth,
          borderStyle: "solid",
          borderColor: "transparent",
          background:
            "conic-gradient(from 0deg, #00c6ff, #0072ff, #00c6ff)",
          animation: `spin ${duration}s linear infinite`,
          animationDelay: `${delay}s`
        }}
      />
      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}
