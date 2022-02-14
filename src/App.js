import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store";
import Home from "./component/Home";
import Employee from "./component/Employee";

function App() {
  return (
    <div>
      <Provider store={store}>
        <BrowserRouter>
          <div>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/employee" element={<Employee />} />
            </Routes>
          </div>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
