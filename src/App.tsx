import "./App.css";

import { ColorSchemeScript, MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";

import ReactQueryProvider from "@/ReactQueryProvider";
import { Routes } from "@/routes";

function App() {
  return (
    <>
      <ColorSchemeScript defaultColorScheme="auto" />
      <ReactQueryProvider>
        <MantineProvider defaultColorScheme="auto"><Routes /></MantineProvider>
      </ReactQueryProvider>
    </>
  );
}

export default App;
