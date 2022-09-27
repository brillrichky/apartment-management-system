//import logo from './logo.svg';
import { Container } from 'react-bootstrap';
//import { Provider } from 'react-redux';
import './App.css';
import { ApartmentBook } from './components/apartment-book/ApartmentBook';
import { Footer } from './components/layout/Footer';
import { Header } from './components/layout/Header';

function App() {
  return (
    <Container fluid>
      <Header />
      {/* <Provider store={appStore}> */}
        <ApartmentBook />
      {/* </Provider> */}
      <Footer />
    </Container>
  );
}

export default App;
