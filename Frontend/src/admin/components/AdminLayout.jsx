import React from "react";
import AdminNavbar from "./AdminNavbar.jsx";

function AdminLayout({ children }) {
  return (
    <div className="admin-page min-h-screen">
      <AdminNavbar />
      <main className="mx-auto w-full max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        {children}
      </main>
    </div>
  );
}

export default AdminLayout;
