import { ImageResponse } from "next/og";

export const alt = "Kignature LLC — Technology Company in Dhaka, Bangladesh";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "linear-gradient(135deg, #060b1c 0%, #0a1430 55%, #0d1f4d 100%)",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            marginBottom: 48,
          }}
        >
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 14,
              background: "linear-gradient(135deg, #3b82f6, #22d3ee)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 28,
              fontWeight: 700,
            }}
          >
            K
          </div>
          <div style={{ fontSize: 28, fontWeight: 600, color: "#e8eefb" }}>
            Kignature LLC
          </div>
        </div>
        <div
          style={{
            fontSize: 76,
            fontWeight: 700,
            lineHeight: 1.08,
            letterSpacing: -2,
            maxWidth: 900,
          }}
        >
          Software for everyday life in Bangladesh.
        </div>
        <div
          style={{
            marginTop: 32,
            fontSize: 30,
            color: "#67e8f9",
            fontStyle: "italic",
          }}
        >
          Behind NexBD — one app for messaging, social, shopping, and payments.
        </div>
      </div>
    ),
    size,
  );
}
