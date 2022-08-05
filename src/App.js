import LoginPage from "./component/LoginPage";
import Header from "./modules/Header";
import OverviewPage from "./modules/OverviewPage";
import VideoSection from "./modules/VideoSection";
import { Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route
          path="videosection"
          element={
            <RequireAuth>
              <VideoSection />
            </RequireAuth>
          }
        />
        <Route
          path="overviewpage/:id/:categoryid"
          element={
            <RequireAuth>
              <OverviewPage />
            </RequireAuth>
          }
        />
      </Routes>
    </div>
  );
}

function RequireAuth({ children }) {
  if (!localStorage.getItem("token")) {
    return <Navigate to="/" />;
  }

  return children;
}

export default App;
