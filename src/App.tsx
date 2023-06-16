import React from "react";
import "./App.css";
import { RightBar } from "./components/RightBar";
import { NavBar } from "./components/NavBar";
import { Feed } from "./components/Feed";
import { Box, Stack, createTheme, PaletteMode, ThemeProvider } from "@mui/material";
import SideBar from "./components/SideBar";
import Add from "./components/Add";

function App() {

  const [mode, setMode] = React.useState<PaletteMode>("light");

  const darkTheme = createTheme({
    palette: {
      mode: mode
    },
  });
  return (
    <ThemeProvider theme={darkTheme}>
    <Box bgcolor={"background.default"} color={"text.primary"}>
      {/* navbar */}
        <NavBar/>
      <Stack direction="row" spacing={2} justifyContent="space-between">
      <SideBar setMode={setMode} mode={mode} />
      <Feed />
      <RightBar />
      </Stack>
      <Add />
    </Box>
    </ThemeProvider>
  );
}

export default App;
