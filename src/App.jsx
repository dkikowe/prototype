import React, { useState, useEffect } from "react";
import BottomNavigation from "./components/BottomNavigation";
import LeadersPage from "./pages/LeadersPage";
import TasksPage from "./pages/TasksPage";
import MiningPage from "./pages/MiningPage";
import ExchangePage from "./pages/ExchangePage";
import ProfilePage from "./pages/ProfilePage";

function App() {
  const [activeTab, setActiveTab] = useState("mining"); // По умолчанию активна страница "Майнинг"

  useEffect(() => {
    // Инициализация Telegram Web App
    if (window.Telegram && window.Telegram.WebApp) {
      const tg = window.Telegram.WebApp;
      tg.requestFullscreen();
      tg.disableVerticalSwipes();
      tg.ready();
    }
  }, []);

  const renderPage = () => {
    switch (activeTab) {
      case "leaders":
        return <LeadersPage />;
      case "tasks":
        return <TasksPage />;
      case "mining":
        return <MiningPage />;
      case "exchange":
        return <ExchangePage />;
      case "profile":
        return <ProfilePage />;
      default:
        return <MiningPage />;
    }
  };

  return (
    <div className="app">
      {renderPage()}
      <BottomNavigation activeTab={activeTab} onTabChange={setActiveTab} />
    </div>
  );
}

export default App;
