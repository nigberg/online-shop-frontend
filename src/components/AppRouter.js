import {Routes, Route, Navigate} from 'react-router-dom';
import { authRoutes, publicRoutes } from '../routes';
import { SHOP_ROUTE } from '../utils/constants';
import Shop from '../pages/Shop';
import { Context } from '../index';
import { useContext } from 'react';

const AppRouter = () => {
  const {user} = useContext(Context);
  console.log(user)
  return(
    <Routes>
      {user.isAuth && authRoutes.map(route =>
      <Route key={route.path} path={route.path} element={<route.component/>} exact />
      )}
      {publicRoutes.map(route =>
      <Route key={route.path} path={route.path} element={<route.component/>} exact />
      )}
      <Route path='*' element={<Shop/>}/>
    </Routes>
  )

};

export default AppRouter;