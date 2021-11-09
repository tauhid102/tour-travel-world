import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from './Pages/Shared/Header/Header';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Firebase/Login';
import NotFound from './Pages/NotFound/NotFound';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import Blog from './Pages/Blog/Blog';
import Books from './Pages/Books/Books';
import MyBooking from './Pages/MyBooking/MyBooking';
import ManageOrder from './Pages/ManageOrder/ManageOrder';
import AddService from './Pages/AddService/AddService';
import Footer from './Pages/Shared/Footer/Footer';
import AuthProvider from './Context/AuthProvider';

function App() {
  return (
    <div className="">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route path='/home'>
              <Home></Home>
            </Route>
            <PrivateRoute path='/blog'>
              <Blog></Blog>
            </PrivateRoute>
            <PrivateRoute path='/services/:bookID'>
              <Books></Books>
            </PrivateRoute>
            <PrivateRoute path='/myBooking'>
              <MyBooking></MyBooking>
            </PrivateRoute>
            <PrivateRoute path='/manageOrder'>
              <ManageOrder></ManageOrder>
            </PrivateRoute>
            <PrivateRoute path='/addservices'>
              <AddService></AddService>
            </PrivateRoute>
            <Route path='/login'>
              <Login></Login>
            </Route>
            <Route path='*'>
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
