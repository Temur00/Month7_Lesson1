import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Teachers from "./pages/Teachers";
import Students from "./pages/Students";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";
import Login from "./pages/login/Login";

import Header from "./components/Header";
import Sidebar from "./pages/Sidebar";

const App = () => {
  const [user, setUser] = useState("");

  return (
    <div className="d-flex">
      <Router>
        {/* <Sidebar /> */}
        <div>
          {user ? <Header user={user} /> : null}

          <Routes>
            <Route path="/" element={<Sidebar user={user} />} />

            <Route path="/teachers" element={<Teachers user={user} />} />
            <Route path="/students" element={<Students user={user} />} />
            <Route
              path="/profile"
              element={<Profile user={user} setUser={setUser} />}
            />
            <Route path="/login" element={<Login setUser={setUser} />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
};

export default App;
