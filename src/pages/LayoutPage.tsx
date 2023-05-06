import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import { Box } from "@chakra-ui/react";

const LayoutPage = () => {
  return (
    <>
      <Navbar />
      <Box padding={5}>
        <Outlet />
      </Box>
    </>
  );
};

export default LayoutPage;
