import './App.css';
import SideBar from './components/SideBar';
import bg from './images/bg.png'
import DashBoard from './Pages/DashBoard';
import MainPage from './Pages/MainPage';
import Login from './Pages/Login';

function App() {
  return (
    <div className="App">
      <MainPage />
      {/* <Login/> */}
    </div>
  );
}

export default App;
