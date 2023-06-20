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
import AddProductDetalis from './components/AddProductDetalis/AddProductDetalis';

function App() {
  const [userData, setuserData] = useState(null);



  function saveUserData (){

    let encodet= localStorage.getItem('userdata')
    let decodete =jwtDecode(encodet);
    setuserData(decodete);
  }
  
  
  const routers = createBrowserRouter([
    {
      path: '', element: <Layout userData={userData}/>, children: [
        { index: true, element:<YesOrNo userData={userData}> <Home /></YesOrNo> },
        { path: 'cart', element: <YesOrNo userData={userData}> <Cart /></YesOrNo> },
        { path: 'product', element: <YesOrNo userData={userData}> <Products/></YesOrNo>  },
        { path: 'cati', element: <YesOrNo userData={userData}> <Categories /></YesOrNo>  },
        { path: 'brand', element: <YesOrNo userData={userData}> <Brands/></YesOrNo>  },
        { path: 'Register', element:  <Register /> },
        { path: 'AddProductDetalis/:id', element: <AddProductDetalis/> },
        { path: 'Login', element: <Login saveUserData={saveUserData} /> },
        { path: 'LogOut', element: <LogOut/> },
      
        { path: '*', element: <Notfount/> },
      ]
    }
  
  ]);




  return <RouterProvider router={routers}> </RouterProvider>
};

export default App;
