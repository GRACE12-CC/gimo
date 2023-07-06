import logo from './logo.svg';
import './App.css';
import LandingPage from './LandingPage/LandingPage';
import Login from './Login/Login';
import { BrowserRouter,Routes,Route,Navigate } from 'react-router-dom';
import CustomerProfile from './CustomerProfile/CustomerProfile';

function App() {
  return (
    <div className="App">
      
      
     <BrowserRouter>
     <Routes>
      <Route path='/'
      element={
        <LandingPage/>
      }
      />
       
      <Route path='login'
      element={
        <Login/>
      }
      />
      <Route
      path='/login/customer'
      element={
        <CustomerProfile/>
      }
      />
      

      




     </Routes>
     
     </BrowserRouter>
      
    </div>
  );
}

export default App;
