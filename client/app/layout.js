import "bootstrap/dist/css/bootstrap.min.css";
import "antd/dist/antd.min.js";
import TopNav from "../components/TopNav";
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <TopNav />
        {children}
      </body>
    </html>
  );
}
