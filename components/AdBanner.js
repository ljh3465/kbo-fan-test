import { useEffect, useRef, useState } from "react";

export default function AdBanner() {
  const adRef = useRef(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (!adRef.current) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        try {
          if (window.adsbygoogle && adRef.current.querySelector("ins.adsbygoogle")) {
            (window.adsbygoogle = window.adsbygoogle || []).push({});
          }

          // 쿠팡 스크립트 로드
          const coupangScript = document.createElement("script");
          coupangScript.src = "https://ads-partners.coupang.com/g.js";
          coupangScript.async = true;
          document.body.appendChild(coupangScript);

          const coupangInit = document.createElement("script");
          coupangInit.innerHTML = `
            new PartnersCoupang.G({
              id: 880319,
              template: "carousel",
              trackingCode: "AF1664640",
              width: "680",
              height: "140",
              tsource: ""
            });
          `;
          document.body.appendChild(coupangInit);

          setLoaded(true);
        } catch (e) {
          console.error("Adsense/Coupang error:", e);
        }
      }
    });

    observer.observe(adRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={adRef} className="my-4 flex flex-col items-center justify-center">
      <ins
        className="adsbygoogle"
        style={{ display: "block", width: "100%", height: "100px" }}
        data-ad-client="ca-pub-8531773061576363"
        data-ad-slot="1452481144"
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
      {/* 쿠팡 배너는 script 로드 시 자동 렌더 */}
    </div>
  );
}
