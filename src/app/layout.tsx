import "../styles/global.css"
import { layoutContainer } from "./style.css"

export const metadata = {
  title: "StakeKit",
  description: "StakeKit",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <link rel="icon" href="/icon.png" />
      <body className={layoutContainer}>{children}</body>
    </html>
  )
}
