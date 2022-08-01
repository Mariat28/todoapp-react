import { useContext } from 'react';
import LoginPage from './components/login/LoginPage';
import HomePage from './components/HomePage';
import "./App.css";
import AuthContext from './store/auth-context';

function App() {
  const ctx = useContext(AuthContext);

  return (
      <div className="h-screen min-h-screen bg-purple-50">
        {!ctx.isLoggedIn && <LoginPage/>}
        {ctx.isLoggedIn && <HomePage/>}
      </div>

  );
}

export default App;
