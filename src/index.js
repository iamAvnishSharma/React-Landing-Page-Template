import * as React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import KediyaPage from './KediyaPage';
import ChorniPage from './ChorniPage';
import ChakdaPage from './ChakdaPage';
import KotiPage from './KotiPage';
import ThrowbackPage from './ThrowbackPage';
import Throwback2022Page from './Throwback2022Page';
import * as serviceWorker from './serviceWorker';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <App/>
    ),
  },
  {
    path: "/kediya",
    element: <KediyaPage/>,
  },
  {
    path: "/chorni",
    element: <ChorniPage/>,
  },
  {
    path: "/chakda",
    element: <ChakdaPage/>,
  },
  {
    path: "/koti",
    element: <KotiPage/>,
  },
  {
    path: "/throwback",
    element: <ThrowbackPage/>,
  },
  {
    path: "/throwback2022",
    element: <Throwback2022Page/>,
  }
]);


ReactDOM.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
