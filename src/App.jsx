import "./App.css";

import ComponentHeader from "./ComponentBox/ComponentHeader";

import ComponentContent from "./ComponentBox/ComponentContent";
import ComponentSidebar from "./ComponentBox/ComponentSideBar";

function App() {
  return (
    <div className="app">
      <ComponentHeader />

      <div className="sidebar-content">
        <ComponentSidebar />
        <ComponentContent />
      </div>
    </div>
  );
}

export default App;
