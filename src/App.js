import logo from "./logo.svg";
import "./App.css";
import Head from "./components/Head";
import Body from "./components/Body";
import { Provider } from "react-redux";
import store from "./utils/store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <MainContainer />,
      },
      {
        path: "/watch",
        element: <WatchPage />,
      },
    ],
  },
]);
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        {/* <Head /> */}
        <RouterProvider router={appRouter} />
        {/**
         * Head
         * Body
         *  Sidebar
         *    MenuItems
         * MainContainer
         *  ButtonList
         *  VideoContainer
         *      VideoCard
         *
         *  */}
      </div>
    </Provider>
  );
}

export default App;
