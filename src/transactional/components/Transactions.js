import { useState } from "react";
import TransactionForm from "../components/transaction-form/TransactionForm";
import { TransactionList } from "../components/transaction-list/TransactionList";

import { Provider } from "react-redux";
import { apartStore } from "../../redux/store";
import { Navbar } from "../../Components/Navbar/Navbar";

export const Transactions = () => {
  const [page,setPage] = useState('list')

  return (
    <Provider store={apartStore}>
      {/* {console.log(apartStore.getState())} */}
      {page === "form" ? (
        <>
          <Navbar />
          <TransactionForm setPage={setPage} />
        </>
      ) : (
        <>
          <Navbar />
          <TransactionList setPage={setPage} />
        </>
      )}
    </Provider>
  );
};
