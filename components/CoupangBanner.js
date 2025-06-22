import Script from "next/script";

export default function CoupangBanner() {
  return (
    <div className="mt-8">
      <Script src="https://ads-partners.coupang.com/g.js" strategy="afterInteractive" />
      <div id="coupang-banner" className="flex justify-center">
        <script
          dangerouslySetInnerHTML={{
            __html: `
              new PartnersCoupang.G({
                id: 880319,
                template: "carousel",
                trackingCode: "AF1664640",
                width: "680",
                height: "140"
              });
            `,
          }}
        />
      </div>
    </div>
  );
}
