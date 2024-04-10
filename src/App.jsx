import "./App.css";
import Home from "./home";
import { Outlet } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./app/store";

function App() {
  return (
    <>
      <Provider store={store}>
        <Outlet />
      </Provider>
    </>
  );
}

export default App;
