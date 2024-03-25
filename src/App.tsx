import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Home from "@/Home";
import ReactQueryProvider from "@/ReactQueryProvider";
import Collection from "@/collections/Collection";
import Collections from "@/collections/Collections";
import Setup from "@/setup/Setup";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/setup",
      element: <Setup />,
    },
    {
      path: "/collections",
      element: <Collections />,
    },
    {
      path: "/collections/:collectionName",
      element: <Collection />,
    },
  ]);

  return (
    <>
      <ReactQueryProvider>
        <RouterProvider router={router} />
      </ReactQueryProvider>
    </>
  );
}

export default App;
