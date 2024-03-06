import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useEffect } from "react";
import { Provider, useDispatch } from "react-redux";
import appStore from "./utils/appStore";
import Login from "./components/Login";
import Browse from "./components/Browse";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./utils/firebase";
import { addUser, removeUser } from "./utils/userSlice";

function App() {
  const appRouter = createBrowserRouter([
    { path: "/", element: <Login /> },
    { path: "/browse", element: <Browse /> },
  ]);

  return (
    <RouterProvider router={appRouter}>
      <Provider store={appStore} />
    </RouterProvider>
  );
}

export default App;
