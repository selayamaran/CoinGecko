import {
    BrowserRouter,
    Routes as MainRoutes,
    Route
  } from "react-router-dom";
import Home from '../routes/Home';
import NotFound from '../routes/NotFound';
import Coins from '../routes/Coins';
import Coin from "../routes/Coin";

const Layout = () => {
    return (
        <>
        <BrowserRouter>
            <MainRoutes>
                <Route path='/' element={<Home/>} />
                <Route path='/coins' element={<Coins/>} />
                <Route path='/coins/:id' element={<Coin/>} />
                <Route path='*' element={<NotFound/>} />
            </MainRoutes>
        </BrowserRouter>
        </>
    );
}

export default Layout;