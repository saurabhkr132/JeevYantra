import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "JeevYantra",
  description: "Official Website of JeevYantra, Robotics Club, IIST",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'></link>
      {/* <Head> */}
        {/* <Link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'></Link> */}
      {/* </Head> */}
      <body className={inter.className}> 
        <Navbar />
        {children}
      </body>
    </html>
  );
}
