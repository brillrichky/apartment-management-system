import { createBrowserRouter } from "react-router-dom";
import {App} from './App';
import Home from '../src/Components/HomeDummy';
import {Login} from './Components/Login/Login';
import {Protect} from './Protect';

export const routes = createBrowserRouter([
    {
        path:'/',
        element:<App/>,
        children:[
            {
                path:'',
                element:<Protect><Home/></Protect>
            },
            {
                path:'login',
                element:<Login/>

            },
            {
                path:'/home',
                element:<Protect><Home/></Protect>

            }
        ]
    }
])
