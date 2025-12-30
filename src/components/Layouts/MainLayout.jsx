import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import LogoDashboard from "../Elements/Logo"; 
import Icon from "../Elements/Icon";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { ThemeContext } from "../../context/themeContext";

const MainLayout = (props) => {
  const { children, title } = props;
  const { theme, setTheme } = useContext(ThemeContext);

  const themes = [
    { name: "theme-green", bgcolor: "bg-[#299D91]", color: "#299D91" },
    { name: "theme-blue", bgcolor: "bg-[#1E90FF]", color: "#1E90FF" },
    { name: "theme-purple", bgcolor: "bg-[#6A5ACD]", color: "#6A5ACD" },
    { name: "theme-pink", bgcolor: "bg-[#DB7093]", color: "#DB7093" },
    { name: "theme-brown", bgcolor: "bg-[#8B4513]", color: "#8B4513" },
  ];

  const menu = [
    { id: 1, name: "Overview", icon: <Icon.Overview />, link: "/" },
    { id: 2, name: "Balances", icon: <Icon.Balance />, link: "/balance" },
    { id: 3, name: "Transaction", icon: <Icon.Transaction />, link: "/transaction" },
    { id: 4, name: "Bills", icon: <Icon.Bill />, link: "/bill" },
    { id: 5, name: "Expenses", icon: <Icon.Expense />, link: "/expense" },
    { id: 6, name: "Goals", icon: <Icon.Goal />, link: "/goal" },
    { id: 7, name: "Settings", icon: <Icon.Setting />, link: "/setting" },
  ];

  return (
    <div className={`flex bg-special-mainBg min-h-screen font-poppins ${theme.name}`}>
      {/* --- SIDEBAR --- */}
      <aside className="w-64 bg-defaultBlack text-special-bg2 flex flex-col justify-between fixed h-screen overflow-y-auto scrollbar-hide z-10">
        <div>
          <div className="px-8 py-8 mb-4">
            <LogoDashboard variant="secondary" /> 
          </div>

          <nav className="px-4 space-y-2">
            {menu.map((item) => (
              <NavLink
                key={item.id}
                to={item.link}
                // MENAMBAHKAN: Style dinamis untuk background menu aktif
                style={({ isActive }) => 
                  isActive ? { backgroundColor: theme.color } : {}
                }
                className={({ isActive }) =>
                  `flex items-center px-4 py-3 rounded-lg transition-all duration-200 ${
                    isActive
                      ? "text-white font-bold" 
                      : "hover:bg-special-bg3 hover:text-white"
                  }`
                }
              >
                <div className="mr-4">{item.icon}</div>
                <span className="text-sm">{item.name}</span>
              </NavLink>
            ))}
          </nav>
        </div>

        <div className="px-4 py-8 border-t border-gray-800/50">
          <div className="mb-6 px-4">
            <p className="text-xs text-gray-500 mb-3 uppercase font-bold text-center sm:text-left">Themes</p>
            <div className="flex flex-wrap gap-3 justify-center sm:justify-start">
              {themes.map((t) => (
                <div
                  key={t.name}
                  className={`${t.bgcolor} w-6 h-6 rounded-md cursor-pointer transition-transform hover:scale-110`}
                  onClick={() => setTheme(t)}
                ></div>
              ))}
            </div>
          </div>

          <NavLink to="/login" className="flex items-center w-full px-4 py-3 text-special-bg2 hover:text-white transition-colors">
            {/* MENAMBAHKAN: Style dinamis untuk icon logout */}
            <div className="mr-4" style={{ color: theme.color }}>
                <Icon.Logout />
            </div>
            <span className="text-sm font-medium">Logout</span>
          </NavLink>
        </div>
      </aside>

      <div className="flex-1 ml-64 flex flex-col">
        <header className="bg-white px-8 py-5 flex justify-between items-center border-b border-gray-200">
            <div>
                <h2 className="text-2xl font-bold text-gray-800">{title || "Overview"}</h2>
                <p className="text-sm text-gray-500">May 19, 2023</p>
            </div>
            <div className="flex items-center gap-6">
                {/* MENAMBAHKAN: Style dinamis untuk icon notifikasi */}
                <NotificationsIcon 
                  className="cursor-pointer transition-colors" 
                  style={{ color: theme.color }} 
                />
                <div className="hidden sm:block">
                  <input type="text" placeholder="Search here..." className="bg-gray-100 rounded-lg px-4 py-2 text-sm focus:outline-none" />
                </div>
            </div>
        </header>

        <main className="p-8 flex-1">
            {children}
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
