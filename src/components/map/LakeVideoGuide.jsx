import { useEffect, useRef, useState } from "react";

export default function LakeVideoGuide() {

  const videoRef = useRef(null);
  const containerRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.4 }   // play when 40% visible
    );

    if (containerRef.current) observer.observe(containerRef.current);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!videoRef.current) return;

    if (visible) {
      videoRef.current.play().catch(() => {});
    } else {
      videoRef.current.pause();
    }
  }, [visible]);

  return (
    <div
      ref={containerRef}
      className="w-full h-[320px] bg-black rounded-xl shadow overflow-hidden"
    >
      <video
        ref={videoRef}
        src="/map-guide.mp4"
        className="w-full h-full object-cover"
        muted
        playsInline
        preload="metadata"
      />
    </div>
  );
}
