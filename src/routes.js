import { createBrowserRouter } from "react-router-dom";
import {App} from './App';
import Home from '../src/Components/HomeDummy';
import {Login} from './Components/Login/Login';
import {Protect} from './Protect';
import { Transactions } from "../src/transactional/components/Transactions";
import UnitApartement from "../src/unitApartment/UnitApartement";

export const routes = createBrowserRouter([
  //   {
  //     path: "/",
  //     element: <App />,
  //     children: [
  //       {
  //         path: "",
  //         element: (
  //           <Protect>
  //             <UnitApartement />
  //           </Protect>
  //         ),
  //       },
  //       {
  //         path: "login",
  //         element: <Login />,
  //       },
  //     ],
  //   },
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: (
          <Protect>
            {" "}
            <Home />
          </Protect>
        ),
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "/home",
        element: (
          <Protect>
            {" "}
            <Home />
          </Protect>
        ),
      },
      {
        path: "/transactions",
        element: (
          <Protect>
            {" "}
            <Transactions/>
          </Protect>
        ),
      },
    ],
  },
]);
