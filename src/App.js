import Link from "next/link";
import { Provider } from "react-redux";
import { store } from "./store";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";

export default function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Favorites />
        {/* Display the Home and Favorites pages using Next.js routing */}
        <Home />
      </div>
    </Provider>
  );
}
