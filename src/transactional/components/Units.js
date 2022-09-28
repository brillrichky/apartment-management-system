import { useState } from "react";
import UnitForm from "./unit-form/UnitForm";
import {UnitList} from "./unit-list/UnitList";

import { Provider } from "react-redux";
import { apartStore } from "../../redux/store";


export const Units = () => {
  const [page,setPage] = useState('form')

  return (
    <Provider store={apartStore}>
      {/* {console.log(apartStore.getState())} */}
      {page === "form" ? (
        <UnitForm setPage={setPage} />
      ) : (
        <UnitList setPage={setPage} />
      )}
    </Provider>
  );
};