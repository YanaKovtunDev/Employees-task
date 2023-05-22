import { Routes, Route } from "react-router";
import { Home } from "./pages/Home";
import { Timesheets } from "./pages/Timesheets";
import "./App.css";
import { UserContext } from "./context/user";
import React, { useState } from "react";
import { IUser } from "./types";

const UserContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element => {
  const [user, setUser] = useState<IUser | null>(null);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export function App() {
  return (
    <UserContextProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/timesheets/:userId" element={<Timesheets />} />
      </Routes>
    </UserContextProvider>
  );
}
