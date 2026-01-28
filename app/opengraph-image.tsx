import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site";

export const runtime = "edge";

export const size = {
  width: 1200,
  height: 630
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "72px",
          background: "linear-gradient(135deg, #eef2ff 0%, #ffffff 55%, #e0e7ff 100%)"
        }}
      >
        <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
          <div
            style={{
              width: "80px",
              height: "80px",
              borderRadius: "20px",
              background: "#4f46e5",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              fontSize: "34px",
              fontWeight: 800
            }}
          >
            AI
          </div>
          <div style={{ fontSize: "44px", fontWeight: 800, color: "#0f172a" }}>
            {siteConfig.name}
          </div>
        </div>
        <div style={{ marginTop: "22px", fontSize: "38px", fontWeight: 700, color: "#0f172a" }}>
          AI‑powered web presence for local businesses
        </div>
        <div style={{ marginTop: "14px", fontSize: "28px", color: "#334155", maxWidth: "960px" }}>
          Websites + local SEO + automation. Launch fast, measure everything, improve monthly.
        </div>
      </div>
    ),
    {
      ...size
    }
  );
}
