import { createBrowserRouter } from "react-router-dom";
import {App} from './App';
import Home from '../src/Components/HomeDummy';
import {Login} from './Components/Login/Login';
import {Protect} from './Protect';
import { Transactions } from "../src/transactional/components/Transactions";

export const routes = createBrowserRouter([
    {
        path:'/',
        element:<App/>,
        children:[
            {
                path:'',
                element:<Protect><Transactions/></Protect>
            },
            {
                path:'login',
                element:<Login/>

            }
        ]
    }
])
