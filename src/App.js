import { RouterProvider, createBrowserRouter, useSubmit } from 'react-router-dom';
import './App.css';


import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import '@fortawesome/fontawesome-free/css/all.min.css'
import Layout from './components/Layout/Layout';
import Home from './components/Home/Home';
import Cart from './components/Cart/Cart';
import Products from './components/Products/Products';
import Categories from './components/Categories/Categories';
import Brands from './components/Brands/Brands';
import Notfount from './components/Notfount/Notfount';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import LogOut from './components/LogOut/LogOut';
import { useState } from 'react';
import jwtDecode from 'jwt-decode';
import YesOrNo from './components/YesOrNo/YesOrNo';

function App() {
  const [userData, setuserData] = useState(null)
  
  const routers = createBrowserRouter([
    {
      path: '', element: <Layout userData={userData}/>, children: [
        { index: true, element:<YesOrNo> <Home /></YesOrNo> },
        { path: 'cart', element: <YesOrNo> <Cart /></YesOrNo> },
        { path: 'product', element: <YesOrNo> <Products/></YesOrNo>  },
        { path: 'cati', element: <YesOrNo> <Categories /></YesOrNo>  },
        { path: 'brand', element: <YesOrNo> <Brands/></YesOrNo>  },
        { path: 'Register', element:  <YesOrNo> <Register /></YesOrNo> },
        { path: 'Login', element: <Login saveUserData={saveUserData} /> },
        { path: 'LogOut', element: <LogOut/> },
        { path: '*', element: <Notfount/> },
      ]
    }
  
  ]);



function saveUserData (){

  let encodet= localStorage.getItem('userdata')
  let decodete =jwtDecode(encodet);
  setuserData(decodete);
}

  return <RouterProvider router={routers}> </RouterProvider>
};

export default App;
