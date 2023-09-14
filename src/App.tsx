import { Suspense } from "react";
import { QueryClientProvider } from "react-query";
import { ThemeProvider } from "@mui/styles";
import { themeMui } from "./theme";
import queryClient from "./services/queryClient";
import { BrowserRouter } from "react-router-dom";
import Router from "./router";
import PageFallback from "./components/PageFallback";
import "./i18next";

function App() {
  return (
    <Suspense fallback={<PageFallback />}>
      <div className="app">
        <QueryClientProvider client={queryClient}>
          <ThemeProvider theme={themeMui}>
            <BrowserRouter>
              <Router />
            </BrowserRouter>
          </ThemeProvider>
        </QueryClientProvider>
      </div>
    </Suspense>
  );
}

export default App;
