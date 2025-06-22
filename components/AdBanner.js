import { useEffect, useRef } from "react";

export default function AdBanner() {
  const adRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        try {
          if (window.adsbygoogle && adRef.current) {
            window.adsbygoogle.push({});
          }
        } catch (e) {
          console.error("Adsense error:", e);
        }
      }
    });

    if (adRef.current) {
      observer.observe(adRef.current);
    }

    return () => {
      if (adRef.current) {
        observer.unobserve(adRef.current);
      }
    };
  }, []);

  return (
    <ins
      ref={adRef}
      className="adsbygoogle"
      style={{ display: "block", width: "100%", minHeight: "150px" }}
      data-ad-client="ca-pub-8531773061576363"
      data-ad-slot="1452481144"
      data-ad-format="auto"
      data-full-width-responsive="true"
    ></ins>
  );
}
