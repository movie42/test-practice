import React from "react";
import ReactDOM from "react-dom/client";
import { RecoilRoot } from "recoil";
import App from "./App";
import Loading from "./Components/Loading/Loading";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);

root.render(
  <React.StrictMode>
    <RecoilRoot>
      <React.Suspense fallback={<Loading />}>
        <App />
      </React.Suspense>
    </RecoilRoot>
  </React.StrictMode>,
);
