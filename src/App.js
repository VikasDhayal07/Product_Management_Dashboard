import Link from "next/link";
import { Provider } from "react-redux";
import { store } from "./store";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";

export default function App() {
  const appContainerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "30px",
    backgroundColor: "#f0f0f0",
  };

  return (
    <Provider store={store}>
      <div style={appContainerStyle} className="App">
        <Favorites />
        <Home />
      </div>
    </Provider>
  );
}
