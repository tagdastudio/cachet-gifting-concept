import { Archivo, Bodoni_Moda } from "next/font/google";

// Two voices, each with a job: the engraved voice (Bodoni Moda) for everything that is spoken aloud,
// and the quiet voice (Archivo) for everything that is read. A client can replace the families, not the jobs.
const display = Bodoni_Moda({
  subsets: ["latin"],
  weight: ["400", "500"],
  style: ["normal", "italic"],
  variable: "--ff-display",
  display: "swap",
});

const body = Archivo({
  subsets: ["latin"],
  variable: "--ff-body",
  display: "swap",
});

export const fontVariables = [display.variable, body.variable].join(" ");
