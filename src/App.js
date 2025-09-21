import logo from './logo.svg';
import './App.css';
import GlobalStyles from './styles/GlobalStyles';
import Header from './components/Header';
import { Outlet } from 'react-router-dom';
import AuthContext, { AuthContextProvider } from './context/AuthContext';

function App() {
  return (
    <>
      
        <GlobalStyles />
        <Header />
        <main>
          <Outlet />
        </main>
      
    </>
  );
}

export default App;
