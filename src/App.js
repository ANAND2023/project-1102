
import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import { MyProSidebarProvider } from "./pages/global/sidebar/sidebarContext";

import Topbar from "./pages/global/Topbar";

import Dashboard from "./pages/dashboard";
import Team from "./pages/team";
import Invoices from "./pages/invoices";
import Contacts from "./pages/contacts";
import Form from "./pages/form";
import Calendar from "./pages/calendar";
import Bar from "./pages/bar";
import Line from "./pages/line";
import Pie from "./pages/pie";
import FAQ from "./pages/faq";
import Geography from "./pages/geography";
import { useState } from "react";
import Login from "./pages/login/Login";

const App = () => {
  const [theme, colorMode] = useMode();
  const [landingpage,setLandingPage] = useState(true);
  const [name,setName] = useState("");
  return (
    
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />

        {
          landingpage &&  <div style={{ height: "100%", width: "100%" }}>
              <main>
                  <Routes>
                  <Route path="/" element={<Login  setLandingPage = { setLandingPage }  setName = {setName} />}/>
                  </Routes>
              </main>
          </div>
        }

       {!landingpage &&  <MyProSidebarProvider>
        <div style={{ height: "100%", width: "100%" }}>
          <main>
            <Topbar name={name} setLandingPage ={setLandingPage} />
            <Routes>
              <Route path="/" element={<Dashboard />}>
              
              <Route path="analytics" element={<Team />} />
              <Route path="contacts" element={<Contacts />} />
              <Route path="invoices" element={<Invoices />} />
              <Route path="form" element={<Form />} />
              <Route path="bar" element={<Bar />} />
              <Route path="pie" element={<Pie />} />
              <Route path="line" element={<Line />} />
              <Route path="faq" element={<FAQ />} />
              <Route path="calendar" element={<Calendar />} />
              <Route path="geography" element={<Geography />} />
              </Route>
              
            </Routes>
          </main>
        </div>
      </MyProSidebarProvider>}
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default App;
