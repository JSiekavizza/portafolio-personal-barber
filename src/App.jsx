import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "../src/routes/AppRoutes.jsx";

function App() {
  return (
    <div className="min-h-screen w-full bg-base font-sans text-ink">
      <Router>
        <AppRoutes />
      </Router>
    </div>
  );
}

export default App;
