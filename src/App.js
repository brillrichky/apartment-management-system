import logo from "./logo.svg";
import "./App.css";
import { TransactionList } from "./transactional/components/transaction-list/TransactionList";
import { Provider } from "react-redux";
import { store } from "./transactional/reducer/store";
import { Container } from "react-bootstrap";

function App() {
  return (
    <Provider store={store}>
      <Container fluid>
        <TransactionList />
      </Container>
    </Provider>
  );
}

export default App;
