import {Container, Row, Col} from 'react-bootstrap';
// // import { Halo } from "./greetings/Halo";
import { Header } from "./components/layout/Header";
import { Footer } from "./components/layout/Footer";
// // import { CounterRedux } from './counter_locker/CounterRedux';
// // import { GuestBookRedux } from './components/guest-book-redux/GuestBookRedux';
import { Provider } from 'react-redux';
import { appStore } from './reducer/store';
import { ApartmentBookRedux } from './components/apartment-book-redux/ApartmentBookRedux';

// // import { ShoeLocker } from './shoe_locker/ShoeLocker';
// import { Outlet } from 'react-router-dom';
// import { CounterActions } from './reducer/counter-reducer';
// import { ShoeLocker } from './shoe_locker/ShoeLocker';
// import { CounterWithContext } from './components/counter-context/CounterContext';
// import {GuestBookContext} from './components/guest-book-context/GuestBookContext';
// import { GuestBookList } from './guest-book/GuestBookList';
// import {Counter} from "./counter/Counter";
// import { Component } from 'react';
// import { YearBook } from "./yearbook/YearBook"; 
// import { DemoHoc } from './hoc/DemoHoc';
// import { RenderName } from './render-props/RenderName';
// import { DemoRenderProps } from './render-props/DemoRenderProps';
// import { CounterFn } from './components/counter/CounterFn';
// import { GuestBook } from './components/guest-book/GuestBook';


export function App() {
  return(
  <Container fluid>
    <Header />
    {/* <CounterWithContext /> */}
    {/* <CounterFn />
//     <GuestBook />
//     <GuestBookContext /> */}
    {/* <ShoeLocker /> */}
     {/* <CounterRedux /> */}
     <Provider store={appStore}>
    <ApartmentBookRedux />
    </Provider>
  {/* <h1>Hai ^_^</h1>
    <Provider store={appStore}> 
      <Outlet/>
    </Provider> */}
     <Footer />
   </Container>
);
}
// //compponen

// import { useState } from "react";
// import TodoList from "./components/todo/TodoList";

// export function App() {

//   const [isRefresh, setIsRefresh] = useState(true)

//   const setRefresh = (status) => {
//     setIsRefresh(status)
//   }

//   return (
//     <div className="App">
//       <div className="content">
//         <Header setRefresh={setRefresh} />
//         <TodoList setRefresh={setRefresh} isRefresh={isRefresh} />
//       </div>
//     </div>
//   );
// }

// export default App;