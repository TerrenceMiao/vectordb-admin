import "./App.css";

import { ColorSchemeScript, MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";

import { RouterProvider, createBrowserRouter } from "react-router-dom";

import ReactQueryProvider from "@/ReactQueryProvider";

import Home from "@/Home";
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
      <ColorSchemeScript />
      <ReactQueryProvider>
        <MantineProvider>
          <RouterProvider router={router} />
        </MantineProvider>
      </ReactQueryProvider>
    </>
  );
}

export default App;
