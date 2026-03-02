import { BrowserRouter } from "react-router-dom";
import AppSidebar from "./app/AppSidebar";
import Topbar from "./components/layout/topbar/Topbar";


function App() {
  return (
    <div className="flex h-screen bg-[#F3F4F6] overflow-hidden text-foreground font-sans">

      <BrowserRouter>
        {/* SIDEBAR */}
        <AppSidebar />


        {/*TOPBAR*/}
        <div className="flex flex-col flex-1 overflow-hidden">
          <Topbar />
        </div>
      </BrowserRouter>

    </div>
  );
}
export default App;