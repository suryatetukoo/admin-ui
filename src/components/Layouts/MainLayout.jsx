import React, { useContext, useState } from "react";
import Logo from "../Elements/Logo";
import NotificationsIcon from '@mui/icons-material/Notifications';
import Icon from "../Elements/Icon";
import { NavLink } from "react-router-dom";
import { ThemeContext } from "../../context/themeContext";
import { AuthContext } from "../../context/authContext";
import { logoutService } from "../../services/authService";
import LogoutModal from "../Fragments/LogoutModal";
import { Backdrop, CircularProgress } from "@mui/material";

function MainLayout(props) {
  const { children } = props;

  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const [isLoadingLogout, setIsLoadingLogout] = useState(false);

  const themes = [
    { name: "theme-green", bgcolor: "bg-[#299D91]", color: "#299D91" },
    { name: "theme-blue", bgcolor: "bg-[#1E90FF]", color: "#1E90FF" },
    { name: "theme-purple", bgcolor: "bg-[#6A5ACD]", color: "#6A5ACD" },
    { name: "theme-pink", bgcolor: "bg-[#DB7093]", color: "#DB7093" },
    { name: "theme-brown", bgcolor: "bg-[#8B4513]", color: "#8B4513" },
  ];

  const { theme, setTheme } = useContext(ThemeContext);

  const menu = [
    { id: 1, name: "Overview", icon: <Icon.Overview />, link: "/" },
    { id: 2, name: "Balances", icon: <Icon.Balance />, link: "/balance" },
    { id: 3, name: "Transaction", icon: <Icon.Transaction />, link: "/transaction", },
    { id: 4, name: "Bills", icon: <Icon.Bill />, link: "/bill" },
    { id: 5, name: "Expenses", icon: <Icon.Expense />, link: "/expenses" }, 
    { id: 6, name: "Goals", icon: <Icon.Goal />, link: "/goal" },
    { id: 7, name: "Settings", icon: <Icon.Setting />, link: "/setting" },
  ];

  const { user, logout } = useContext(AuthContext);

  const onConfirmLogout = async () => {
    setIsModalOpen(false); 
    setIsLoadingLogout(true); 

    try {
      await logoutService();
      logout();
    } catch (err) {
      console.error(err);
      if (err.status === 401) {
        logout();
      }
      logout();
    } finally {
      setIsLoadingLogout(false); 
    }
  };

  return (
    <>
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={isLoadingLogout}
      >
        <div className="flex flex-col items-center">
            <CircularProgress color="inherit" />
            <span className="mt-2 font-semibold">Logging out...</span>
        </div>
      </Backdrop>

      <LogoutModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        onConfirm={onConfirmLogout} 
      />

      <div className={`flex min-h-screen ${theme.name}`}>
        <aside className="bg-defaultBlack w-28 sm:w-64 text-special-bg2 flex flex-col justify-between px-7 py-12">
          <div>
            <div className="mb-10">
              <Logo variant="secondary" />
            </div>
            <nav>
              {menu.map((item) => (
                <NavLink
                  key={item.id}
                  to={item.link}
                  className={({ isActive }) =>
                    `flex px-4 py-3 rounded-md hover:text-white hover:font-bold hover:scale-105 ${
                      isActive
                        ? "bg-primary text-white font-bold"
                        : "hover:bg-special-bg3"
                    }`
                  }
                >
                  <div className="mx-auto sm:mx-0">{item.icon}</div>
                  <div className="ms-3 hidden sm:block">{item.name}</div>
                </NavLink>
              ))}
            </nav>
          </div>
          <div>
            Themes
            <div className="flex flex-col sm:flex-row gap-2 items-center">
              {themes.map((t) => (
                <div
                  key={t.name}
                  className={`${t.bgcolor} w-6 h-6 rounded-md cursor-pointer mb-2`}
                  onClick={() => setTheme(t)}
                ></div>
              ))}
            </div>
          </div>
          <div>
            <div onClick={() => setIsModalOpen(true)} className="cursor-pointer">
              <div className="flex bg-special-bg3 text-white px-4 py-3 rounded-md">
                <div className="mx-auto sm:mx-0 text-primary">
                  <Icon.Logout />
                </div>
                <div className="ms-3 hidden sm:block">Logout</div>
              </div>
            </div>
            <div className="border my-10 border-b-special-bg"></div>
            <div className="flex justify-between items-center">
              <div>Avatar</div>
              <div className="hidden sm:block">
                <div>{user.name}</div>
                <div>View Profile</div>
              </div>
              <div className="hidden sm:block">
                <Icon.Detail size={15} />
              </div>
            </div>
          </div>
        </aside>
        
        <div className="bg-special-mainBg flex-1 flex flex-col">
          <header className="border-b border-gray-200 bg-white px-6 py-4 flex justify-between items-center shadow-sm">
            
            <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-6">
              <div className="font-bold text-2xl text-gray-800">{user.name}</div>
              <div className="text-gray-400 text-sm flex items-center gap-1">
                <span>May 19, 2023</span>
              </div>
            </div>

            <div className="flex items-center gap-6">
              
              <div className="flex items-center justify-center p-2 bg-gray-50 rounded-full hover:bg-gray-100 cursor-pointer transition">
                <NotificationsIcon className="text-primary" />
              </div>

              <div className="hidden sm:flex items-center bg-gray-100 rounded-full px-4 py-2 w-64">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-gray-400">
                    <path d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M21 21L16.65 16.65" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <input 
                    type="text" 
                    placeholder="Search.." 
                    className="ml-2 bg-transparent outline-none text-sm text-gray-600 placeholder-gray-400 w-full"
                />
              </div>

            </div>
          </header>

          <main className="flex-1 px-6 py-4 overflow-y-auto">
            {children}
          </main>
        </div>
      </div>
    </>
  );
}

export default MainLayout;