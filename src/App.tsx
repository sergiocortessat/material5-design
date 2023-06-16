import React from "react";
import "./App.css";
import { RightBar } from "./components/RightBar";
import { NavBar } from "./components/NavBar";
import { Feed } from "./components/Feed";
import { Box, Stack } from "@mui/material";
import SideBar from "./components/SideBar";
import Add from "./components/Add";

function App() {
  return (
    <Box>
      {/* navbar */}
        <NavBar/>
      <Stack direction="row" spacing={2} justifyContent="space-between">
      <SideBar />
      <Feed />
      <RightBar />
      </Stack>
      <Add />
    </Box>
  );
}

export default App;
