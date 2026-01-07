import { useRef } from "react";
import QRCode from "react-qr-code";
import { toPng } from "html-to-image";

export default function LakeQR({ uqcode }) {

  const ref = useRef();

  const url = `${window.location.origin}/lakes/${uqcode}`;

  const downloadQR = async () => {
    if (!ref.current) return;

    const dataUrl = await toPng(ref.current, {
      cacheBust: true,
      pixelRatio: 3
    });

    const link = document.createElement("a");
    link.download = `${uqcode}-qr.png`;
    link.href = dataUrl;
    link.click();
  };

  return (
    <div className="flex flex-col items-center">

      {/* QR container (this gets converted to PNG) */}
      <div
        ref={ref}
        className="w-62 h-60 object-contain p-4 bg-white border border-gray-200 rounded-lg shadow-md flex flex-col items-center"
      >
        <QRCode value={url} size={140} />

        <p className="text-xs mt-2 text-gray-600">
          Scan to view lake details
        </p>

        <p className="text-[10px] text-gray-400 break-all text-center">
          {url}
        </p>
      </div>

      {/* Download Button */}
      <button
        onClick={downloadQR}
        className="mt-3 px-4 py-2 rounded-lg bg-blue-600 text-white text-sm hover:bg-blue-700 transition"
      >
        Download QR
      </button>
    </div>
  );
}
