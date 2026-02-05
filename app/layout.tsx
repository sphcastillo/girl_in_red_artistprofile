
import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "girl in red",
  description: "Marie Ulven Ringheim. Songwriter, Storyteller, Activist, Queer.",
};

export default function RootLayout(
  {
  children,
  }
  : Readonly<
    {
      children: React.ReactNode;
    }
    >) {
    return (
        <html lang="en">
          <body>
            {children}
          </body>
        </html>
    );
  }
