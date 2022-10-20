import React from "react";
import Footer from "@modules/layout/footer";
import Nav from "@modules/layout/nav";

function Layout({ children }) {
  return (
    <div>
      <Nav />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
