
import './App.css';
import {BrowserRouter,Route,Routes,Navigate } from 'react-router-dom'
import ABOUT from './pages/About';
import Header from './Components/Header'
import Footer from './Components/Footer'
import HOME from './Components/Home'
import COMPOSE  from './pages/Compose';
import Item  from './Components/item';
import Login from './hooks/login'
import Signup from './hooks/signup'
import {useAuthContext} from './hooks/useAuthContext'

function App() {
  const {user}=useAuthContext()
  return (
    <div>
   <BrowserRouter>
   <Header/>
   <Routes>
    < Route path='/' element={user?<HOME/>:<Login/>}/>
    < Route path='/about' element={<ABOUT/>}/>
    < Route path='/login' element={!user?<Login/>:<Navigate to='/'/>}/>
    < Route path='/signup' element={!user?<Signup/>:<Navigate to='/'/>}/>
    < Route path='/compose' element={user?<COMPOSE/>:<Navigate to='/'/>}/>
    < Route path='/:postId'  element={user?<Item/>:<Navigate to='/'/>}/>
   </Routes>
   <Footer/>
   </BrowserRouter>
  
    </div>
  );
}

export default App;
