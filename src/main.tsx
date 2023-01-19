import ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import { Toaster } from "react-hot-toast";

import App from "./App";
import { theme } from "./theme";
import "./index.css";

ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
).render(
  <ChakraProvider theme={theme}>
    <Toaster position="top-center" reverseOrder={false} />
    <App />
  </ChakraProvider>
);
