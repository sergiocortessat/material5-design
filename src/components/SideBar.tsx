import React, { Dispatch, SetStateAction } from "react";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Switch,
  PaletteMode,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import SettingsIcon from "@mui/icons-material/Settings";
import PagesIcon from "@mui/icons-material/Pages";
import GroupIcon from "@mui/icons-material/Group";
import StorefrontIcon from "@mui/icons-material/Storefront";
import PeopleIcon from "@mui/icons-material/People";
import ModeNightIcon from "@mui/icons-material/ModeNight";

interface SideBarIProps {
  mode: string;
  setMode: Dispatch<SetStateAction<PaletteMode>>;
}

const sideBarItems = [
  {
    id: "home",
    icon: <HomeIcon />,
    text: "Inbox",
    href: "#home",
  },
  {
    id: "pages",
    icon: <PagesIcon />,
    text: "Pages",
    href: "#pages",
  },
  {
    id: "groups",
    icon: <GroupIcon />,
    text: "Groups",
    href: "#groups",
  },
  {
    id: "marketplace",
    icon: <StorefrontIcon />,
    text: "Marketplace",
    href: "#marketplace",
  },
  {
    id: "friends",
    icon: <PeopleIcon />,
    text: "Friends",
    href: "#friends",
  },
  {
    id: "settings",
    icon: <SettingsIcon />,
    text: "Settings",
    href: "#settings",
  },
];

const SideBar: React.FC<SideBarIProps> = ({ mode, setMode }) => {
  const iconMapping: Record<string, JSX.Element> = {
    Inbox: <HomeIcon />,
    Pages: <PagesIcon />,
    Groups: <GroupIcon />,
    Marketplace: <StorefrontIcon />,
    Friends: <PeopleIcon />,
    Settings: <SettingsIcon />,
  };

  return (
    <Box
      flex={1}
      p={2}
      sx={{ display: { xs: "none", sm: "block" }, marginRight: { sm: 5 } }}
    >
      <Box sx={{ position: "fixed" }}>
        <List>
          {sideBarItems.map((item) => (
            <ListItem key={item.id} disablePadding>
              <ListItemButton component={"a"} href={item.href}>
                <ListItemIcon>{iconMapping[item.text]}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItemButton>
            </ListItem>
          ))}
          <ListItem disablePadding>
            <ListItemButton component={"a"} href="#settings">
              <ListItemIcon>
                <ModeNightIcon />
              </ListItemIcon>
              <Switch
                value="checkedA"
                inputProps={{ "aria-label": "Switch A" }}
                onChange={() =>
                  mode === "light" ? setMode("dark") : setMode("light")
                }
              />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default SideBar;
