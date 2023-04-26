import React from "react";

import { Icon } from "@chakra-ui/react";
import {
  MdHome,
  MdLock,
  MdOutlineToken,
  MdOutlineGroups,
  MdDeveloperBoard,
  MdOutlineLibraryBooks,
  MdOutlineMessage,
  MdOutlineAnalytics,
  MdOutlineSettings,
  MdOutlinePerson,
  MdAppRegistration,
} from "react-icons/md";

// Admin Imports
import MainDashboard from "views/admin/default";
import NFTMarketplace from "views/admin/marketplace";
import Profile from "views/admin/profile";
import DataTables from "views/admin/dataTables";
import RTL from "views/admin/rtl";

// Auth Imports
import SignInCentered from "views/auth/signIn";
import SignUpCentered from "views/auth/signUp";

const routes = [
  {
    name: "Main Dashboard",
    layout: "/admin",
    path: "/default",
    icon: <Icon as={MdHome} width='20px' height='20px' color='inherit' />,
    component: MainDashboard,
  },
  {
    name: "Profile",
    layout: "/admin",
    path: "/profile",
    icon: <Icon as={MdOutlinePerson} width='20px' height='20px' color='inherit' />,
    component: Profile,
  },
  {
    name: "Token",
    layout: "/admin",
    path: "/nft-marketplace",
    icon: (
      <Icon
        as={MdOutlineToken}
        width='20px'
        height='20px'
        color='inherit'
      />
    ),
    component: NFTMarketplace,
    secondary: true,
  },
  {
    name: "Community",
    layout: "/admin",
    icon: <Icon as={MdOutlineGroups} width='20px' height='20px' color='inherit' />,
    path: "/data-tables",
    component: DataTables,
  },
  {
    name: "Job Board",
    layout: "/admin",
    path: "/job-board",
    icon: <Icon as={MdDeveloperBoard} width='20px' height='20px' color='inherit' />,
    component: Profile,
  },
  {
    name: "Knowledge Base",
    layout: "/admin",
    path: "/knowledge-base",
    icon: <Icon as={MdOutlineLibraryBooks} width='20px' height='20px' color='inherit' />,
    component: Profile,
  },
  {
    name: "Message",
    layout: "/admin",
    path: "/messages",
    icon: <Icon as={MdOutlineMessage} width='20px' height='20px' color='inherit' />,
    component: Profile,
  },
  {
    name: "Sign In",
    layout: "/auth",
    path: "/sign-in",
    icon: <Icon as={MdLock} width='20px' height='20px' color='inherit' />,
    component: SignInCentered,
  },
  {
    name: "Sign Up",
    layout: "/auth",
    path: "/sign-up",
    icon: <Icon as={MdAppRegistration} width='20px' height='20px' color='inherit' />,
    component: SignUpCentered,
  },
  {
    name: "Analytics",
    layout: "/admin",
    path: "/analytics",
    icon: <Icon as={MdOutlineAnalytics} width='20px' height='20px' color='inherit' />,
    component: RTL,
  },
  {
    name: "Settings",
    layout: "/admin",
    path: "/settings",
    icon: <Icon as={MdOutlineSettings} width='20px' height='20px' color='inherit' />,
    component: Profile,
  }
];

export default routes;
