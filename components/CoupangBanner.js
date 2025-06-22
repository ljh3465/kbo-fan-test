// components/CoupangBanner.js
import { useEffect, useRef } from "react";

export default function CoupangBanner() {
  const ref = useRef();

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://ads-partners.coupang.com/g.js";
    script.async = true;
    script.onload = () => {
      if (window.PartnersCoupang) {
        window.PartnersCoupang.G({
          id: 880319,
          template: "carousel",
          trackingCode: "AF1664640",
          width: "100%",
          height: "140",
          tsource: "",
        });
      }
    };

    ref.current.appendChild(script);
  }, []);

  return <div ref={ref} style={{ width: "100%" }} />;
}
