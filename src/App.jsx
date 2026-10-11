import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "../src/routes/AppRoutes.jsx";
import { LanguageProvider } from "./context/LanguageContext.jsx";

function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen w-full bg-base font-sans text-ink">
        <Router>
          <AppRoutes />
        </Router>
      </div>
    </LanguageProvider>
  );
}

export default App;
