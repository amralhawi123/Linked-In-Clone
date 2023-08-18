
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './componetnts/Login';
import Home from './componetnts/HomePage/Home';
import { connect } from "react-redux";
import { useEffect } from 'react';
import { getUserAuth } from './redux/actions/index';
import { BrowserRouter } from 'react-router-dom';
import RequirAuth from './componetnts/RequirAuth';
import ProfilePage from './componetnts/ProfilePage';

function App(props) {

  useEffect(() => {
    props.getUserAuth()
  }, [props])

  return (
 <div className='app'>
  <BrowserRouter>
  <Routes>
    <Route index element={<Login/>}/>
    <Route path='/profile' element={<ProfilePage/>}/>
    <Route path='/home' element={
    <RequirAuth>
      <Home/>
    </RequirAuth>
    }/>
    <Route path='*' element={<h1 className='text-center mt-5'>Page Not Found</h1>}/>
  </Routes>
  </BrowserRouter>
 </div>
  );
}
const mapStateToProps = (state) => {
  return {};
};
const mapDispatchToProps = (dispatch) => {
  return {
    getUserAuth: () => dispatch(getUserAuth()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
