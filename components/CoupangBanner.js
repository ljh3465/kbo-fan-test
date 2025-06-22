import { useEffect, useRef } from "react";

export default function CoupangBanner() {
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;

    const script = document.createElement("script");
    script.src = "https://ads-partners.coupang.com/g.js";
    script.async = true;
    script.onload = () => {
      if (window.PartnersCoupang) {
        new window.PartnersCoupang.G({
          id: 880319,
          template: "carousel",
          trackingCode: "AF1664640",
          tsource: "",
        });
      }
    };
    ref.current.appendChild(script);
  }, []);

  return (
    <div className="w-full overflow-hidden mt-8">
      <div ref={ref} className="max-w-full mx-auto" />
    </div>
  );
}
