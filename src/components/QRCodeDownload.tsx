"use client";

import { useRef } from "react";
import { QRCodeCanvas } from "qrcode.react";
import { Download, QrCode } from "lucide-react";

/**
 * Universal QR code — always points to the direct booking URL.
 * Update DIRECT_URL once your custom domain is connected.
 * Use code NINA10 in the URL so guests see the discount pre-filled.
 */
const DIRECT_URL = "https://casaninacarignano.com?promo=NINA10";
const PROMO_CODE = "NINA10";

export default function QRCodeDownload() {
  const canvasRef = useRef<HTMLDivElement>(null);

  function download() {
    const canvas = canvasRef.current?.querySelector("canvas") as HTMLCanvasElement | null;
    if (!canvas) return;

    // Create a padded, branded version for printing
    const pad = 40;
    const logoH = 52;
    const out = document.createElement("canvas");
    out.width  = canvas.width  + pad * 2;
    out.height = canvas.height + pad * 2 + logoH;
    const ctx = out.getContext("2d")!;

    // Background
    ctx.fillStyle = "#faf8f4";
    ctx.fillRect(0, 0, out.width, out.height);

    // QR code
    ctx.drawImage(canvas, pad, pad);

    // Text below
    ctx.fillStyle = "#18120c";
    ctx.font = "bold 18px Georgia, serif";
    ctx.textAlign = "center";
    ctx.fillText("Casa Nina Carignano", out.width / 2, canvas.height + pad + 24);

    ctx.fillStyle = "#b5703a";
    ctx.font = "14px Georgia, serif";
    ctx.fillText(`Book direct · use code ${PROMO_CODE} for 10% off`, out.width / 2, canvas.height + pad + 46);

    const link = document.createElement("a");
    link.download = "casa-nina-qr.png";
    link.href = out.toDataURL("image/png");
    link.click();
  }

  return (
    <div className="bg-card border border-border rounded-2xl p-6 flex flex-col items-center gap-5 text-center">
      <div className="flex items-center gap-2 text-sm font-semibold">
        <QrCode className="w-4 h-4 text-accent" />
        Direct Booking QR Code
      </div>

      {/* QR code */}
      <div
        ref={canvasRef}
        className="rounded-xl overflow-hidden border border-border p-3 bg-white shadow-sm"
      >
        <QRCodeCanvas
          value={DIRECT_URL}
          size={160}
          bgColor="#ffffff"
          fgColor="#18120c"
          level="M"
          marginSize={1}
        />
      </div>

      <div className="space-y-1">
        <p className="text-xs text-muted leading-relaxed">
          Scan to book direct at Casa Nina.<br />
          Code <span className="font-mono font-semibold text-foreground tracking-wider">{PROMO_CODE}</span> gives guests 10% off.
        </p>
        <p className="text-[11px] text-muted/70">
          Print this and leave it in the apartment.
        </p>
      </div>

      <button
        onClick={download}
        className="inline-flex items-center gap-2 px-5 py-2.5 bg-foreground text-background rounded-xl text-sm font-medium hover:opacity-90 transition-opacity"
      >
        <Download className="w-4 h-4" />
        Download PNG
      </button>
    </div>
  );
}
