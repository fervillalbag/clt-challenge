import ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";

import App from "./App";
import { theme } from "./theme";
import { store } from "./app/store";

import "react-calendar/dist/Calendar.css";
import "./index.css";

ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
).render(
  <Provider store={store}>
    <ChakraProvider theme={theme}>
      <Toaster position="top-center" reverseOrder={false} />
      <App />
    </ChakraProvider>
  </Provider>
);
