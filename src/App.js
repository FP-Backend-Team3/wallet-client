import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import { DesktopLandingAppPage } from "./DesktopLandingAppPage";
import { DesktopSignUp } from "./DesktopSignUp";
import { DesktopLogin } from "./DesktopLogin";
import { useEffect } from "react";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    //TODO: Update meta titles and descriptions below
    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/desktop-signup":
        title = "";
        metaDescription = "";
        break;
      case "/desktop-login":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<DesktopLandingAppPage />} />

      <Route path="/desktop-signup" element={<DesktopSignUp />} />

      <Route path="/desktop-login" element={<DesktopLogin />} />
    </Routes>
  );
}
export default App;
