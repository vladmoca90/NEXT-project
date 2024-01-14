import type { Metadata } from "next";
import { Inter } from "next/font/google";
import AirportNav from "./Navigation";
import AirportFooter from "./Footer";

// styles
import "./styles/airport-guide.css";
import "./styles/booking-details.css";
import "./styles/booking-popup.css";
import "./styles/carousel.css";
import "./styles/flight-information.css";
import "./styles/flights.css";
import "./styles/fonts.css";
import "./styles/footer.css";
import "./styles/global.css";
import "./styles/help.css";
import "./styles/homepage.css";
import "./styles/maps.css";
import "./styles/navigation.css";
import "./styles/prepare.css";
import "./styles/search-bar.css";
import "./styles/shop-and-eat.css";

//using tailwind
import "./styles/output.css";

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Airport Project",
  description: "My personal project, a replica of the Heathrow Airport",
}

export default function RootLayout({
  children,
}: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AirportNav />
        <div id="mainContent">{children}</div>
        <AirportFooter />
      </body>
    </html>
  )
}