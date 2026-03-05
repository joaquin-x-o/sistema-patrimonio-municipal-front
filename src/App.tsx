import { BrowserRouter } from "react-router-dom";
import AppSidebar from "./app/AppSidebar";
import Topbar from "./components/layout/topbar/Topbar";
import Dashboard from "./pages/Dashboard";
import { SidebarProvider } from "./components/layout/sidebar/SidebarProvider";



function App() {
  return (
    <div className="flex h-screen bg-[#F3F4F6] overflow-hidden text-foreground font-sans">

      <BrowserRouter>
        <SidebarProvider>
          {/* SIDEBAR */}
          <AppSidebar />

          <div className="flex flex-col flex-1 overflow-hidden">
            {/*TOPBAR*/}
            <Topbar />

            <main className="flex-1 overflow-y-auto p-8">
              <Dashboard />
            </main>

          </div>
        </SidebarProvider>

      </BrowserRouter>
    </div>
  );
}
export default App;