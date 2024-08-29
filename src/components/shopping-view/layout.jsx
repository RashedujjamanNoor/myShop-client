import React from "react";
import { Outlet } from "react-router-dom";
import ShoppingHeader from "./header";

const ShoppingLayout = () => {
  return (
    <div className="flex flex-col overflow-hidden">
      {/* common header  */}
      <ShoppingHeader />
      <main className="flex flex-1 w-full">
        <Outlet />
      </main>
    </div>
  );
};

export default ShoppingLayout;
