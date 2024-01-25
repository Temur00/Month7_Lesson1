import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Teachers from "./pages/Teachers";
import Students from "./pages/Students";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";

import Header from "./components/Header";
import Products from "./pages/Products";

const App = () => {
  const [user, setUser] = useState("");

  return (
    <div>
      <Router>
        {user ? <Header user={user} /> : null}

        <Routes>
          <Route path="/" element={<Products user={user} />} />

          <Route path="/teacher" element={<Teachers user={user} />} />
          <Route path="/students" element={<Students user={user} />} />
          <Route
            path="/profile"
            element={<Profile user={user} setUser={setUser} />}
          />
          <Route path="/login" element={<Login setUser={setUser} />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
