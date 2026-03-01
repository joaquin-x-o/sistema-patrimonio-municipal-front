import { BrowserRouter } from "react-router-dom";
import AppSidebar from "./app/AppSidebar";

function App() {
  return (
    <BrowserRouter>
      <div className="flex h-screen bg-background">
        <AppSidebar />
      </div>
    </BrowserRouter>
  );
}

export default App;