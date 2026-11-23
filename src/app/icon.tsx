import { ImageResponse } from "next/og";
import { site } from "@/content/site";

export const dynamic = "force-static";
export const size = { width: 64, height: 64 };
export const contentType = "image/png";

/** The favicon: the seal, at the only size a seal needs. */
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#150f14",
        }}
      >
        <div
          style={{
            width: 54,
            height: 54,
            borderRadius: "50%",
            background: "#8e1b2b",
            border: "1px solid #a8405a",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#f3ebe6",
            fontSize: 30,
            fontFamily: "Georgia, serif",
          }}
        >
          {site.monogram}
        </div>
      </div>
    ),
    size,
  );
}
