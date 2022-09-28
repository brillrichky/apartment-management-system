import * as Icons from "react-icons/fa";

export const navItems = [
  {
    id: 1,
    title: "Home",
    path: "./home",
    nName: "nav-item",
    sName: "sidebar-item",
    icon: <Icons.FaHome />,
  },
  {
    id: 2,
    title: "Transactions",
    path: "/transactions",
    nName: "nav-item",
    sName: "sidebar-item",
    icon: <Icons.FaMoneyBillAlt />,
  },
  {
    id: 3,
    title: "Logout",
    path: "/login",
    nName: "nav-item",
    sName: "sidebar-item",
    icon: <Icons.FaSignOutAlt />,
  },
];

localStorage.removeItem('token');
localStorage.removeItem('user');