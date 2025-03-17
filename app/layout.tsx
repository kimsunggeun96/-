import { ReactNode } from "react";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ko">
      <head>
        <title>김야차</title>
      </head>
      <body>{children}</body>
    </html>
  );
}
