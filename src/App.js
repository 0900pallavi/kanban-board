import { Routes, Route } from "react-router-dom";
import { MyProSidebarProvider } from "./pages/global/sidebar/sidebarContext";

import Topbar from "./pages/global/Topbar";

import Dashboard from "./pages/dashboard";
import Team from "./pages/team";

const App = () => {
  return (
    <>
      <MyProSidebarProvider>
        <div style={{ height: "100%", width: "100%", 'maxHeight': '100vh', 'overflow': 'hidden' }}>
          <main >
            <Topbar />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/team" element={<Team />} />
            </Routes>
          </main>
        </div>
      </MyProSidebarProvider>
    </>
  );
};

export default App;
