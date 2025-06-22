import { useEffect, useRef } from "react";

export default function AdBanner() {
  const adRef = useRef(null);

  useEffect(() => {
    const adElement = adRef.current;
    if (!adElement) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && adElement.offsetWidth > 0) {
        try {
          (window.adsbygoogle = window.adsbygoogle || []).push({});
        } catch (e) {
          console.error("Adsense error:", e);
        }
        observer.disconnect();
      }
    });

    observer.observe(adElement);

    return () => observer.disconnect();
  }, []);

  return (
    <ins
      className="adsbygoogle"
      style={{ display: "block", width: "100%", minHeight: "90px" }}
      data-ad-client="ca-pub-8531773061576363"
      data-ad-slot="1452481144"
      data-ad-format="auto"
      data-full-width-responsive="true"
      ref={adRef}
    ></ins>
  );
}
