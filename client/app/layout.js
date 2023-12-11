import "bootstrap/dist/css/bootstrap.min.css";
import "antd/dist/antd.min.js";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import TopNav from "../components/TopNav";
import { Provider } from "../context";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Provider>
          <TopNav />
          <ToastContainer />
          {children}
        </Provider>
      </body>
    </html>
  );
}
