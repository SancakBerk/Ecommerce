"use client";

import { Provider } from "react-redux";
import { persistor, store } from "../app/store";
import { PersistGate } from "redux-persist/integration/react";

export default function ReduxProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  // const loadingReturn = (): JSX.Element => {
  //   return (
  //     <div>
  //       <p>Loading</p>
  //     </div>
  //   );
  // };
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>{children}</PersistGate>
    </Provider>
  );
}
