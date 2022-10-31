import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from './home/Home';
import Cs from './cs/Cs';
import ItemList from './itemlist/ItemList';
import ItemDetail from './itempage/ItemDetail';
import Login from './login/Login';
import ForgotId from './login/ForgotId';
import ForgotPwd from './login/ForgotPwd';
import Modify from './mypage/Modify';
import Agree from './signup/Agree';
import SignCom from './signup/SignCom';
import SignUp from './signup/SignUp';
import SiteInfo from './siteinfo/SiteInfo';
import Boards from './board/boards';
import Header from './components/Header';
import Footer from './components/Footer';
import Board from './board/board';
import WriteBoard from './board/writeBoard';

function App() {
  return (
    <Router>
      <div className='App'>
        <Header/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Cs' element={<Cs />} />
          <Route path='/ItemList' element={<ItemList />} />
          <Route path='/ItemDetail' element={<ItemDetail />} />
          <Route path='/Login' element={<Login />} />
          <Route path='/ForgotId' element={<ForgotId/>} />
          <Route path='/ForgotPwd' element={<ForgotPwd/>} />
          <Route path='/Modify' element={<Modify/>} />
          <Route path='/Agree' element={<Agree/>} />
          <Route path='/SignCom' element={<SignCom />} />
          <Route path='/SignUp' element={<SignUp />} />
          <Route path='/SiteInfo' element={<SiteInfo />} />
          <Route path='/Boards' element={<Boards />} />
          <Route path='/Board' element={<Board />} />
          <Route path='/WriteBoard' element={<WriteBoard />} />
      </Routes>
      </div>
      <Footer />
    </Router>
    
   
  );
}

export default App;
