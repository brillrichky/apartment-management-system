import {UnitApartementList} from "./UnitApartementList";
import { useState } from "react";
import { Provider } from "react-redux";
import { apartStore } from "../redux/store";
import { UnitApartementDetail } from "./UnitApartementDetail";
import EditUnitApartement from "./EditUnitApartement";
import EditResident from "./EditResident";

const UnitApartement = () => {
      const [page,setPage] = useState('list')
      const [detail, setDetail] = useState();
      const [detailResident,setDetailResident] = useState();

  return (
    <Provider store={apartStore}>
      {page === "list" ? (
        <UnitApartementList setPage={setPage} setDetail={setDetail} />
      ) : page === "update-apart" ? (
        <EditUnitApartement setPage={setPage} detail={detail} />
      ) :
      page === "update-resident" ? (
        <EditResident setPage={setPage} detail={detail} detailResident={detailResident} />
      ) :
      (
        <UnitApartementDetail setPage={setPage} detail={detail} setDetailResident={setDetailResident} />
      )}
    </Provider>
  );
};
export default UnitApartement;
