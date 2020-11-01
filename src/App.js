import React, { memo } from "react";
import { renderRoutes } from "react-router-config";
import { Provider } from "react-redux";

import routes from "@/router";
import store from "@/store";

import WMAppHeader from "@/components/app-header";
import WMAppFooter from "@/components/app-footer";
import { HashRouter } from "react-router-dom";

export default memo(function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        <WMAppHeader />
        {renderRoutes(routes)}
        <WMAppFooter />
      </HashRouter>
    </Provider>
  );
});
