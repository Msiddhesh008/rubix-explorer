/* eslint-disable no-unused-vars */
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import { route } from "./routes/_routes";
import DefaultLayout from "./Layout/DefaultLayout";

const router = createBrowserRouter(
  createRoutesFromElements(
    route.map(({ path, element }) => (
      <Route
        key={path}
        path={path}
        element={<DefaultLayout >{element}</DefaultLayout>}
      />
    ))
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
