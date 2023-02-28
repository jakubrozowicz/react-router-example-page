import React from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import HomePage from "../pages/HomePage";
import AuthorListPage from "../pages/AuthorListPage";
import AuthorPage from "../pages/AuthorPage";
import ContactPage from "../pages/ContactPage";
import AdminPage from "../pages/AdminPage";
import LoginPage from "../pages/LoginPage";
import ErrorPage from "../pages/ErrorPage";

const Page = () => {
  return (
    <>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/authors" element={<AuthorListPage />} />
        <Route path="/author/:id" element={<AuthorPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Outlet />
    </>
  );
};

export default Page;
