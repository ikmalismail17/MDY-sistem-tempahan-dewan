import AppContent from "./components/AppContent";
import { BrowserRouter as Router } from "react-router-dom";
import  AuthProvider  from "./providers/AuthProviders"

function App() {
  return (
    <>
    <AuthProvider>
    <Router>
      <AppContent />
    </Router>
    </AuthProvider>
    </>
  );
}

export default App;
