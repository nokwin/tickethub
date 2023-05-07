import { FC } from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { EventPage } from "./pages/event.page";
import { HomePage } from "./pages/home.page";
import { OrderPage } from "./pages/order.page";
import { store } from "./store";

interface AppProps {}

export const App: FC<AppProps> = ({}) => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/event/:id" element={<EventPage />} />
          <Route path="/order" element={<OrderPage />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};
