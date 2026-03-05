import { BrowserRouter } from "react-router-dom";
import AppSidebar from "./app/AppSidebar";
import Topbar from "./components/layout/topbar/Topbar";
import { SidebarProvider } from "./components/layout/sidebar/SidebarProvider";
import { AppRoutes } from "./Routes/AppRoutes";
import { ScrollToTop } from "./hooks/useScrollToTop";



function App() {
  return (
    <div className="flex h-screen bg-[#F3F4F6] overflow-hidden text-foreground font-sans">

      <BrowserRouter>
        <ScrollToTop />
        <SidebarProvider>
          {/* SIDEBAR */}
          <AppSidebar />

          <div className="flex flex-col flex-1 overflow-hidden">
            {/*TOPBAR*/}
            <Topbar />

            <main className="flex-1 overflow-y-auto p-8">
              <AppRoutes />
            </main>

          </div>
        </SidebarProvider>

      </BrowserRouter>
    </div>
  );
}
export default App;