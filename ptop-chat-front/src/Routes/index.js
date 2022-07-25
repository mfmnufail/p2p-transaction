import React from "react";
import { Routes, Route } from "react-router-dom";

import Transaction from "../Components/Transaction";

const index = () => {
  return (
    <Routes>
      <Route path="/login" element={<Transaction/>} />
    </Routes>
  );
};

export default index;
