import { useState } from "react";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import CreateNewCompany from "./components/CreateNewCompany/CreateNewCompany";
import UserForm from "./forms/user/UserForm";
import Party from "./components/Party/Party";
import GateIn from "./components/GateIn/GateIn";
import GateOut from "./components/GateOut/GateOut";

function App() {
  // State to track which screen is currently active
  const [activeScreen, setActiveScreen] = useState("parties");

  // Render the appropriate component based on activeScreen
  const renderScreen = () => {
    switch (activeScreen) {
      case "create-company":
        return <CreateNewCompany />;
      case "users":
        return <UserForm />;
      case "parties":
        return <Party />;
      case "gate-in":
        return <GateIn />;
      case "gate-out":
        return <GateOut />;
      default:
        return <Party />;
    }
  };

  return (
    <div>
      <Header />
      <div style={{ display: "flex" }}>
        <Sidebar activeScreen={activeScreen} onNavigate={setActiveScreen} />
        <main style={{ flex: 1, padding: "24px", background: "#f9fafb" }}>
          {renderScreen()}
        </main>
      </div>
    </div>
  );
}

export default App;
