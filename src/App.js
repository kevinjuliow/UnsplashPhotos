import './App.css';
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Users from './Pages/Users/Users';
import SideNav from './Navigation/SideNav';
import Collection from './Pages/Collections/Collection';
import TopNav from './Navigation/TopNav';
import Random from './Pages/Random/Random';
import { ContextProvider } from './Context/SearchContext';

function App() {
  return (
   <>
   <ContextProvider>
   <Router>
    <SideNav/>
    <TopNav/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/users' element={<Users/>}/>
      <Route path='/collections' element={<Collection/>}/>
      <Route path='/random' element={<Random/>}/>
    </Routes>
   </Router>
   </ContextProvider>
   </>
  );
}

export default App;
